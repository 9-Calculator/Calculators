"use strict";

/* ========== BMI ========== */
function calculateBMI() {
    const h = document.getElementById("bmiHeight")?.value;
    const w = document.getElementById("bmiWeight")?.value;
    if (!h || !w) return;
    const bmi = w / Math.pow(h / 100, 2);
    document.getElementById("bmiResult").innerText = "BMI: " + bmi.toFixed(2);
}

/* ========== AGE ========== */
function calculateAge() {
    const dobVal = document.getElementById("dob")?.value;
    if (!dobVal) return;
    const dob = new Date(dobVal);
    const diff = Date.now() - dob.getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    document.getElementById("ageResult").innerText = "Age: " + age + " years";
}

/* ========== EMI ========== */
function calculateEMI() {
    const P = document.getElementById("loanAmount")?.value;
    const R = document.getElementById("interestRate")?.value;
    const Y = document.getElementById("loanYears")?.value;
    if (!P || !R || !Y) return;
    const r = R / 1200;
    const n = Y * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById("emiResult").innerText = "Monthly EMI: ₹" + emi.toFixed(2);
}

/* ========== PERCENTAGE ========== */
function calculatePercentage() {
    const v = document.getElementById("percentValue")?.value;
    const t = document.getElementById("percentTotal")?.value;
    if (!v || !t) return;
    document.getElementById("percentResult").innerText = ((v / t) * 100).toFixed(2) + "%";
}

/* ========== SIMPLE INTEREST ========== */
function calculateSI() {
    const P = document.getElementById("siP")?.value;
    const R = document.getElementById("siR")?.value;
    const T = document.getElementById("siT")?.value;
    if (!P || !R || !T) return;
    const si = (P * R * T) / 100;
    document.getElementById("siResult").innerText = "Simple Interest: " + si.toFixed(2);
}

/* ========== COMPOUND INTEREST ========== */
function calculateCI() {
    const P = document.getElementById("ciP")?.value;
    const R = document.getElementById("ciR")?.value;
    const T = document.getElementById("ciT")?.value;
    if (!P || !R || !T) return;
    const amount = P * Math.pow(1 + R / 100, T);
    document.getElementById("ciResult").innerText = "Amount: " + amount.toFixed(2);
}

/* ========== GST ========== */
function calculateGST() {
    const A = document.getElementById("gstAmount")?.value;
    const R = document.getElementById("gstRate")?.value;
    if (!A || !R) return;
    const gst = A * R / 100;
    document.getElementById("gstResult").innerText =
        "GST: " + gst.toFixed(2) + " | Total: " + (Number(A) + gst).toFixed(2);
}

/* ========== DISCOUNT ========== */
function calculateDiscount() {
    const P = document.getElementById("discPrice")?.value;
    const D = document.getElementById("discPercent")?.value;
    if (!P || !D) return;
    const finalPrice = P - (P * D / 100);
    document.getElementById("discResult").innerText = "Final Price: " + finalPrice.toFixed(2);
}

/* ========== SPEED ========== */
function calculateSpeed() {
    const d = document.getElementById("speedDistance")?.value;
    const t = document.getElementById("speedTime")?.value;
    if (!d || !t) return;
    document.getElementById("speedResult").innerText =
        "Speed: " + (d / t).toFixed(2) + " km/h";
}

/* ========== PROFIT & LOSS ========== */
function calculatePL() {
    const cp = document.getElementById("cp")?.value;
    const sp = document.getElementById("sp")?.value;
    if (!cp || !sp) return;
    if (sp > cp)
        plResult.innerText = "Profit: " + (sp - cp).toFixed(2);
    else if (cp > sp)
        plResult.innerText = "Loss: " + (cp - sp).toFixed(2);
    else
        plResult.innerText = "No Profit, No Loss";
}

/* ========== PERCENT CHANGE ========== */
function calculatePercentChange() {
    const o = document.getElementById("oldValue")?.value;
    const n = document.getElementById("newValue")?.value;
    if (!o || !n) return;
    const change = ((n - o) / o) * 100;
    document.getElementById("pcResult").innerText = change.toFixed(2) + "%";
}

/* ========== TIME ========== */
function calculateTime() {
    const h = document.getElementById("hours")?.value || 0;
    const m = document.getElementById("minutes")?.value || 0;
    document.getElementById("timeResult").innerText =
        "Total Minutes: " + (Number(h) * 60 + Number(m));
}

/* ========== DATE DIFFERENCE ========== */
function calculateDateDiff() {
    const s = document.getElementById("startDate")?.value;
    const e = document.getElementById("endDate")?.value;
    if (!s || !e) return;
    const diff = (new Date(e) - new Date(s)) / (1000 * 60 * 60 * 24);
    document.getElementById("dateDiffResult").innerText = "Days: " + Math.abs(diff);
}

