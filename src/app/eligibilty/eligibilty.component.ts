import { Component, OnInit } from '@angular/core';
import config from "../../assets/config.json";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-eligibilty',
  templateUrl: './eligibilty.component.html',
  styleUrls: ['./eligibilty.component.scss']
})
export class EligibiltyComponent implements OnInit {
  public image=config;
  public eligibleAmount:number=25423;
  public msg1:string;
  public msg2:string;
  public msg3:string;
  public amount:string;
  public successimage;
  public height:number;
  public appId: string;
  public applicantName:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.appId = params["applicationId"];
      this.eligibleAmount = params["eligibleAmount"];
      this.applicantName= params["applicantName"]
    
    if (this.eligibleAmount === null){
    this.msg1=null;
    this.msg2 = `${this.applicantName}, Your application is under process. We will get back to you`;
    this.msg3="Thank you!";
    this.amount=null;
    this.successimage=null;
    this.height=400;
    }
  else {
    if (this.eligibleAmount > 0)
    {
    this.msg1=`Congratulations! ${this.applicantName}`;
      this.msg2 = `You are pre-qualified for a loan amount`;
      this.msg3="Thank you!";
      this.amount=`$ ${this.eligibleAmount}`;
      this.successimage=this.image['success']
      this.height=600;
    }

    else
    { 
      this.msg1 = `Thank you! ${this.applicantName}`;
      this.msg2 = "You are not eligible for the loan amount you have applied";
      this.msg3 =null;
      this.amount=null;
      this.successimage=null;
      this.height=400;
    }
  }
});
}

}
