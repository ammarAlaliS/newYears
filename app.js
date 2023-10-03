const d = document;
const day = d.querySelector('.day')
const hours = d.querySelector('.hours')
const minute = d.querySelector('.minutes')
const second = d.querySelector('.seconds')


const firstDaysOfTheYear = '1 Jan 2024'

function countDown() {
    const newYearDate = new Date(firstDaysOfTheYear)
    const currentDate = new Date()

    const hoursOfTheDay = 24;
    const minutes = 60;
    const secondOfAMinute = 60;  

    const seconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const currentHours = hoursOfTheDay - currentDate.getHours()
    const currentMinutes = minutes - currentDate.getMinutes() 
    const currentSeconds =  secondOfAMinute - currentDate.getSeconds()
    console.log(currentHours)
    

    day.innerHTML = days;
    hours.innerHTML = currentHours;
    minute.innerHTML = currentMinutes;
    second.innerHTML = currentSeconds



}

countDown();
setInterval(countDown, 1000);
