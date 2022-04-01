const contact = function() {


    const heading = document.createElement("h1");
    heading.textContent="Mama Mia Contact";

    const contactList = document.createElement("ul");
    const tel = document.createElement("li");
    tel.textContent="tel. 999222444-555";
    contactList.appendChild(tel);
    
    const address = document.createElement("li");
    address.textContent="Sunset Boulevard 23rd 5 a, 42166 Los Angeles";
    contactList.appendChild(address);
    
    const contentContainer = document.getElementById("content");
    contentContainer.appendChild(heading);
    contentContainer.appendChild(contactList);

    const myFrame = document.createElement("iframe");
    myFrame.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1652.63978314498!2d-118.33749798964404!3d34.0623470054469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8e7b99efc07%3A0x42abcfea7ca88cf7!2s600%20S%20Mc%20Cadden%20Pl%2C%20Los%20Angeles%2C%20CA%2090005%2C%20USA!5e0!3m2!1sde!2ses!4v1648798045795!5m2!1sde!2ses";
    myFrame.width="600";
    myFrame.height="460";
    myFrame.style="boder:0";
    myFrame.allowfullscreen="";
    myFrame.loading="lazy";
    myFrame.referrerPolicy="no-referrer-when-downgrade";
    contentContainer.appendChild(myFrame);
}

export {contact};