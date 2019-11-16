import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from './../../services/bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.page.html',
  styleUrls: ['./bank-details.page.scss'],
})
export class BankDetailsPage implements OnInit {
  public bankDetails = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bankService: BankService) { }

  ngOnInit() {
    let dataRec = this.activatedRoute.snapshot.paramMap.get('bank');
    let bankObj = JSON.parse(dataRec);
    this.bankDetails = bankObj;
  }

}
