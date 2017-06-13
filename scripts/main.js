/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var total = 0;
  var aceCount = 0;
  for (i=0; i<hand.length;i++){
    if ((parseInt(hand[i])) <= 10){
      total+=(parseInt(hand[i]))
    } else if ((hand[i]=='K')||(hand[i]=='Q')||(hand[i]=='J')){
      total+=10
    } else {
      aceCount++
    }
  }
  for (i=1; i<=aceCount; i++){
    if (total <= 9){
      total += 11
    } else {
      total += 1
    }
  }
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
