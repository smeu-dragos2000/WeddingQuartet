// Logo Scroll
let logo = document.getElementById("logo-header");
const scrollEffect = () => {
  const distance = window.scrollY;
  let scale = 1 * 8 / Math.sqrt(distance);
  if (scale < 1) {
    logo.style.transform = `translatey(${distance * 0.7}px)  scale(${scale})`;
  }
  else {
    logo.style.transform = `translatey(${distance * 0.7}px)  scale(1)`;
  }
}
const fadeIn = () => {
  logo.classList.add("show")
}
window.addEventListener("scroll", scrollEffect);
fadeIn();

// Active Class
const links = document.querySelectorAll(".nav-item");
const ActiveMenu = () => {
  let currentSection = '';

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight/3)) {
      currentSection = section.getAttribute('id');
    }
  })

  links.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(currentSection)) {
      li.classList.add('active');
    }
    console.log(li)
  })

}
// Active Class
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 190;
        let height = section.offsetHeight;
        let sectionHeight = section.clientHeight;
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + sectionHeight) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active')
            });
        };
    }); 
}


// Call Button

let width = window.innerWidth;
let callSmall = document.getElementById("call-small");
let callLarge = document.getElementById("call-large");
if (width < 991) {
  callSmall.style.display = "block";
  callLarge.style.display = "none";
}
else {
  callSmall.style.display = "none";
  callLarge.style.display = "block";
}
console.log(width)