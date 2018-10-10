import { Component } from "@angular/core";
import { CalculatorService } from "./calculator.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public result: number;
  public a: number;
  public b: number;

  constructor(private _calculator: CalculatorService) {}

  public multiply(): void {
    this.result = this._calculator.multiply(this.a, this.b);
  }
}
