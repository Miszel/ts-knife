import { toMap, toMapOfSets } from '../index';

const elements = [
    {name: "A", value: 1},
    {name: "A", value: 2},
    {name: "A", value: 1},
    {name: "B", value: 3},
    {name: "C", value: 3}
]

test('A should contain array of 1,2 and 1, B should contain 3, C should contain 3', () => {
  const expectedResult = new Map<string, Array<number>>();
  expectedResult.set("A", [1,2,1])
  expectedResult.set("B", [3])
  expectedResult.set("C", [3])

  const groupped = toMap(elements, (e) => e.name , (e) => e.value )
  expect(groupped).toEqual(expectedResult);
});

test('A should contain set of 1 and 2, B should contain 3, C should contain 3', () => {
  const expectedResult = new Map<string, Set<number>>();
  expectedResult.set("A", new Set([1,2]))
  expectedResult.set("B", new Set([3]))
  expectedResult.set("C", new Set([3]))

  const groupped = toMapOfSets(elements, (e) => e.name , (e) => e.value )
  expect(groupped).toEqual(expectedResult);
});