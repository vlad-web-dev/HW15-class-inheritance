let correctValueTime = (value) => {
    return value < 10 ? '0' + value : value
}

function Clock(element) {
    this.date = new Date()
    this.el = element
}

function FullTime() {
    Clock.call(this,time)
}
FullTime.prototype.render = function () {
    let hours = correctValueTime(this.date.getHours())
    let minutes = correctValueTime(this.date.getMinutes())
    let seconds = correctValueTime(this.date.getSeconds())
    this.el.innerHTML = `${hours}:${minutes}:${seconds}`
}

function ShortTime() {
    Clock.call(this,time)
}
ShortTime.prototype.render = function () {
    let hours = correctValueTime(this.date.getHours())
    let minutes = correctValueTime(this.date.getMinutes())
    this.el.innerHTML = `${hours}:${minutes}`
}
let time = document.getElementById('time')
let clock = new FullTime(time);
setInterval(() => clock.render(), 1000);
time.addEventListener('click', function (){
    changeFormat()
})
function changeFormat() {
    if (clock instanceof FullTime) {
        clock = new ShortTime()
    } else {
        clock = new FullTime()
    }
    clock.render()
}
