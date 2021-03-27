import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

// dont need to export, but if we want to satisfy something,
// like if we want TS to help us when we use the 'implements' keyword
export interface Analyzer {
  run(matches: MatchData[]): string; // you dont need to write exactly 'matches'
  // as long as it is a MatchData Tuple and returns a string
  // so when we implement the run method, the arguments doest need to be called
  // 'matches' (we will do it now though, because it makes sense)
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

// new Summary(new WinsAnalysis(), new ConsoleReport())
