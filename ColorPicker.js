let colorPickerContainerEl = document.getElementById("colorPickerContainer")
let selectedColorHexCodeEl = document.getElementById("selectedColorHexCode")
let button1El = document.getElementById("button1")
let button2El = document.getElementById("button2")
let button3El = document.getElementById("button3")
let button4El = document.getElementById("button4")

function color_1() {
    colorPickerContainerEl.style.backgroundColor = "#e0e0e0"
    selectedColorHexCodeEl.textContent = "#e0e0e0"
}

function color_2() {
    colorPickerContainerEl.style.backgroundColor = "#6fcf97"
    selectedColorHexCodeEl.textContent = "#6fcf97"
}

function color_3() {
    colorPickerContainerEl.style.backgroundColor = "#56ccf2"
    selectedColorHexCodeEl.textContent = "#56ccf2"
}

function color_4() {
    colorPickerContainerEl.style.backgroundColor = "#bb6bd9"
    selectedColorHexCodeEl.textContent = "#bb6bd9"
}