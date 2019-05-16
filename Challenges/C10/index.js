const logger = require('../../logger');

logger.info('Codechallenge 10 ---- Start');

const times = [{
  start: 30,
  end: 70
}, {
  start: 0,
  end: 50
}, {
  start: 60,
  end: 150
}];


const roomsRequired = () => {
  let reqRooms = 1;
  // if (times.length === 1) return reqRooms;
  // if (times.length === 2) {
  //   if ((times[0].start < times[1].start && times[1].start < times[0].end) || (times[0].start < times[1].end && times[1].end < times[0].end)) return reqRooms + 1;
  //   return reqRooms;
  // }
  const newTimes = times.sort((a, b) => a.end - b.end);
  console.log(newTimes);
  // let last = null;
  // newTimes.forEach((time, index) => {
  //   if (index !== 0) {
  //     if (time.start < last.end && newTimes.filter((timeE) => timeE.end > time.start).length > 0) {
  //       reqRooms += 1;
  //     }
  //   }

  //   last = time;
  // });


  newTimes.forEach(time => {

  });





  return reqRooms;
}

// times.forEach((time, index) => {
//   times.forEach((othertime, i) => {
//     if (index === i) return;
//     if (othertime.end < time.start)
//   });
// });


logger.info('required Rooms: ', roomsRequired());