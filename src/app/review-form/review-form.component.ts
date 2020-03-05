import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

import config from "../../assets/config.json";
import { ActivatedRoute, Router } from '@angular/router';

import { DropdownApisService } from 'app/dropdown-apis.service.js';


export interface DisplayReviewHeader {
  label: string;
  value: any;
};


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit{
  public onboardingFormObj;
  public gutterSize: number = 50;
  public rowheight:number;
  public primaryCol: number;
  public documentsCol: number;
  public contractorInfoCol: number;
  public checkboxCol: number;
  public buttonTopMargin: number;
  public buttonBottomMargin: number;

  public fontSize: number;
  public spanText: number;
  public formMargin: number;
  public titleMargin: number;

  public isXsmall: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;
  public images = config;
  public position = "";
  public id :number;
  public displayReview:DisplayReviewHeader[];
  displayedColumns: string[] = ['label','value'];
  public dataSource =[];
  public contentEditable1: boolean;
  public contentEditable2: boolean;
  public canSubmit:boolean;
  public visible: boolean = false;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public dropdownApi: DropdownApisService,
    public route: ActivatedRoute,
    private router : Router) { }
  

  ngOnInit() {
    let customerInfo = localStorage.getItem("onboardingFormInfo");
    this.onboardingFormObj = JSON.parse(customerInfo);
    console.log(this.onboardingFormObj);

    this.dataSource = [
      { label: "First Name", value: this.onboardingFormObj["firstName"] },
      { label: "Last Name", value: this.onboardingFormObj["lastName"] },
      { label: "Mobile No", value: this.onboardingFormObj["mobile"] },
      { label: "Email Id", value: this.onboardingFormObj["email"] },
      { label: "Zipcode", value: this.onboardingFormObj["zipcode"] },
      { label: "Income", value: this.onboardingFormObj["income"] },
      {
        label: "Source Of Income",
        value: this.onboardingFormObj["sourceOfIncome"]["name"]
      },
      { label: "Expense", value: this.onboardingFormObj["expense"] },
      {
        label: "Property Value",
        value: this.onboardingFormObj["propertyValue"]
      },
      {
        label: "Social Security Number",
        value: this.onboardingFormObj["ssnNo"]
      },
      {
        label: "Birth Date",
        value: this.onboardingFormObj["birthDate"]
      },
      {
        label: "Contractor",
        value: this.onboardingFormObj["contractor"]["firmName"]
      },
      { label: "Product", value: this.onboardingFormObj["product"]["name"] }
    ];
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.isXsmall = true;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = false;

          this.primaryCol = 1;
          this.documentsCol = 1;
          this.contractorInfoCol = 1;
          this.checkboxCol = 1;
          this.rowheight =400;
          this.fontSize = 28;
          this.spanText = 20;
          this.formMargin = 30;
          this.titleMargin = 50;
          this.buttonTopMargin = 71;
          this.buttonBottomMargin = 218;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.isXsmall = false;
          this.isSmall = true;
          this.isMedium = false;
          this.isLarge = false;

          this.primaryCol = 2;
          this.documentsCol = 2;
          this.contractorInfoCol = 2;
          this.checkboxCol = 1;
          this.rowheight =230;
          this.fontSize = 30;
          this.formMargin = 75;
          this.titleMargin = 60;
          this.buttonTopMargin = 86;
          this.buttonBottomMargin = 127;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;

          this.primaryCol = 4;
          this.documentsCol = 2;
          this.contractorInfoCol = 2;
          this.checkboxCol = 2;
          this.rowheight =260;
          this.fontSize = 36;
          this.formMargin = 97;
          this.titleMargin = 60;
          this.buttonTopMargin = 75;
          this.buttonBottomMargin = 92;

        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;

          this.primaryCol = 4;
          this.documentsCol = 3;
          this.contractorInfoCol = 2;
          this.checkboxCol = 3;
          this.rowheight =210;
          this.fontSize = 36;
          this.formMargin = 97;
          this.titleMargin = 60;
          this.buttonTopMargin = 91;
          this.buttonBottomMargin = 110;
        }
      });



  }
  toggleEditable1(event) {
    // debugger;
    if ( event.target.checked ) {
        this.contentEditable1 = true;    
   }
   else{
     this.contentEditable1=false;
   }
}
toggleEditable2(event) {
  if ( event.target.checked ) {
      this.contentEditable2 = true;    
 }
 else{
   this.contentEditable2=false;
 }
}

editOnboardingForm(){
  this.router.navigate(["/editincome"])


}

  submitreviewForm(reviewForm) {
    let obj = {
      address: "sdfsdf",
      channel: "sdfsdf",
      countPeopleStay: "",
      employmentDetails: "sdfsdf",
      expense: this.onboardingFormObj["expense"],
      propertyValue: this.onboardingFormObj["propertyValue"],
      income: this.onboardingFormObj["income"],
      priority: "",
      zipcode: this.onboardingFormObj["zipcode"],
      customer: {
        firstName: this.onboardingFormObj["firstName"],
        lastName: this.onboardingFormObj["lastName"],
        mobile: this.onboardingFormObj["mobile"],
        email: this.onboardingFormObj["email"],
        ssnNo: this.onboardingFormObj["ssnNo"],
        address: "dddddd",
        birthDate: this.onboardingFormObj["birthDate"]
      },
      contractor: {
        id: this.onboardingFormObj["contractor"]["id"]
      },
      pricing: {
        id: 1
      },
      sourceOfIncome: {
        id: 1
      },
      region: {
        id: 1
      },
      product: {
        id: this.onboardingFormObj["product"]["id"]
      },
      status: {
        id: "Inprogress"
      },
      branch: {
        id: 1
      }
    };
    this.visible = true;
    this.dropdownApi
      .applyOnboardingForm(config.applyOnboardingFormUrl, obj)
      .subscribe(res => {
        if (res["success"]) {
          let obj1 = {
            includeProcessVariables: true,
            processInstanceId: res["data"]["pid"]
          };

          // ===================== Polling Logic

          var a = 0;
          var StartTimer = () => {
            var Timer = setInterval(() => {
              a++;
              this.dropdownApi
                .getEligibilityStatus(config.eligibilityUrl, obj1)
                .subscribe(response => {
                  let variables = response["data"][0]["variables"];
                  let eligibleAmount = variables.filter(variable => {
                    return variable["name"] === "eligibleAmount";
                  });

                  if (eligibleAmount.length) {
                    clearInterval(Timer);
                    this.visible = false;
                    this.router.navigate(["/eligibility"], {
                      queryParams: {
                        applicationId: res["data"]["applicationNo"],
                        eligibleAmount: eligibleAmount[0]["value"],
                        applicantName : this.onboardingFormObj['firstName']
                      },
                      skipLocationChange: true
                    });
                    // localStorage.removeItem("onboardingFormInfo");
                  }
                });

              if (a == 6) {
                clearInterval(Timer);
                this.visible = false;
                this.router.navigate(["/eligibility"], {
                  queryParams: {
                    applicationId: res["data"]["applicationNo"],
                    eligibleAmount: null,
                    applicantName: this.onboardingFormObj['firstName']
                  },
                  skipLocationChange: true
                });
                // localStorage.removeItem("onboardingFormInfo");
              }
            }, 5000);
          };
          StartTimer();
          // =========================================
        }
      });

  }



  setMyStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`,
      "margin-top": `${this.titleMargin}px`,
      "margin-bottom": `${this.titleMargin}px`
    };
  }

  setCheckBoxStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`,
      "margin-top": `${this.titleMargin}px`,
      "margin-bottom": `${this.titleMargin - 20}px`
    };
  }

}
