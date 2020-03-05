import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-otp-screen",
  templateUrl: "./otp-screen.component.html",
  styleUrls: ["./otp-screen.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OtpScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  validateOtp(otp) {
    if (otp) {
      this.router.navigate(["/income"]);
    }
  }
}
