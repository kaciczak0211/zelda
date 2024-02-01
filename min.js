// wallpapers main page, slideshow
const slideElements = document.querySelectorAll(".slideshow")

console.log(slideElements);

slideElements.forEach(nextElement)

function nextElement(){
    let index = 0;
    let time = 5000;
    let slide = document.querySelectorAll(".slide")
    slide[index].classList.add('active')

    setInterval( () => {
		slide[index].classList.remove('active');
		
		index++;
		if (index === slide.length) index = 0;

		slide[index].classList.add('active');

	}, time);
}

// hamburger menu
// varible with links
const linksMobile = document.getElementById("links-mobile");

const icon = document.querySelectorAll("i");
console.log(icon);
// humburger icon
const hamburgerIcon = document.getElementById("humburger-mark");
const closeIcon = document.getElementById("close-mark")



icon.forEach(function(icon){
    icon.addEventListener("click", function(){
        if(linksMobile.style.display === "block"){
            linksMobile.style.display = "none"
            hamburgerIcon.style.display = "block"
            closeIcon.style.display = "none"
        }else{
            linksMobile.style.display = "block"
            hamburgerIcon.style.display = "none"
            closeIcon.style.display = "block"
        }
    })
})