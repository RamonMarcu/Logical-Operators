let mood = 'sleepy';
let tirednessLevel = 9;
if ( mood === 'sleepy' && tirednessLevel > 8) 
  {
    console.log('time to sleep')
  } else {
    console.log('not bed time yet')
  }

// if run the first code block, the result will be: time to sleep


let mood = 'sleepy';
let tirednessLevel = 7;
if ( mood === 'sleepy' && tirednessLevel > 8) 
  {
    console.log('time to sleep')
  } else {
    console.log('not bed time yet')
  }

// if run the second code block, the result will be: not bed time yet

let mood = 'sleepy';
let tirednessLevel = 7;
if ( mood === 'sleepy' || tirednessLevel > 4+5) 
  {
    console.log('time to sleep')
  } else {
    console.log('not bed time yet')
  }

// if run the third code block, the result will be: time to sleep

