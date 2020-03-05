import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DropdownApisService } from 'app/dropdown-apis.service';
import { Router } from '@angular/router';
import config from "../../assets/config.json";


@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.scss']
})
export class EditIncomeComponent implements OnInit {

  constructor(
    public breakpointObserver: BreakpointObserver,
    public dropdownApi: DropdownApisService,
    public router: Router
  ) { }

  // Instance Variables
  public formName: any;
  public onboardingFormObj: object;

  public gutterSize: number = 50;
  public rowHeight: number = 90;

  public applied: boolean = false;

  public selectedProduct = -1;
  public productInfo: object;

  public primaryCol: number;
  public contractorInfoCol: number;
  public checkboxCol: number;

  public fontSize: number;
  public formMargin: number;
  public titleMargin: number;
  public buttonTopMargin: number;
  public buttonBottomMargin: number;

  public isXsmall: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;

  public sourceOfIncome: object[];
  public contractors: object[];
  public productsList: object[];
  public newDate:any;

  ngOnInit() {
    let onboardingJSON = localStorage.getItem("onboardingFormInfo");
    this.onboardingFormObj = JSON.parse(onboardingJSON);
    console.log(this.onboardingFormObj['birthDate']);
    debugger;
    var date = new Date(this.onboardingFormObj['birthDate']);
     this.newDate=new Date( date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear());
    console.log(this.newDate);

    this.getSourceOfIncome();
    this.getContractors();
    this.getProducts();
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
          this.contractorInfoCol = 1;
          this.checkboxCol = 1;

          this.fontSize = 28;
          this.formMargin = 30;
          this.titleMargin = 50;
          this.buttonTopMargin = 80;
          this.buttonBottomMargin = 50;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.isXsmall = false;
          this.isSmall = true;
          this.isMedium = false;
          this.isLarge = false;

          this.primaryCol = 2;
          this.contractorInfoCol = 2;
          this.checkboxCol = 1;

          this.fontSize = 30;
          this.formMargin = 65;
          this.titleMargin = 60;
          this.buttonTopMargin = 70;
          this.buttonBottomMargin = 50;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;

          this.primaryCol = 3;
          this.contractorInfoCol = 2;
          this.checkboxCol = 2;

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
          this.buttonTopMargin = 60;
          this.buttonBottomMargin = 30;
        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;

          this.primaryCol = 4;
          this.contractorInfoCol = 2;
          this.checkboxCol = 3;

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
          this.buttonTopMargin = 50;
          this.buttonBottomMargin = 20;
        }
      });
  }
  getSourceOfIncome(): any {
    this.dropdownApi
      .getDropdownList(config.sourceOfIncomeUrl)
      .subscribe(sourceOfIncome => {
        this.sourceOfIncome = sourceOfIncome;
        // console.log(this.sourceOfIncome);
      });
  }

  getProductId(id, name) {
    this.productInfo = {
      id: id,
      name: name
    };
  }

  getContractors(): any {
    this.dropdownApi
      .getContructorList(config.contractorsUrl, {
        zipcode: this.onboardingFormObj["zipcode"]
      })
      .subscribe(contractors => {
        this.contractors = contractors;
      });
  }

  getProducts(): any {
    this.dropdownApi
      .getDropdownList(config.productsUrl)
      .subscribe(productsList => {
        this.productsList = productsList;
        // console.log(this.productsList);
      });
  }
  setMyStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`
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

  submitIncomeInformation(otherInfo) {
    let incomeInfo = otherInfo.value;

    // birthday formating

    let birthDayObj = incomeInfo["birthDate"]["_i"];
    let birthdate = `${birthDayObj["year"]}-${birthDayObj["month"] + 1}-${
      birthDayObj["date"]
    }`;

    let contractorObj = this.contractors.filter(contractor => {
      if (contractor["id"] === incomeInfo["contractor"]) return contractor;
    });
    let sourceOfIncomeObj = this.sourceOfIncome.filter(sourceOfIncome => {
      if (sourceOfIncome["id"] === incomeInfo["sourceOfIncome"])
        return sourceOfIncome;
    });
    delete incomeInfo["products"];
    incomeInfo["product"] = this.productInfo;
    incomeInfo["contractor"] = contractorObj[0];
    incomeInfo["sourceOfIncome"] = sourceOfIncomeObj[0];
    incomeInfo["birthDate"] = birthdate;

    localStorage.setItem(
      "onboardingFormInfo",
      JSON.stringify({
        ...this.onboardingFormObj,
        ...incomeInfo
      })
    );

    this.router.navigate(["/review"]);
  }

}
