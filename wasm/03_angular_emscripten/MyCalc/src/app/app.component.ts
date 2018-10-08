import { Component } from "@angular/core";

declare var Module: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public result: number;
  public a: number;
  public b: number;

  public multiply(): void {
    // Ideally, this should be in an Angular service
    this.result = Module.ccall(
      "multiply", // function name
      "number", // return type
      ["number", "number"], // argument types
      [this.a, this.b] // parameters
    );
  }
}
