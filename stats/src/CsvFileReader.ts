import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", // if you do not include this the module will return a buffer, but not we are getting a string instead
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
