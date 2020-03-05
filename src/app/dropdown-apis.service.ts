import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DropdownApisService {
  constructor(private http: HttpClient) {}

  getDropdownList(url) {
    return this.http.get<any[]>(url);
  }
  getContructorList(url, zipcode) {
    return this.http.post<any>(url, zipcode);
  }
  applyOnboardingForm(url, customerData) {
    return this.http.post<any>(url, customerData);
  }

  getEligibilityStatus(url, pid) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "Basic dmVua2F0YXJhbWFuYS5nQHRlY2hzb3BoeS5jb206dGVjaFNvcGh5"
    });

    return this.http.post<any>(url, pid, { headers: headers });
  }

  sendOtp(url,mobileno) {
    return this.http.post<any>(url, mobileno);
  }
  
  validateOtp(url,otpData){
    return this.http.post<any>(url,otpData);
  }
}
