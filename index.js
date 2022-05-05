let count = 0
const countFromLocalStorage = parseInt(localStorage.getItem("count"))
const counter = document.getElementById("count")
const incrementBtn = document.getElementById("increment-btn")
const resetBtn = document.getElementById("reset-btn")

if (countFromLocalStorage > 0) {
    count =countFromLocalStorage
    render(count)
}

function render(count) {
    counter.innerHTML = `Count: ${count}`
}

incrementBtn.addEventListener("click", function(){
    count += 1
    localStorage.setItem("count", count.toString())
    render(count)
})

resetBtn.addEventListener("click", function(){
    localStorage.clear()
    count = 0
    render(count)
})