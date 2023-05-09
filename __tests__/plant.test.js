import { changeState, feed, hydrate, giveLight, blueFood, greenFood, yuckyFood } from './../src/utilities.js';

describe('changeState', () => {

  test('should add the given value to the state\'s property', () => {
    let plant = { soil: 0, light: 0, water: 0 };
    plant = changeState('water')(1)(plant)
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
    expect(plant.water).toEqual(1);
  });
});

describe('feed', () => {

  test('should add 1 to the state\'s soil property', () => {
    let plant = { soil: 0, light: 0, water: 0 };
    plant = feed(plant)
    expect(plant.soil).toEqual(1);
    expect(plant.light).toEqual(0);
    expect(plant.water).toEqual(0);
  });
});

describe('hydrate', () => {

  test('should add the 1 to the state\'s water property', () => {
    let plant = { soil: 0, light: 0, water: 0 };
    plant = hydrate(plant)
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
    expect(plant.water).toEqual(1);
  });
});

// describe('giveLight', () => {

//   test('should add the given value to the state\'s light property', () => {
//     let plant = { soil: 0, light: 0, water: 0 };
//     plant = giveLight(1)(plant)
//     expect(plant.soil).toEqual(0);
//     expect(plant.light).toEqual(1);
//     expect(plant.water).toEqual(0);
//   });
// });

describe('blueFood', () => {

  test('should add 5 to the state\'s soil property', () => {
    let plant = { soil: 0, light: 0, water: 0 };
    plant = blueFood(plant)
    expect(plant.soil).toEqual(5);
    expect(plant.light).toEqual(0);
    expect(plant.water).toEqual(0);
  });
});

// describe('greenFood', () => {

//   test('should add 10 to the state\'s soil property', () => {
//     let plant = { soil: 0, light: 0, water: 0 };
//     plant = greenFood(plant)
//     expect(plant.soil).toEqual(10);
//     expect(plant.light).toEqual(0);
//     expect(plant.water).toEqual(0);
//   });
// });

// describe('yuckyFood', () => {

//   test('should remove 5 from the state\'s soil property', () => {
//     let plant = { soil: 0, light: 0, water: 0 };
//     plant = yuckyFood(plant)
//     expect(plant.soil).toEqual(-5);
//     expect(plant.light).toEqual(0);
//     expect(plant.water).toEqual(0);
//   });
// });