import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", // if you do not include this the module will return a buffer, but not we are getting a string instead
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
