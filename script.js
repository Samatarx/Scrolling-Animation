const boxes = document.querySelectorAll(".box");
const foot = document.querySelector('footer')

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  //Finds the window height which is then reduced slighly to prevent the last box from peaking
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //    Finds the distance of the rectangle to the bottom of the viewport
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }

    if (boxTop < triggerBottom) {
        foot.classList.add("show");
      } else {
        foot.classList.remove("show");;
      }

  });
}

//animate on scroll library or Jquery as an alternative to this