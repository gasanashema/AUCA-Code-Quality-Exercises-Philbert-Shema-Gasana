/*
function discount(totalamount) {
  var disc;
  if (totalamount > 100) {
    disc = totalamount * 0.1;
  } else {
    disc = totalamount * 0.05;
  }
  return disc;
}
*/
function discount(totalAmount) {

    if (totalAmount > 100) {
        return totalAmount * 0.1;
    }
    return totalAmount * 0.05;
}