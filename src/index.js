import {pageLoad} from './pageLoad.js';
import {menu} from './menu.js';
import {contact} from './contact.js';
import css from './style.css';

pageLoad();
const menuLink = document.querySelector("#menu");
menuLink.addEventListener("click", () => {
    clearContentContainer();
    menu();
});

const aboutLink = document.querySelector("#about");
aboutLink.addEventListener("click", () => {
    clearContentContainer();
    pageLoad();
});

const contactLink = document.querySelector("#contact");
contactLink.addEventListener("click", () => {
    clearContentContainer();
    contact();
});

function clearContentContainer(){
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML="";
}