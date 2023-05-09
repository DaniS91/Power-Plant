export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

export const feed = changeState("soil")(1);
export const hydrate = changeState("water")(1);

export const blueFood = changeState("soil")(5)
export const superWater = changeState("water")(5);

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

// export const giveLight = changeState("light");
// export const greenFood = changeState("soil")(10)
// export const yuckyFood = changeState("soil")(-5)

window.onload = function() {

  document.getElementById('feed').onclick = function (){
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('show-state').onclick = function() {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  }
}