/* ========== TEMPERATURE ========== */
function convertTemp() {
    const c = document.getElementById("celsius")?.value;
    if (!c) return;
    document.getElementById("tempResult").innerText =
        "Fahrenheit: " + ((c * 9 / 5) + 32).toFixed(2);
}

/* ========== SIP ========== */
function calculateSIP() {
    const m = document.getElementById("sipMonthly")?.value;
    const r = document.getElementById("sipRate")?.value;
    const y = document.getElementById("sipYears")?.value;
    if (!m || !r || !y) return;
    const i = r / 1200;
    const n = y * 12;
    const fv = m * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    document.getElementById("sipResult").innerText = "Future Value: ₹" + fv.toFixed(2);
}

/* ========== FD ========== */
function calculateFD() {
    const P = document.getElementById("fdAmount")?.value;
    const R = document.getElementById("fdRate")?.value;
    const T = document.getElementById("fdYears")?.value;
    if (!P || !R || !T) return;
    const A = P * Math.pow(1 + R / 100, T);
    document.getElementById("fdResult").innerText = "Maturity Amount: ₹" + A.toFixed(2);
}

/* ========== CONVERTERS ========== */
function convertKmToMile() {
    const km = document.getElementById("km")?.value;
    if (!km) return;
    document.getElementById("lengthResult").innerText =
        "Miles: " + (km * 0.621371).toFixed(3);
}

function convertKgToLb() {
    const kg = document.getElementById("kg")?.value;
    if (!kg) return;
    document.getElementById("weightResult").innerText =
        "Pounds: " + (kg * 2.20462).toFixed(2);
}

/* ========== SQUARE / CUBE ========== */
function calculateSquareCube() {
    const n = document.getElementById("num")?.value;
    if (!n) return;
    document.getElementById("squareCubeResult").innerText =
        "Square: " + (n * n) + " | Cube: " + (n * n * n);
}
/* ===== AVERAGE ===== */
function calculateAverage() {
    const nums = document.getElementById("avgNums").value;
    if (!nums) return;
    const arr = nums.split(",").map(Number);
    const avg = arr.reduce((a,b)=>a+b,0) / arr.length;
    document.getElementById("avgResult").innerText = "Average: " + avg.toFixed(2);
}

/* ===== LCM & HCF ===== */
function calculateLCMHCF() {
    let a = num1.value, b = num2.value;
    if (!a || !b) return;
    let x=a, y=b;
    while (y) [x,y]=[y,x%y];
    const hcf = x;
    const lcm = (a*b)/hcf;
    lcmhcfResult.innerText = "HCF: " + hcf + " | LCM: " + lcm;
}

/* ===== POWER ===== */
function calculatePower() {
    const b = base.value, e = exp.value;
    if (!b || !e) return;
    powerResult.innerText = "Result: " + Math.pow(b,e);
}

/* ===== SALARY ===== */
function calculateSalary() {
    const b = basicSalary.value, h = hra.value, d = da.value;
    if (!b || !h || !d) return;
    salaryResult.innerText = "Total Salary: ₹" +
        (Number(b)+Number(h)+Number(d)).toFixed(2);
}

/* ===== BREAK EVEN ===== */
function calculateBreakEven() {
    const f = fixedCost.value, p = pricePerUnit.value, v = variableCost.value;
    if (!f || !p || !v) return;
    beResult.innerText = "Break Even Units: " +
        (f / (p - v)).toFixed(2);
}

/* ===== ELECTRICITY ===== */
function calculateElectricity() {
    const u = units.value, r = ratePerUnit.value;
    if (!u || !r) return;
    electricityResult.innerText =
        "Bill Amount: ₹" + (u*r).toFixed(2);
}

/* ===== FUEL ===== */
function calculateFuel() {
    const d = distance.value, m = mileage.value, p = fuelPrice.value;
    if (!d || !m || !p) return;
    fuelResult.innerText =
        "Fuel Cost: ₹" + ((d/m)*p).toFixed(2);
}
/* ===== SQRT ===== */
function calculateSqrt() {
  const n = sqrtNum.value;
  if (!n) return;
  sqrtResult.innerText = "Result: " + Math.sqrt(n).toFixed(4);
}

/* ===== FACTORIAL ===== */
function calculateFactorial() {
  let n = factNum.value;
  if (n < 0) return;
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  factResult.innerText = "Factorial: " + f;
}

