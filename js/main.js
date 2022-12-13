const img = document.querySelectorAll("img");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    let id = img[i].id;
    sound(id);
  });
}
let sounds = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function sound(id) {
  let selected = sounds[id];
  let selected_sound = new Audio("Assets/Audio/" + selected + ".mp3");
  selected_sound.play();
}
