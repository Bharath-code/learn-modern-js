{
    const today = new Date()
    console.log(today)
    console.log(today.toString())
    //TZ format -> before T is year-month-date and after till Z it hrs:mins:secs:millSecs
    console.log(today.toISOString())
    // 2nd argument is 0 which is month and its zero index means 0-january and 11-december
    const newDate = new Date(2025,0,11,8,30,12)
    console.log(newDate)
    console.log(typeof newDate)
    console.log(newDate instanceof Date)
}

//display the date with custom style
{
    const newYear = new Date(2024,0,1,0,0,0)
    console.log(newYear)

    const padZero = (/** @type {number} */ num) =>  num < 10 ? `0${num}` : num.toString()
    const formatDate = (/** @type {Date} */ date) => {
        const YYYY = date.getFullYear()
        const MM = padZero(date.getMonth()+1)
        const DD = padZero(date.getDate())
        const hh = padZero(date.getHours())
        const mm = padZero(date.getMinutes())
        const ss = padZero(date.getSeconds())
        return `${DD}-${MM}-${YYYY}:${hh}:${mm}:${ss}`;
    }

    console.log(formatDate(newYear))

}

//timestamp
{
    const date = new Date(2030,0,1,11)
    console.log(date)
    // convert the date to millisecond and we use it to date manipulation
    // because it's easily to manipulate numbers then date, getTime() will give the result in milliseconds
    const timestamp = date.getTime()
    console.log(timestamp)
    const yesterdayTime = timestamp - 24*60*60*1000
    console.log(yesterdayTime)
    const yesterday = new Date(yesterdayTime)
    console.log(yesterday)

}

//UTC date
{
    const flightArrival = new Date()
    const flightIndiaArrivalHour = flightArrival.getHours();
    console.log(flightIndiaArrivalHour);
    const flightLondonDepatureHour = flightArrival.getUTCHours()
    console.log(flightLondonDepatureHour);

    const minuteOffsetLocalTimeZone = new Date().getTimezoneOffset()
    // offset = UTC-local
    // offset = 0 - (5:30 *60)
    // offset = 0 - 330
    console.log(minuteOffsetLocalTimeZone)

    function formateTimeZone(){
        const offset = new Date().getTimezoneOffset();
        const sign = offset > 0 ? '-' : '+'
        console.log(offset,sign)
        const hours = Math.floor(Math.abs(offset/60))
        const minutes = Math.abs(offset%60)
        return `${sign}${hours}:${minutes}`

    }
    console.log(formateTimeZone())

}

// Date.now -> example : we measure perfomance of a process
{
    // both Date.now() and new Date.getTime() returns timestamp with millisecond
    // but Date.now we can access it with create a new date object unlike the getTime()
    let newDate;
    newDate = new Date().getTime()
    console.log(newDate)
    console.log(Date.now())

    /**
     * @param {string} approach
     * @param {{ (): void; (): void; (): void; }} cb
     */
    function measure(approach,cb){
        const start = Date.now()
        for(let i =0;i < 100_000; i++) cb()
        const end = Date.now()
        console.log(approach,'took',end-start,'ms')
    }
    let size = 10_000
    console.log('start-----')
    measure('fill', ()=> {
        Array(size).fill(0)
    });
    measure("spread", () => {
     [...Array(size)]
    });
    console.log('end------')
}

//JSON
{
    const bladeRunner = {
        year : new Date(2049,0,1,10)
    }
    // JSON will convert it to TZ format
    const json = JSON.stringify(bladeRunner)
    console.log(json)

    const movie = JSON.parse(json)
    console.log(movie.year)
    movie.year = new Date(movie.year)
    console.log(typeof movie.year);
    console.log(typeof movie.year.toString())
}