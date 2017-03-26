import axios from 'axios'
export function sendExternalIdForFood(result) {
  	console.log("Result food: ",result);

  	let foodTotal = result;
  	
  return {
    type: 'TOP_FOODS',
    payload: foodTotal
  };
}

