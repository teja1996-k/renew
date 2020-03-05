import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-primary-information",
  templateUrl: "./primary-information.component.html",
  styleUrls: ["./primary-information.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PrimaryInformationComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}
  // Instance Variables
  public formName: any;
  public gutterSize: number = 40;
  public rowHeight: number = 82;

  public applied: boolean = false;

  public primaryCol: number;

  public fontSize: number;
  public formMargin: number;
  public titleMargin: number;
  public buttonTopMargin: number;
  public buttonBottomMargin: number;

  public isXsmall: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;

  ngOnInit() {
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

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
          this.buttonTopMargin = 50;
          this.buttonBottomMargin = 20;
        }
      });
  }
  setMyStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`
    };
  }

  // Submit Primary Information
  submitPrimaryInformation(primaryInformation) {
    this.applied = true;
    let primaryInfo = primaryInformation.value;
    localStorage.setItem("onboardingFormInfo", JSON.stringify(primaryInfo));
  }
}
