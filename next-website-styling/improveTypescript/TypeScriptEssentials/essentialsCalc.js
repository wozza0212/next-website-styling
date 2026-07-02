// data
// initial amount
// annual contribution
// expoected return
// duration
var calculateInvestment = function (data) {
    var currentSavings = data.initialAmount;
    var yearlyData = [];
    for (var year = 0; year < data.duration; year++) {
        currentSavings += data.annualContribution;
        currentSavings *= 1 + data.expectedReturn / 100;
        yearlyData.push({ year: year + 1, savings: currentSavings });
    }
    return yearlyData;
};
var printResults = function () {
    var results = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        results[_i] = arguments[_i];
    }
    console.log(results);
};
printResults.apply(void 0, calculateInvestment({ initialAmount: 1000, annualContribution: 100, expectedReturn: 5, duration: 10 }).map(function (data) { return data.savings; }));
