const body = document.querySelector("body");
body.addEventListener("mousemove", (event) => {
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    // !mouse move tine span tag twe create lote ng ag
    const spanEl = document.createElement("span");
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    body.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});

let today = new Date();
let past = new Date("2023,04,28");
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let monthCalc = today.getMonth();

function calcDate(date1, date2) {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    let months = Math.floor(days / monthDays[monthCalc]);
    let years = Math.floor(months / 12);
    months = months > 12 ? months -= 12 : months;
    if (isNaN(months) || isNaN(years) || isNaN(days)) {
        document.querySelector('.year').innerHTML = 0;
        document.querySelector('.month').innerHTML = 0;
        document.querySelector('.day').innerHTML = 0;
    }
    document.querySelector('.year').innerHTML = years;
    document.querySelector('.month').innerHTML = months;
    document.querySelector('.day').innerHTML = days;

}
let counting = calcDate(today, past);


setInterval(counting, 1000);
