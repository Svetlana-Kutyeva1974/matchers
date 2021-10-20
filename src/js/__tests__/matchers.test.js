import orderObject from '../matchers.js';

test('should person', () => {
  const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
  const output = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];
  const result = orderObject(heroes);
  expect(result).toEqual(output);
});