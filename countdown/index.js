function countdown() {
    const currDate = new Date()
    const NewYear = new Date('February 12, 2021 00:00:00')
    
    const gap = NewYear - currDate
    
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second)

    document.getElementById('day').innerHTML = d
    document.getElementById('hour').innerHTML = h
    document.getElementById('minute').innerHTML = m
    document.getElementById('second').innerHTML = s
    
}



setInterval(() => countdown(), 1000)