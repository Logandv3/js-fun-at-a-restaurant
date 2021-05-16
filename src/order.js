
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(order);
} else {

};
};


function refundOrder(number, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === number) {
      return deliveryOrders.splice(i,1);
    } else {

    };
  };

};


function listItems(deliveryOrders) {
  var orderList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
  orderList.push(deliveryOrders[i].item);
}
var stringOrderList = orderList.join(", ");
return stringOrderList;
};


// function searchOrder(deliveryOrders, itemSearched) {
//   for (var i = 0; i < deliveryOrders.length; i++) {
//   if (deliveryOrders[i].item.includes(itemSearched) === true) {
//       //return true;
//   } else {
//     //return false;
//   };
// };
// };

function searchOrder(deliveryOrders, itemSearched) {
  var orderCheck = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
  orderCheck.push(deliveryOrders[i].item)
  }
return orderCheck.includes(itemSearched);
};







module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
