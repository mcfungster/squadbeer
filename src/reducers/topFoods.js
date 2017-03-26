export default function(state = null, action) {
  switch(action.type) {

  case 'TOP_FOODS':
  	console.log("PAYLOADer FOod:", action.payload.data);
    return action.payload.data
  }

  return state;
}
