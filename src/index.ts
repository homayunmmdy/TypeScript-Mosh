// as best practice allways set type for parameter and return value of your function

function calculateTax(income: number, taxYear= 2024): number {
  if (taxYear < 2024) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}

calculateTax(10_000);