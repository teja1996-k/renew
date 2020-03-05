import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { DropdownApisService } from 'app/dropdown-apis.service';
import config from "../../assets/config.json";
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-sample',
  templateUrl: './otp-sample.component.html',
  styleUrls: ['./otp-sample.component.scss']
})
export class OtpSampleComponent implements OnInit {
  onboardingFormObj:any;
  public resendOtp:boolean;
  public submit:boolean=true;
  public outmsg: string;
  public mobileNo: string;
  public numArr:string;
  constructor(public dropdownApi: DropdownApisService,private router: Router) { }

  ngOnInit() {
    let onboardingJSON = localStorage.getItem("onboardingFormInfo");
    this.onboardingFormObj = JSON.parse(onboardingJSON);
    this.mobileNo=this.onboardingFormObj['mobile'].toString();
    this.numArr = this.mobileNo.substring(0,this.mobileNo.length-4)

    this.numArr=this.numArr+"XXXX";
    this.sendOtp();

        // OTP Input
    document.querySelectorAll(".otSc").forEach(function(otpEl) {
        otpEl.addEventListener("keyup", backSp);
        otpEl.addEventListener("keypress", function() {
            console.log(this.nextElementSibling);
            var nexEl = this.nextElementSibling;
            if(nexEl){
            nexEl.focus();
            }
            
        })
    })

    function backSp(backKey) {
        if (backKey.keyCode == 8) {
          if(this.previousElementSibling){
            var prev = this.previousElementSibling.focus()
          }
        }
    }
    // OTP Input (End)


  }

  sendOtp(){
    this.resendOtp=false;
    this.submit=true;
    console.log("sending otp")
    let obj = {
      "mobileNo": this.onboardingFormObj['mobile']
    }

    this.dropdownApi
    .applyOnboardingForm(config.sendOtpUrl, obj)
    .subscribe(res => {
      console.log(res);
        });
  }


  submitOtp(digit1:any,digit2:any,digit3:any,digit4:any,digit5:any){
    console.log(digit1);
    console.log(digit2);
    console.log(digit3);
    console.log(digit4);
    console.log(digit5);

    var otp=digit1+digit2+digit3+digit4+digit5;
    console.log(+otp)
    let verifyObj={
      "mobileNo": this.onboardingFormObj['mobile'],
      "otpNo": +otp

    }
    this.dropdownApi
    .validateOtp(config.validateOtpUrl,verifyObj)
    .subscribe(res => {
      console.log(res);
      let success = res["success"];
      let message = res["message"];
      if(success && message == "OTP Expired"){
        console.log("OTP exprired try agin");
        this.resendOtp=true;
        this.submit=false;
        console.log("resendOtp",this.resendOtp)
        this.outmsg="OTP expired resend otp";
      }
      else if(success && message == "OTP validated successfully"){
        this.resendOtp=false;
        this.submit=true;
        this.router.navigate(["/income"]);

      }
      else{
        this.submit=true;
        this.resendOtp=false;
        console.log("OTP invalid");
        this.outmsg="Incorrect OTP"
        console.log(this.outmsg);
      }
    
    });


  
  }



}

