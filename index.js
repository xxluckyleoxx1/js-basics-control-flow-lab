function scuberGreetingForFeet(someValue){
  // Write your code here!
if(someValue <= 400){
  return 'This one is on me!';
}
if(someValue > 2000){
  if(someValue > 2500){
    return 'No can do.';
  }
  return 'I will gladly take your thirty bucks.';
}
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC'){
    return 'Ok, sounds good.';
  }
  else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(true){
    case tip === 'generous':
      return 'Thank you so much.';
    case tip === 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }

}