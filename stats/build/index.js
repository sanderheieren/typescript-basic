"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary_1 = require("./Summary");
// create and object that satifies the datareader interface
// this is our source of info
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// create an instance of matchreader and pass in something to
// satisfying the 'dataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load(); // now we have all the matches on the 'matches' variable on this object
var winsAnalysis = new WinsAnalysis_1.WinsAnalysis("Liverpool");
var outputTarget = new ConsoleReport_1.ConsoleReport();
var summary = new Summary_1.Summary(winsAnalysis, outputTarget);
summary.buildAndPrintReport(matchReader.matches);
var htmlSummary = new Summary_1.Summary(winsAnalysis, new HtmlReport_1.HtmlReport());
htmlSummary.buildAndPrintReport(matchReader.matches);
// after adding static method on class
// this method retuns an instance of Summary as well
var staticSummary = Summary_1.Summary.winsAnalysisWithHtmlReport("Arsenal");
// staticSummary.buildAndPrintReport(matchReader.matches); // dette kommer i HTML filen
// after adding static method to matchreader, because it will always get a csvfilereader
var staticMatchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
staticMatchReader.load();
staticSummary.buildAndPrintReport(staticMatchReader.matches); // html fil
// if you clean up the index, you will see how good it looks :)
