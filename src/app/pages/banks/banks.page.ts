import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Observable } from 'rxjs';
import { BankService } from './../../services/bank.service';
import { BankDetailsPage } from './../../pages/bank-details/bank-details.page';
import { ErrorParserService } from './../../services/error-parser/error-parser.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.page.html',
  styleUrls: ['./banks.page.scss'],
  providers: [Dialogs, BankService, ErrorParserService]
})
export class BanksPage implements OnInit {

  public spinner: any;
  public searchTerm: string = '';
  public searchTerm1: string = '';
  public banks: any = [];
  public items: any = [];

  constructor(
    private loadingCtrl: LoadingController,
    private bankServices: BankService,
    private modalCtrl: ModalController,
    private dialogs: Dialogs,
    private errorParser: ErrorParserService,
    public router: Router) { }

  public async ngOnInit() {
    await this.searchChanged();
    await this.searchManually();
  }

  public async showSpinner() {
    if (this.spinner) {
      return;
    }
    this.spinner = await this.loadingCtrl.create();
    await this.spinner.present();
  }

  public async hideSpinner() {
    if (this.spinner) {
      await this.spinner.dismiss();
      this.spinner = null;
    }
  }

  public async searchChanged() {
    await this.showSpinner();
    this.bankServices.searchData(this.searchTerm.toUpperCase()).toPromise()
    .then(async (banks) => {
      await this.hideSpinner();
      this.banks = banks;
    })
    .catch(async (error) => {
      await this.hideSpinner();
      this.dialogs.alert(this.errorParser.getMessage(error));
    });
  }

  public async searchManually() {
    if (!this.searchTerm1) {
      this.searchChanged();
    }
    this.banks = await this.banks.filter((bank) => {
      return bank.ifsc.toUpperCase().indexOf(this.searchTerm1.toUpperCase()) > -1;
    });
  }

  public onBankSelect(banks) {
    let bankObj = banks;
    let dataSend = JSON.stringify(bankObj);
    this.router.navigate([`bank-details/${dataSend}`]);
  }

}
