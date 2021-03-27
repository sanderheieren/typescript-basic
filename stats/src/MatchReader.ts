import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}
// this is always created with CsvFileReader, so we are making a
// static method
export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];
  // DataReader is the source of information, could be API, but for our case its an CSV file
  constructor(public reader: DataReader) {}

  load(): void {
    // delegates the data
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        // here is the MatchData tuple (that we make) that is returned from the data
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // type assertion -> (consider row[5] as one of the values in MatchResult
          row[6],
        ];
      }
    );
  }
}
