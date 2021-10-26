import orderObject from '../app.js';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const output = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const result = orderObject(heroes);

test('have not all the same properties', () => {
  expect(result).not.toBe(output);
});
test('person have all the same properties', () => {
  expect(result).toEqual(output);
});
