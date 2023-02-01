let card_current;
let card_previous;
let card_next;
let card_component;

addEventListener("DOMContentLoaded", () => {
  // Select element after DOM loaded
  card_current = document.querySelector(".card_current");
  card_previous = document.querySelector(".card_previous");
  card_next = document.querySelector(".card_next");
  card_component = document.querySelector(".card_component");

  
  // Assign background Image of Current Card to the background
  card_component.style.backgroundImage =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," +
    window.getComputedStyle(card_current).backgroundImage;

  //Opacity 0 pre load guaranties clear looking load
  card_component.style.opacity = 1;
});

// Swap cards to the left

function on_button_left_click() {
  card_current.classList.add("card_previous");
  card_current.classList.remove("card_current");
  card_previous.classList.add("card_next");
  card_previous.classList.remove("card_previous");
  card_next.classList.add("card_current");
  card_next.classList.remove("card_next");

  [card_current, card_previous, card_next] = [
    card_next,
    card_current,
    card_previous,
  ];

  // Assign background Image of Current Card to the background
  card_component.style.backgroundImage =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," +
    window.getComputedStyle(card_current).backgroundImage;
}

// Swap cards to the right

function on_button_right_click() {
  card_current.classList.add("card_next");
  card_current.classList.remove("card_current");
  card_previous.classList.add("card_current");
  card_previous.classList.remove("card_previous");
  card_next.classList.add("card_previous");
  card_next.classList.remove("card_next");

  [card_current, card_previous, card_next] = [
    card_previous,
    card_next,
    card_current,
  ];

  // Assign background Image of Current Card to the background
  card_component.style.backgroundImage =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," +
    window.getComputedStyle(card_current).backgroundImage;
}
