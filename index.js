let progressBar = document.querySelector('.progress-bar')
// let time = document.querySelector('.time')
let minute = document.querySelector('.min')
let seconds = document.querySelector('.sec')
let hours = document.querySelector('.hour')
let actualhr = document.querySelector('.per-hour')
let actualmin = document.querySelector('.per-min')
let actualsec = document.querySelector('.per-sec')



let handleCurrentDate = setInterval(function(){
    const now = new Date()
    let hr = now.getHours()
    let min = now.getMinutes()
    let sec =  now.getSeconds()
    
    seconds.textContent = sec
    minute.textContent = min
    hours.textContent = hr

    //Seconds
    let secDegree = sec / 60
    actualsec.style.background = `conic-gradient(blue ${secDegree * 360}deg, rgb(175, 159, 159) 0deg)`

    //Minuites
    let minDegree= (secDegree + min) / 60
    actualmin.style.background = `conic-gradient(blue ${minDegree * 360}deg, rgb(175, 159, 159) 0deg)`

    //Hours
    let hrDegree = (minDegree + hr) / 24
    actualhr.style.background = `conic-gradient(blue ${hrDegree * 360}deg, rgb(175, 159, 159) 0deg)`
    

    // if(currentDegree > 270){
    //     progressBar.style.background = `conic-gradient(green ${currentDegree}deg, rgb(175, 159, 159) 0deg)`
    // }
},1000)