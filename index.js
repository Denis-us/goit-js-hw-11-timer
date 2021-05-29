class CountdownTimer {
    constructor({selector, targetDate} = {}) {
        this.selector = selector
        this.targetDate = targetDate
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });

const timeSale = timer.targetDate - Date.now()


timerPRIMER = {
    start() {
        const startTime = timeSale
        
        setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = currentTime - startTime
            const {days, hours, mins, secs} = getTimeComponents(deltaTime)
            console.log(`${days}:${hours}:${mins}:${secs}`)
        }, 1000)
    }
}

timerPRIMER.start()





// timer = {
//     start() {
//         const startTime = Date.now()

//         setInterval(() => {
//             const currentTime = Date.now()
//             const deltaTime = currentTime - startTime
//             const {days, hours, mins, secs} = getTimeComponents(deltaTime)
//             console.log(`${days}:${hours}:${mins}:${secs}`)
//         }, 1000)
//     }
// }

// timer.start()

// function updateClockface({days, hours, mins, secs}) {

// }

function pad(value) {
    return String(value).padStart(2, '0')
}

function getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs}
}








// class CountdownTimer {

//     constructor({selector, targetDate} = {}) {
//         this.timeId = null;
//         this.selector = selector;
//         this.targetDate = targetDate;
//     }

//     createTime() {
//         const currentTime = Date.now();
//         const difference = this.targetDate - currentTime;
//         const timeForCount = this.receiveTime(difference);
//         // console.log(${days}:${hours}:${mins}:${secs});
//         this.clockFace(timeForCount);

//         if(difference < 0) {
//             clearInterval(this.timeId);
//             document.querySelector('#timer-1').textContent = "Поздравляем с началом учебного года!"
//             return;
//         };
//     };

//     startCounting() {
//         this.createTime();

//         this.timeId = setInterval(() => {
//         this.createTime()

//        }, 1000) 
//     };

//     pad(value) {
//         return String(value).padStart(2, '0');
//     }

//     clockFace({days, hours, mins, secs}) {
//         // refs.frontSide.textContent = ${days}:${hours}:${mins}:${secs};
//         document.querySelector('[data-value="days"]').textContent = ${days};
//         document.querySelector('[data-value="hours"]').textContent = ${hours};
//         document.querySelector('[data-value="mins"]').textContent = ${mins};
//         document.querySelector('[data-value="secs"]').textContent = ${secs};
//     }

//     receiveTime(time) {
//         const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//         return {days, hours, mins, secs};
//         }

// };

// const forTimer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Sep 1, 2021'), 
// });

// forTimer.startCounting();