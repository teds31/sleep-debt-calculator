const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch(day){
    case 'monday' :
     return 8;
      break;

    case 'tuesday' :
      return 7;
      break;

    case 'wednesday' :
      return 8;
      break;

    case 'thursday' :
      return 7;
      break;

    case 'friday' :
      return 6;
      break;

    case 'saturday' :
      return 5.5;
      break;

    case 'sunday' :
      return 9;
      break;
            }
};

const getActualSleepHours = () => {
 return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

};

const getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You slep the perfect amount.');
  } else if (actualSleepHours > idealSleepHours){
    console.log('You overslept by ' + (idealSleepHours - actualSleepHours) + 'hours');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You underslept by ' + (idealSleepHours - actualSleepHours) + 'hours');
  }
};

calculateSleepDebt();
