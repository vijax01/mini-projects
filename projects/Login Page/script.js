// navbar script

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.navbar .nav-link');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            links.forEach((link) => {
                link.classList.remove('active-page');
            })
            link.classList.add('active-page');
        })
    })
    const navbar = document.querySelector("header .navbar");
    const toggleBtn = document.querySelector(".toggle-btn");
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle('active');
        navbar.classList.toggle('active');
    })

});


const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}

const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click",()=>{
    wrapper.classList.toggle("show");
    document.querySelector(".base").classList.toggle("show");
    if(wrapper.classList.contains("show")) {
        loginBtn.innerHTML = "Cancel";
        loginBtn.style.border = "1px solid red";
        loginBtn.style.color = 'red';
    } else {
        loginBtn.innerHTML = "Log in";
        loginBtn.style.border = "1px solid #0ef"; 
        loginBtn.style.color = '#fff';

    }
})

