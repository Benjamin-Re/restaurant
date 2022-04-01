const menu = function() {


    const heading = document.createElement("h1");
    heading.textContent="Mama Mia Menue";

    const menuList = document.createElement("ul");
    const menuItem = document.createElement("li");
    menuItem.textContent="Spaghetti - 12 €";
    menuList.appendChild(menuItem);
    
    const menuItem2 = document.createElement("li");
    menuItem2.textContent="Pizza - 9 €";
    menuList.appendChild(menuItem2);

    const menuItem3 = document.createElement("li");
    menuItem3.textContent="Lasagna al Forno - 15 €";
    menuList.appendChild(menuItem3);

    const menuItem4 = document.createElement("li");
    menuItem4.textContent="Provolone - 6 €";
    menuList.appendChild(menuItem4);
    
    const menuItem5 = document.createElement("li");
    menuItem5.textContent="Insalata Mixta - 8 €";
    menuList.appendChild(menuItem5);

    const contentContainer = document.getElementById("content");
    contentContainer.appendChild(heading);
    contentContainer.appendChild(menuList);

    const picture = document.createElement("img");
    picture.src="./../src/pizza.jpg";
    picture.classList.add("menu-img");
    contentContainer.appendChild(picture);

    const credits = document.createElement("span");
    const link1 = document.createElement("a");
    link1.href="https://unsplash.com/@shouravsheikh01?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    link1.textContent="Shourav Sheikh, unsplash";
    credits.appendChild(link1);
    contentContainer.appendChild(credits);

 
  
}

export {menu};