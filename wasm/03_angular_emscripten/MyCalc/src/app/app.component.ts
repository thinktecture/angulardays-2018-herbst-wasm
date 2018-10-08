import { Component } from "@angular/core";

declare var Module: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  multiplyResult: number;

  public multiply(a: number, b: number): void {
    this.multiplyResult = Module.ccall(
      "multiply", // function name
      "number", // return type
      ["number", "number"], // argument types
      [a, b] // parameters
    );
  }
}