/* ===== PRIME ===== */
function checkPrime() {
  let n = primeNum.value;
  if (n <= 1) return primeResult.innerText = "Not Prime";
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return primeResult.innerText = "Not Prime";
  primeResult.innerText = "Prime Number";
}

/* ===== EVEN / ODD ===== */
function checkEvenOdd() {
  eoResult.innerText = eoNum.value % 2 === 0 ? "Even" : "Odd";
}

/* ===== RATIO ===== */
function calculateRatio() {
  ratioResult.innerText = ratioA.value + " : " + ratioB.value;
}

/* ===== CAGR ===== */
function calculateCAGR() {
  const s = cagrStart.value, e = cagrEnd.value, y = cagrYears.value;
  const cagr = (Math.pow(e / s, 1 / y) - 1) * 100;
  cagrResult.innerText = "CAGR: " + cagr.toFixed(2) + "%";
}

/* ===== INFLATION ===== */
function calculateInflation() {
  const a = inflationAmount.value, r = inflationRate.value, y = inflationYears.value;
  inflationResult.innerText =
    "Future Value: ₹" + (a * Math.pow(1 + r / 100, y)).toFixed(2);
}

/* ===== ROI ===== */
function calculateROI() {
  roiResult.innerText =
    "ROI: " + (((roiGain.value - roiCost.value) / roiCost.value) * 100).toFixed(2) + "%";
}

/* ===== DEPRECIATION ===== */
function calculateDepreciation() {
  depResult.innerText =
    "Value After 1 Year: ₹" +
    (depValue.value - (depValue.value * depRate.value / 100)).toFixed(2);
}

/* ===== MARKUP ===== */
function calculateMarkup() {
  markupResult.innerText =
    "Selling Price: ₹" +
    (Number(markupCost.value) * (1 + markupPercent.value / 100)).toFixed(2);
}
function calculateNetWorth() {
  netWorthResult.innerText =
    "Net Worth: ₹" + (assets.value - liabilities.value).toFixed(2);
}

function calculateBudget() {
  budgetResult.innerText =
    "Savings: ₹" + (income.value - expenses.value).toFixed(2);
}

function calculatePayback() {
  paybackResult.innerText =
    "Payback Period (years): " + (investment.value / annualReturn.value).toFixed(2);
}

function calculateCapitalGain() {
  cgResult.innerText =
    "Capital Gain: ₹" + (sellPrice.value - buyPrice.value).toFixed(2);
}

function calculateTax() {
  const incomeVal = taxIncome.value;
  const tax = incomeVal * 0.1; // basic demo slab
  taxResult.innerText = "Estimated Tax: ₹" + tax.toFixed(2);
}

function calculateBMR() {
  const bmr = 10*bmrWeight.value + 6.25*bmrHeight.value - 5*bmrAge.value + 5;
  bmrResult.innerText = "BMR: " + bmr.toFixed(0) + " kcal/day";
}

function calculateIdealWeight() {
  iwResult.innerText =
    "Ideal Weight: " + ((iwHeight.value - 100) * 0.9).toFixed(1) + " kg";
}

function calculateCalories() {
  const cal = 10*calWeight.value + 6.25*calHeight.value - 5*calAge.value;
  calorieResult.innerText = "Calories/day: " + cal.toFixed(0);
}

function convertArea() {
  areaResult.innerText =
    "Square Feet: " + (sqm.value * 10.7639).toFixed(2);
}

function convertVolume() {
  volumeResult.innerText =
    "Gallons: " + (litre.value * 0.264172).toFixed(3);
}

function convertSpeed() {
  speedConvResult.innerText =
    "m/s: " + (kmh.value / 3.6).toFixed(2);
}

function calculateMarksPercent() {
  marksResult.innerText =
    ((marksObtained.value / marksTotal.value) * 100).toFixed(2) + "%";
}

function calculateAttendance() {
  attendanceResult.innerText =
    ((classesAttended.value / totalClasses.value) * 100).toFixed(2) + "%";
}

function checkLeapYear() {
  const y = year.value;
  leapResult.innerText =
    (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)
      ? "Leap Year" : "Not a Leap Year";
}
function calculateBodyFat() {
  bfResult.innerText =
    "Body Fat %: " + ((1.2 * bfBMI.value) + (0.23 * bfAge.value) - 5.4).toFixed(2);
}

function calculateWater() {
  waterResult.innerText =
    "Daily Water Intake: " + (waterWeight.value * 35).toFixed(0) + " ml";
}

function calculateProtein() {
  proteinResult.innerText =
    "Daily Protein: " + (proteinWeight.value * 0.8).toFixed(1) + " g";
}

