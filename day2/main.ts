export function createReports(input: string): number[][] {
  const lines = input.split('\n');
  const splittedLines = lines.map((line) => line.split(/\s+/));

  return splittedLines.map((line) => line.map((n) => +n));
}

export function isSafeAdjacent(a: number, b: number) {
  return a > b ? a - b < 4 && a - b > 0 : b - a < 4 && b - a > 0;
}

export function evaluateReport(report: number[]) {
  let increasing = true;
  if (report.length < 2) return false;

  for (let i = 0; i < report.length - 1; i++) {
    if (i === 0 && report.length > 1 && isSafeAdjacent(report[0], report[1])) {
      increasing = report[0] < report[1];
    }
    if (
      !isSafeAdjacent(report[i], report[i + 1]) ||
      increasing !== report[i] < report[i + 1]
    ) {
      return false;
    }
  }

  return true;
}

export function evaluateAllReports(reports: number[][]) {
  let amountSafeReports = 0;
  reports.forEach((report) => evaluateReport(report) && amountSafeReports++);
  return amountSafeReports;
}

const data = await Deno.readTextFile('input.txt');

function main() {
  const reports = createReports(data);
  console.log(evaluateAllReports(reports));
}

main();
