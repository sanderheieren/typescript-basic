import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];
// we are customizing the csvFileReader here in this class
// basically saying 'give us a copy of match reader that is going to extend csvFileReader
// that has been customized to work with MatchData'.
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
}
