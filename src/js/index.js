let correctValueTime = (value) => {
    return value < 10 ? '0' + value : value
}

function Clock(element) {
    this.el = element
}
Clock.prototype.render = function () {
    this.el.innerHTML = new Date()
}

function FullTime() {
    Clock.call(this,time)
}
FullTime.prototype = Object.create(Clock.prototype)
FullTime.prototype.render = function () {
    let date = new Date()
    let hours = correctValueTime(date.getHours())
    let minutes = correctValueTime(date.getMinutes())
    let seconds = correctValueTime(date.getSeconds())
    this.el.innerHTML = `${hours}:${minutes}:${seconds}`
}

function ShortTime() {
    Clock.call(this,time)
}

ShortTime.prototype = Object.create(Clock.prototype)
ShortTime.prototype.render = function () {
    let date = new Date()
    let hours = correctValueTime(date.getHours())
    let minutes = correctValueTime(date.getMinutes())
    this.el.innerHTML = `${hours}:${minutes}`
}
const time = document.getElementById('time')
let clock = new Clock(time)
const shortClock = new ShortTime(time)
const fullClock = new FullTime(time)

setInterval(() => clock.render(), 1000);
time.addEventListener('click', function (){
    changeFormat()
})
function changeFormat() {
    if (clock instanceof FullTime) {
        clock = shortClock
    } else {
        clock = fullClock
    }
    clock.render()
}
