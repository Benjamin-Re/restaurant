const pageLoad = function() {


    const heading = document.createElement("h1");
    heading.textContent="Mama Mia";

    const picture = document.createElement("img");
    picture.src="img/image.jpg";
    picture.classList.add("restaurant-img");
    const text = document.createElement("p");
    text.textContent="Beste Restaurante sooo guude oh";

    const contentContainer = document.getElementById("content");
    console.log(contentContainer);
    contentContainer.appendChild(heading);
    contentContainer.appendChild(picture);
    contentContainer.appendChild(text);
    
    const credits = document.createElement("span");
    const link1 = document.createElement("a");
    link1.href="https://unsplash.com/@shawnanggg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    link1.textContent="shawnanggg, unsplash";
    credits.appendChild(link1);
    contentContainer.appendChild(credits);
  
}

export {pageLoad};0