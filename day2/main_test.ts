import { assertEquals } from '@std/assert';
import {
  createReports,
  evaluateAllReports,
  evaluateReport,
  isSafeAdjacent,
} from './main.ts';

const stubReports = [
  [7, 6, 4],
  [1, 2, 7],
];

const stubReportsMore = [
  [7, 6, 4],
  [70, 2, 1, 2, 4, 2, 2, 2],
  [1, 2, 3],
  [0, 0, 0],
  [2, 4, 6],
  [8, 4, 1],
  [10, 9, 7],
];

Deno.test(async function testCreateReport() {
  const testData = await Deno.readTextFile('dummy.txt');
  assertEquals(createReports(testData), stubReports);
});

Deno.test(function testIsSafeAdjacent() {
  assertEquals(isSafeAdjacent(4, 0), false);
  assertEquals(isSafeAdjacent(0, 4), false);
  assertEquals(isSafeAdjacent(1, 2), true);
  assertEquals(isSafeAdjacent(2, 1), true);
  assertEquals(isSafeAdjacent(3, 3), false);
});

Deno.test(function testEvaluateReport() {
  assertEquals(evaluateReport(stubReports[0]), true);
  assertEquals(evaluateReport(stubReports[1]), false);
  assertEquals(evaluateReport([1, 1, 1]), false);
  assertEquals(evaluateReport([100, 0, 1000]), false);
  assertEquals(evaluateReport([0, 0]), false);
  assertEquals(evaluateReport([0]), false);
});

Deno.test(function testEvaluateAllReports() {
  assertEquals(evaluateAllReports(stubReports), 1);
  assertEquals(evaluateAllReports(stubReportsMore), 4);
});
