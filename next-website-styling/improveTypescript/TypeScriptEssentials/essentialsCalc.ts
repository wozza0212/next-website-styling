// data
// initial amount
// annual contribution
// expoected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type investmentResult = {
  year: number;
  savings: number;
};

type investmentResultError = {
  error: string;
};

const calculateInvestment = (
  data: InvestmentData,
): investmentResult[] | investmentResultError => {
  if (data.initialAmount <= 0) {
    return { error: "Initial amount must be greater than 0" };
  }
  if (data.annualContribution < 0) {
    return { error: "Annual contribution cannot be negative" };
  }
  if (data.expectedReturn < 0) {
    return { error: "Expected return cannot be negative" };
  }
  if (data.duration <= 0) {
    return { error: "Duration must be greater than 0" };
  }
  let currentSavings = data.initialAmount;
  const yearlyData: investmentResult[] = [];
  for (let year = 0; year < data.duration; year++) {
    currentSavings += data.annualContribution;
    currentSavings *= 1 + data.expectedReturn / 100;
    yearlyData.push({ year: year + 1, savings: currentSavings });
  }

  return yearlyData;
};

const printResults = (
  results: investmentResult[] | investmentResultError,
): void => {
  if ("error" in results) {
    console.log(`Error: ${results.error}`);
    return;
  }
  for (const result of results) {
    console.log(`Year ${result.year}: ${result.savings}`);
  }
};

const resultsError = calculateInvestment({
  initialAmount: 0,
  annualContribution: 100,
  expectedReturn: 5,
  duration: 10,
});
printResults(resultsError);

const results = calculateInvestment({
  initialAmount: 1000,
  annualContribution: 100,
  expectedReturn: 5,
  duration: 10,
});
printResults(results);
