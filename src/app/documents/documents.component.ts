import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import config from "../../assets/config.json";

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DocumentsComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}
  // Instance Variables
  // ================
  public documentLists = [];
  // public originalDocuments = [
  //   { type: "Tax Return", id: 1 },
  //   { type: "Driving Licence", id: 2 },
  //   { type: "Credit Score", id: 3 }
  // ];
  public documentTypes = [
    { type: "Tax Return", id: 1, disabled: false },
    { type: "Driving Licence", id: 2, disabled: false },
    { type: "Credit Score", id: 3, disabled: false }
  ];

  // For displying documents in assending order by id
  // public documents = this.documentTypes.sort(function(a, b) {
  //   return a.id - b.id;
  // });

  public selectedValue;
  // ================

  public gutterSize: number = 50;
  public rowHeight: number = 90;

  public images = config;

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

  // Add Document
  addDocument(documentId) {
    let documentObj = this.documentTypes.filter(document => {
      return document.id == documentId;
    });
    this.documentLists.push(documentObj[0]);

    this.selectedValue = undefined;
    // Remove from array
    // let index = this.documentTypes.findIndex(x => x["id"] === documentId);
    // this.documentTypes.splice(index, 1);

    this.documentTypes.forEach(document => {
      if (document.id == documentId) document.disabled = true;
    });
  }

  removeDocument(documentId) {
    // let documentObj = this.documentLists.filter(document => {
    //   return document.id == documentId;
    // });
    // let indexId = this.originalDocuments.findIndex(x => x["id"] === documentId);
    // this.documentTypes.splice(indexId, 0, documentObj[0]);

    let index = this.documentLists.findIndex(x => x["id"] === documentId);
    this.documentLists.splice(index, 1);

    this.documentTypes.forEach(document => {
      if (document.id == documentId) document.disabled = false;
    });
  }

  submitCustomerForm(value) {
    console.log(value);
  }
}