function calculateHeartRate() {
  hrResult.innerText =
    "Max Heart Rate: " + (220 - hrAge.value) + " bpm";
}

function convertTime() {
  timeConvResult.innerText =
    "Minutes: " + (hoursTC.value * 60) +
    " | Seconds: " + (hoursTC.value * 3600);
}

function convertData() {
  dataResult.innerText =
    "GB: " + (mb.value / 1024).toFixed(3);
}

function convertFuelEfficiency() {
  fuelEffResult.innerText =
    "MPG: " + (kml.value * 2.35215).toFixed(2);
}

function convertPressure() {
  pressureResult.innerText =
    "PSI: " + (bar.value * 14.5038).toFixed(2);
}

function calculateGPA() {
  const arr = gpaMarks.value.split(",").map(Number);
  gpaResult.innerText =
    "GPA: " + (arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2);
}

function calculateCGPA() {
  const arr = cgpaValues.value.split(",").map(Number);
  cgpaResult.innerText =
    "CGPA: " + (arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2);
}

function binaryToDecimal() {
  binDecResult.innerText =
    "Decimal: " + parseInt(binary.value, 2);
}

function decimalToBinary() {
  decBinResult.innerText =
    "Binary: " + Number(decimal.value).toString(2);
}

function calculateWeek() {
  const d = new Date(weekDate.value);
  const start = new Date(d.getFullYear(),0,1);
  const week = Math.ceil((((d - start) / 86400000) + start.getDay()+1)/7);
  weekResult.innerText = "Week Number: " + week;
}

function calculateWorkingDays() {
  let start = new Date(startWD.value);
  let end = new Date(endWD.value);
  let count = 0;
  while (start <= end) {
    if (start.getDay() !== 0 && start.getDay() !== 6) count++;
    start.setDate(start.getDate() + 1);
  }
  wdResult.innerText = "Working Days: " + count;
}
// Frequency Converter
function convertFrequency() {
  freqResult.innerText = "kHz: " + (freq.value / 1000).toFixed(3);
}

// Density Converter
function convertDensity() {
  densityResult.innerText = "g/cm³: " + (density.value / 1000).toFixed(3);
}

// Torque Converter
function convertTorque() {
  torqueResult.innerText = "lb-ft: " + (torque.value * 0.737562).toFixed(2);
}

// Acceleration Converter
function convertAcceleration() {
  accResult.innerText = "km/h²: " + (acc.value * 12960).toFixed(2);
}

// Flow Rate Converter
function convertFlow() {
  flowResult.innerText = "m³/s: " + (flow.value / 1000).toFixed(4);
}

// Sound Level Converter
function convertSound() {
  soundResult.innerText =
    "Intensity Ratio: " + Math.pow(10, sound.value / 10).toFixed(2);
}

// Date Difference Calculator
function calculateDateDiff() {
  const d1 = new Date(date1.value);
  const d2 = new Date(date2.value);
  dateDiffResult.innerText =
    "Days: " + Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
}

// Marks → Percentage
function calculateMarks() {
  marksResult.innerText =
    "Percentage: " + ((marks.value / totalMarks.value) * 100).toFixed(2);
}

// Study Planner
function calculateStudy() {
  studyResult.innerText =
    "Daily Study Hours: " + (study.value / days.value).toFixed(2);
}

// Exam Score
function calculateScore() {
  scoreResult.innerText =
    "Score %: " + ((score.value / totalQ.value) * 100).toFixed(2);
}

// Countdown
function calculateCountdown() {
  countResult.innerText =
    "Countdown started for " + count.value + " seconds";
}

// Leap Year
function checkLeap() {
  leapResult.innerText =
    year.value % 4 === 0 ? "Leap Year" : "Not a Leap Year";
}

// Roman → Number
function romanToNumber() {
  const map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let num = 0, prev = 0;
  for (let c of roman.value.toUpperCase().split('').reverse()) {
    let curr = map[c];
    num += curr < prev ? -curr : curr;
    prev = curr;
  }
  romanResult.innerText = "Number: " + num;
}

// Number → Roman
function numberToRoman() {
  let n = num.value;
  const map = [["M",1000],["CM",900],["D",500],["CD",400],["C",100],
               ["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
  let res = "";
  for (let [r,v] of map) while (n>=v){res+=r;n-=v;}
  numRomanResult.innerText = res;
}

// Payback Period
function calculatePayback() {
  pbResult.innerText =
    "Payback Period (years): " +
    (pb.value / annualReturn.value).toFixed(2);
}

// Net Worth
function calculateNetWorth() {
  nwResult.innerText =
    "Net Worth: " + (assets.value - liabilities.value);
}
