import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RoleService } from "app/role.service";

@Component({
  selector: "app-application-id",
  templateUrl: "./application-id.component.html",
  styleUrls: ["./application-id.component.scss"]
})
export class ApplicationIdComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public appId: string;
  public eligibleAmount: any;
  public msg: string;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.appId = params["applicationId"];
      this.eligibleAmount = params["eligibleAmount"];

      if (this.eligibleAmount === null)
        this.msg = "Your submission is received and we will contact you soon";
      else {
        if (this.eligibleAmount > 0)
          this.msg = `Your Eligible amount ${this.eligibleAmount}`;
        else this.msg = "You are not Eligible";
      }
    });
  }
}
