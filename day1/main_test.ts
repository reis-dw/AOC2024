import { assertEquals } from '@std/assert';
import {
  calcListDistance,
  calculateFinaleDistance,
  createList,
  sortList,
} from './main.ts';

Deno.test(async function addTest() {
  assertEquals(calculateFinaleDistance([1, 2, 3, 521, 9]), 536);
  assertEquals(calculateFinaleDistance([1, 2, 3, -521, 9]), -506);

  const testData = await Deno.readTextFile('dummy.txt');
  assertEquals(createList(testData, 'left'), [1234, 123]);
  assertEquals(createList(testData, 'right'), [5678, 4567]);

  assertEquals(
    calcListDistance(sortList([4, 3, 2, 1, 0]), sortList([9, 2, 3, 5, 4])),
    [2, 2, 2, 2, 5],
  );
});
