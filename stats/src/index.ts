import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

// create and object that satifies the datareader interface
// this is our source of info
const csvFileReader = new CsvFileReader("football.csv");

// create an instance of matchreader and pass in something to
// satisfying the 'dataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load(); // now we have all the matches on the 'matches' variable on this object

const winsAnalysis = new WinsAnalysis("Liverpool");
const outputTarget = new ConsoleReport();
const summary = new Summary(winsAnalysis, outputTarget);
summary.buildAndPrintReport(matchReader.matches);

const htmlSummary = new Summary(winsAnalysis, new HtmlReport());
htmlSummary.buildAndPrintReport(matchReader.matches);

// after adding static method on class
// this method retuns an instance of Summary as well
const staticSummary = Summary.winsAnalysisWithHtmlReport("Arsenal");
// staticSummary.buildAndPrintReport(matchReader.matches); // dette kommer i HTML filen

// after adding static method to matchreader, because it will always get a csvfilereader

const staticMatchReader = MatchReader.fromCsv("football.csv");
staticMatchReader.load();
staticSummary.buildAndPrintReport(staticMatchReader.matches); // html fil
// if you clean up the index, you will see how good it looks :)
