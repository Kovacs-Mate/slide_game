function init() {
    const container = document.querySelector(".container");
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    this.shuffle(numbers); //keverés 1X

    // a for ciklust helyettesíti, annyiszor fut le ahány
    // eleme van a tömbnek.

    numbers.forEach((n) => {
        let cubes = document.createElement("div");
        cubes.className = "cubes";
        cubes.innerHTML = numbers[n];
        cubes.setAttribute("id", cubes.innerHTML);
        container.appendChild(cubes);
    });
}

init();

//  Megkeveri az elemeket a tömbön belül

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//számok cseréje

const cubeElements = document.querySelectorAll(".cubes");

const switchCubes = (event) => {
    let numberSelected = event.target;
    numberSelected.className = "cubes active";
    let numberLast = event.target.innerHTML;

    console.log(numberSelected + "+" + numberLast);
};

//klikk event

cubeElements.forEach((item) => {
    item.addEventListener("click", switchCubes);
});
