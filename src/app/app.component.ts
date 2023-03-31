import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  users = [
    {id: 1, name: 'Shade', isActive: true},
    {id: 2, name: 'Shola', isActive: true},
    {id: 3, name: 'Shayo', isActive: true},
  ]

  users$ = of(this.users);
}
