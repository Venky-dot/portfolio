// ===============================
// MOBILE MENU
// ===============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// TYPING EFFECT
// ===============================

const roles = [
    "Software Test Engineer",
    "Manual & Automation Tester",
    "Selenium WebDriver Engineer",
    "QA Automation Engineer",
    "Java Selenium Test Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    let current = roles[roleIndex];

    if(!deleting){

        typing.textContent =
        current.substring(0,charIndex);

        charIndex++;

        if(charIndex>current.length){

            deleting=true;

            setTimeout(typeEffect,1200);

            return;
        }

    }
    else{

        typing.textContent =
        current.substring(0,charIndex);

        charIndex--;

        if(charIndex<0){

            deleting=false;

            roleIndex++;

            if(roleIndex===roles.length){

                roleIndex=0;

            }

        }

    }

    setTimeout(typeEffect,
    deleting?60:120);

}

typeEffect();

// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        backToTop.style.display="block";

    }
    else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// DARK MODE
// ===============================

const theme =
document.getElementById("theme-toggle");

theme.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        theme.innerHTML="🌞";

    }

    else{

        theme.innerHTML="🌙";

    }

});

// ===============================
// CONTACT FORM
// ===============================

const form =
document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const subject =
    document.getElementById("subject").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(
        name===""||
        email===""||
        subject===""||
        message===""){

        alert("Please fill all fields.");

        return;

    }

    const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        alert("Enter a valid Email.");

        return;

    }

    alert("Message Sent Successfully!");

    form.reset();

});

// ===============================
// SCROLL REVEAL
// ===============================

const reveals =
document.querySelectorAll("section");

window.addEventListener("scroll",reveal);

function reveal(){

    reveals.forEach(section=>{

        const top =
        section.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top<windowHeight-120){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition="all .8s ease";

});

reveal();
