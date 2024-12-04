export function createList(input: string, position: 'left' | 'right') {
  const numbahs: Array<number> = [];
  const lines = input.split('\n');
  const splittedLines = lines.map((line) => line.split(/\s+/));

  if (position === 'left') {
    splittedLines.forEach((line) => numbahs.push(+line[0]));
    return numbahs;
  }

  splittedLines.forEach((line) => numbahs.push(+line[1]));
  return numbahs;
}

export function sortList(list: Array<number>) {
  return list.toSorted((a, b) => a - b);
}

export function calcListDistance(left: Array<number>, right: Array<number>) {
  const distances: Array<number> = [];

  for (let i = 0; left.length > i; i++) {
    const result = left[i] - right[i];
    result >= 0 ? distances.push(result) : distances.push(result * -1);
  }

  return distances;
}

export function calculateFinaleDistance(distances: Array<number>): number {
  let distance = 0;
  for (let i = 0; distances.length > i; i++) {
    distance += distances[i];
  }
  return distance;
}

function main(input: string) {
  const leftList = createList(input, 'left');
  const rightList = createList(input, 'right');

  const distances = calcListDistance(sortList(leftList), sortList(rightList));

  return calculateFinaleDistance(distances);
}

const data = await Deno.readTextFile('input.txt');
console.log(main(data));
