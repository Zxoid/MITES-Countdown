const countdown = () => {
    const target = new Date("April 16, 2026 00:00:00").getTime();
    const start = new Date("January 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = target - now;

    // Time math
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');

    // Progress Bar Logic
    const totalDuration = target - start;
    const elapsed = now - start;
    const progressPercent = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
    document.getElementById("progressBar").style.width = progressPercent + "%";
};

setInterval(countdown, 1000);
countdown();
