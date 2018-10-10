import { Injectable } from "@angular/core";

declare var Module: any;

@Injectable({
  providedIn: "root"
})
export class CalculatorService {
  constructor() {}

  public multiply(a: number, b: number) {
    return Module.ccall(
      "multiply", // function name
      "number", // return type
      ["number", "number"], // argument types
      [a, b] // parameters
    );
  }
}
