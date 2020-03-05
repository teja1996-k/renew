import { RoleService } from "./../role.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  public formName: any;
  constructor(public role: RoleService) {}

  ngOnInit() {
    this.formName = this.role.getFormDetails().formName;
  }
  submitRenewForm(formData) {}
}
