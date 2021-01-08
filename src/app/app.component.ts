import { state, style, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("square", [state("normal", style({ backgroundColor: "blue" }))])
  ]
})
export class AppComponent implements OnInit {
  public state = "normal";

  ngOnInit() {}
}
