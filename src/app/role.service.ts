import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  public formData: any = {
    title: ""
  };

  public formName = {
    underwriter: true,
    csr: false,
    lineManager: false,
    contractor: false
  };

  constructor() {
    if (this.formName["underwriter"]) {
      this.formData.title = "Underwriter";
    } else if (this.formName["lineManager"]) {
      this.formData.title = "Line Manager";
    } else if (this.formName["contractor"]) {
      this.formData.title = "Contractor";
    } else {
      this.formData.title = "CSR";
    }
  }

  getFormDetails() {
    return {
      formName: this.formName,
      formData: this.formData
    };
  }

  setFormRole(role) {
    let keysArr = Object.keys(this.formName);
    let filterArr = keysArr.filter(item => {
      return item !== role;
    });
    this.formName[role] = true;
    for (let keys of filterArr) {
      this.formName[keys] = false;
    }
  }
}
