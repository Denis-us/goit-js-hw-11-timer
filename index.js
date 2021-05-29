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
//         this.selector = selector
//         this.targetDate = targetDate
//         this.intervalTimer - null
//         this.timer()
//     }
// }

// timer() {
//     this.intervalTimer = setInterval(() => {
//         let now = newDate()
//         let restTime = this.time - now

//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);

//     }, 1000)
// }

// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });