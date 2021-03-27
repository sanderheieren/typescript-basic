"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
// this is always created with CsvFileReader, so we are making a
// static method
var MatchReader = /** @class */ (function () {
    // DataReader is the source of information, could be API, but for our case its an CSV file
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        // delegates the data
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            // here is the MatchData tuple (that we make) that is returned from the data
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
