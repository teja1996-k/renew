import { RoleService } from "./../role.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pricing-terms",
  templateUrl: "./pricing-terms.component.html",
  styleUrls: ["./pricing-terms.component.scss"]
})
export class PricingTermsComponent implements OnInit {
  public formName: any;
  public tooltipPosition: string = "below";
  constructor(public role: RoleService) {}

  ngOnInit() {
    this.formName = this.role.getFormDetails().formName;
  }
}
