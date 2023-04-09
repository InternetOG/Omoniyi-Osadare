const slides = document.getElementsByClassName("carousel_slide-item");
const dots = document.getElementsByClassName("dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const menu = document.getElementsByClassName("menu")[0];
const ulist = document.getElementsByClassName("ulist")[0];
const lightTheme = document.getElementById("theme");

let form = document.getElementsByTagName("form")[0];
form.addEventListener("click", (e) =>{
  e.preventDefault();
})

function toggleMenuAfterClick() {
  if (window.innerWidth < 991){
    ulist.classList.toggle("active");
  }
}

function changeThemeAfterClick() {
  document.body.classList.toggle("light-theme");
  toggleMenuAfterClick();
}

function exitToggleAfterLiClick(e) {
  if(e.target.tagName === "A"){
    toggleMenuAfterClick();
  } else if (e.target.tagName ==="ION-ICON"){
      changeThemeAfterClick();
      console.log(e.target)
  }
}

let slideIndex = 0;
let slidesLength = slides.length;

function showSlide() {
  for(let i = 0; i < slidesLength; i++){
    slides[i].style.display = "none";
    dots[i].classList.remove("bcolor")
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("bcolor")
}

function goToNextSlideAfterClick() {
  if(slideIndex === (slidesLength - 1)){
    slideIndex = 0;
  } else {
      slideIndex++
  }
  showSlide();
}

function goToPrevSlideAfterClick() {
  if(slideIndex === 0){
    slideIndex = slidesLength - 1
  } else {
    slideIndex--
    showSlide();
  }
  showSlide();
}



function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    Swal.fire({
      icon: 'error',
      text: 'Input fields are required',
      title: 'Oops...',
    });
  } else {
      emailjs.send("service_wd5blar", "template_sm39zpp", {
      to_name: "Omoleye",
      from_name: name,
      email_id: email,
      message: message,
      subject: subject,
      reply_to: "I dey alright",
      });

      Swal.fire({
      icon: 'success',
      title: 'Sent Succesfully',
    });
  }
}

ulist.addEventListener("click", exitToggleAfterLiClick);
menu.addEventListener("click", toggleMenuAfterClick);
next.addEventListener("click", goToNextSlideAfterClick);
prev.addEventListener("click", goToPrevSlideAfterClick);
showSlide();
