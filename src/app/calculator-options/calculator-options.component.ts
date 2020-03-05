import { RoleService } from "./../role.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator-options",
  templateUrl: "./calculator-options.component.html",
  styleUrls: ["./calculator-options.component.scss"]
})
export class CalculatorOptionsComponent implements OnInit {
  public formName: any;
  public tooltipPosition: string = "below";
  constructor(public role: RoleService) {}

  ngOnInit() {
    this.formName = this.role.getFormDetails().formName;
  }
}
