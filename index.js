const mybox = document.getElementById("Box");

const moveamt = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key == "w" || event.key == "W"){
        mybox.textContent = "🙀"
        mybox.style.backgroundColor = "red"

        y -= moveamt
    } else if (event.key == "a" || event.key == "S"){
        mybox.textContent = "🙀"
        mybox.style.backgroundColor = "red"

        x -= moveamt
    } else if (event.key == "s" || event.key == "S"){
        mybox.textContent = "🙀"
        mybox.style.backgroundColor = "red"

        y += moveamt
    } else if (event.key == "d" || event.key == "D"){
        mybox.textContent = "🙀"
        mybox.style.backgroundColor = "red"

        x += moveamt
    }

    mybox.style.top = `${y}px`
    mybox.style.left = `${x}px`
})

document.addEventListener("keyup", event => {
    mybox.textContent = "😹"
    mybox.style.backgroundColor = "hotpink"
})