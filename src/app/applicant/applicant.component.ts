import { RoleService } from "./../role.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-applicant",
  templateUrl: "./applicant.component.html",
  styleUrls: ["./applicant.component.scss"]
})
export class ApplicantComponent implements OnInit {
  public formName: any;
  constructor(public role: RoleService) {}

  ngOnInit() {
    this.formName = this.role.getFormDetails().formName;
  }
}
