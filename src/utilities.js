/**
 * Updates a state property by a given value.
 * 
 * @param {*} prop The property to be changed
 * @returns {function} f(value)(state)
 */
export function changeState (prop) {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
}

/**
 * Increments the soil value.
 */
export const feed = changeState("soil")(1);

/**
 * Increments the water value.
 */
export const hydrate = changeState("water")(1);

/**
 * Increases the soil value by 5.
 * @example const newState = stateControl(blueFood);
 */
export const blueFood = changeState("soil")(5);

/**
 * Increases water value by 5.
 */
export const superWater = changeState("water")(5);

/**
 * Increases light value.
 */
export const giveLight = changeState("light")(1);

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

// export const greenFood = changeState("soil")(10)
// export const yuckyFood = changeState("soil")(-5)

window.onload = function() {

  document.getElementById('feed').onclick = function (){
    const newState = stateControl(feed);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('water').onclick = function (){
    const newState = stateControl(hydrate);
    document.getElementById('water-value').innerText = `Hydration: ${newState.water}`;
  };

  document.getElementById('light').onclick = function (){
    const newState = stateControl(giveLight);
    document.getElementById('light-value').innerText = `Light: ${newState.light}`;
  };

  document.getElementById('repot').onclick = function (){
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('soak').onclick = function (){
    const newState = stateControl(superWater);
    document.getElementById('water-value').innerText = `Hydration: ${newState.water}`;
  };

  document.getElementById('show-state').onclick = function() {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
    document.getElementById('water-value').innerText = `Hydration: ${currentState.water}`;
    document.getElementById('light-value').innerText = `Light: ${currentState.water}`;
  };
};