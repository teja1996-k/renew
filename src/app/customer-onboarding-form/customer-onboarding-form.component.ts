import { Component, OnInit } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import config from "../../assets/config.json";
import { TranslationService } from "@alfresco/adf-core";
import { DropdownApisService } from "app/dropdown-apis.service.js";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-onboarding-form",
  templateUrl: "./customer-onboarding-form.component.html",
  styleUrls: ["./customer-onboarding-form.component.scss"]
})
export class CustomerOnboardingFormComponent implements OnInit {
  constructor(
    public translationService: TranslationService,
    public breakpointObserver: BreakpointObserver,
    public dropdownApi: DropdownApisService,
    private router: Router
  ) {}

  // Instance Variables
  private selectedLanguage: string = "en";
  public images = config;
  public selectedProduct = -1;
  public productId: number;

  public gutterSize: number = 50;
  public rowHeight: number = 90;

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

  public sourceOfIncome: object[];
  public contractors: object[];
  public productsList: object[];

  selected() {
    this.translationService.use(this.selectedLanguage);
  }

  getProductId(id) {
    this.productId = id;
  }

  ngOnInit() {
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
          this.documentsCol = 1;
          this.contractorInfoCol = 1;
          this.checkboxCol = 1;

          this.fontSize = 28;
          this.spanText = 20;
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
          this.documentsCol = 2;
          this.contractorInfoCol = 2;
          this.checkboxCol = 1;

          this.fontSize = 30;
          this.formMargin = 75;
          this.titleMargin = 60;
          this.buttonTopMargin = 70;
          this.buttonBottomMargin = 50;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;

          this.primaryCol = 2;
          this.documentsCol = 2;
          this.contractorInfoCol = 2;
          this.checkboxCol = 2;

          this.fontSize = 36;
          this.formMargin = 97;
          this.titleMargin = 60;
          this.buttonTopMargin = 60;
          this.buttonBottomMargin = 30;
        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;

          this.primaryCol = 4;
          this.documentsCol = 3;
          this.contractorInfoCol = 2;
          this.checkboxCol = 3;

          this.fontSize = 36;
          this.formMargin = 97;
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

  getContractors(): any {
    this.dropdownApi
      .getDropdownList(config.contractorsUrl)
      .subscribe(contractors => {
        this.contractors = contractors;
        // console.log(this.contractors);
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

  // On submit of a form

  submitCustomerForm(customerForm) {
    let obj = {
      address: "hyd",
      channel: "web",
      countPeopleStay: null,
      employmentDetails: "self employed",
      income: null,
      priority: "nothing",
      zipcode: 721448,
      customer: {
        address: "hyd"
      },
      region: {
        id: 1
      },
      status: {
        id: "Inprogress"
      },
      branch: {
        id: 1
      },
      contractor: {
        id: null
      },
      sourceOfIncome: {
        id: null
      },
      product: {
        id: this.productId
      }
    };
    let formValues: object = customerForm.value;

    obj.customer["firstName"] = formValues["firstName"];
    obj.customer["lastName"] = formValues["lastName"];
    obj.customer["mobile"] = formValues["mobile"];
    obj.customer["email"] = formValues["email"];
    obj.customer["birthDate"] = formValues["birthDate"];
    obj.customer["ssnNo"] = formValues["ssnNo"];
    obj.sourceOfIncome.id = +formValues["sourceOfIncome"];
    obj.contractor.id = +formValues["contractor"];
    obj.countPeopleStay = formValues["countPeopleStay"];
    obj.income = +formValues["income"];

    this.dropdownApi
      .applyOnboardingForm(config.applyOnboardingFormUrl, obj)
      .subscribe(res => {
        if (res["applicationNo"]) {
          this.router.navigate(["/applicationId"], {
            queryParams: {
              applicationId: res["applicationNo"],
              form: "onboarding"
            },
            skipLocationChange: true
          });
        }
      });
  }
}
