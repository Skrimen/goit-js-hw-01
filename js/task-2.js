// const getShippingMessage = (country, price, deliveryFee)=>
// `Shipping to ${country} will cost ${deliveryFee+price} credits`




function getShippingMessage(country, price, deliveryFee){
  return `Shipping to ${country} will cost ${deliveryFee+price} credits`
  }

console.log(getShippingMessage("Australia", 120, 50)); 
console.log(getShippingMessage("Germany", 80, 20)); 
console.log(getShippingMessage("Sweden", 100, 20));