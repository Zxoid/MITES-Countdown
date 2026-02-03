const countdown = () => {
    const targetDate = new Date("April 16, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Time math
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // Update UI
    document.getElementById("days").innerText = d < 10 ? '0' + d : d;
    document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;

    if (gap < 0) {
        document.querySelector(".status-text").innerText = "DECISIONS ARE OUT!";
        document.getElementById("countdown").innerHTML = "<h2>Good Luck!</h2>";
    }
};

setInterval(countdown, 1000);
countdown();
