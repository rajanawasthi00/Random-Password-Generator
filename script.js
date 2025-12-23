function generator() {
    let button = document.querySelector(".generate")
    let input = document.querySelector(".input")
    let upper = "ABCDEFGHI"
    let lower = 'abcdefghi'
    let num = '35645334'
    let symbol = '!@#$'
    let combine = upper + lower + num + symbol

    button.addEventListener("click", () => {
        let Password = ''
        for (var i = 0; i < 8; i++) {
            let random = Math.floor(Math.random() * combine.length)
            Password += combine[random]

        }
        input.value = Password
    })

}
generator()

function copyClipbord() {
    let copy = document.getElementById("copy")
    let input = document.querySelector(".input")
    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(input.value)
        alert("copyied")
    })

}
copyClipbord()