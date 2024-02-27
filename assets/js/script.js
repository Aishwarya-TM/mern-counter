const incrementFunction = (click) => {
    const count = document.getElementById("counter-number")
    const total = parseInt(count.innerText) + click;
    console.log(total+click)
    count.innerText = total;
    console.log(`increment logged!`)
}

const decrementFunction = (click) => {
    const count = document.getElementById("counter-number")
    const total = parseInt(count.innerText) + click;
    console.log(total-click)
    count.innerText = total;
    console.log(`decrement logged!`)
}