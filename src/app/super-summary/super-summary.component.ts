import { RoleService } from "./../role.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-super-summary",
  templateUrl: "./super-summary.component.html",
  styleUrls: ["./super-summary.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SuperSummaryComponent implements OnInit {
  public formName: any;
  constructor(
    public role: RoleService,
    public breakpointObserver: BreakpointObserver
  ) {}

  public gutterSize: number = 50;
  public rowHeight: number;

  public applicantRow: number;
  public calculatorRow: number;
  public pricingRow: number;
  public decisionRow: number;
  public rateRow: number;

  public tooltipPosition: string = "below";

  public primaryCol: number;

  public fontSize: number;
  public formMargin: number;
  public titleMargin: number;

  public isXsmall: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;

  ngOnInit() {
    this.formName = this.role.getFormDetails().formName;

    // Breakpoints
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
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.isXsmall = false;
          this.isSmall = true;
          this.isMedium = false;
          this.isLarge = false;

          this.primaryCol = 2;

          this.fontSize = 30;
          this.formMargin = 65;
          this.titleMargin = 60;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;

          this.primaryCol = 2;

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;

          this.primaryCol = 3;

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
        }
      });

    // TODO: Set Height Based on Form amd breakpoint

    // FIXME: Line Maneger
    if (this.formName.lineManager) {
      this.rowHeight = 1;

      this.applicantRow = 5;
      this.calculatorRow = 12;
      this.pricingRow = 20;
      this.decisionRow = 7;
      this.rateRow = 7;
    } else if (this.formName.underwriter) {
      this.rowHeight = 2;

      this.applicantRow = 6;
      this.calculatorRow = 8;
      this.decisionRow = 8;
      this.rateRow = 3;
    } else if (this.formName.csr) {
      this.rowHeight = 2;
      this.applicantRow = 8;
    }
  }

  setMyStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`
    };
  }
}
