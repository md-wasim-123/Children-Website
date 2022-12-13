const img = document.querySelectorAll("img");

for (let i = 2; i <= img.length; i++) {
    img[i].addEventListener("click", () => {
    let id = img[i].id;
    sound(id);
});
}

let sounds= ["1" , "2", "3", "4", "5", "6", "7", "8", "9"];

function sound(id) {
    let selected_sound = new Audio("Assets/Audio-number/"+id+ ".mp3");
    console.log(selected_sound);
    selected_sound.play();
}
