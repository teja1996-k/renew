import { RoleService } from "./../role.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
  constructor(private roleService: RoleService) {}

  ngOnInit() {}

  setRole(role) {
    this.roleService.setFormRole(role);
  }
}
