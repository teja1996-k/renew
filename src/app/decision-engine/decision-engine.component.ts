import { RoleService } from "./../role.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-decision-engine",
  templateUrl: "./decision-engine.component.html",
  styleUrls: ["./decision-engine.component.scss"]
})
export class DecisionEngineComponent implements OnInit {
  public formName: any;
  constructor(public role: RoleService) {}

  ngOnInit() {
    this.formName = this.role.getFormDetails().formName;
  }
}
