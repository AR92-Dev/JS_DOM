
const cardsContainer = document.createElement("div");

cardsContainer.style.display = "flex";
cardsContainer.style.flexWrap = "wrap";
cardsContainer.style.gap = "20px"; 
cardsContainer.style.justifyContent = "center";
cardsContainer.style.padding = "20px";



for(let i = 0; i <= 6; i++) {
    const cardContainer = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardTitle = document.createElement('h2');
    const cardDescription = document.createElement('p');
    cardTitle.textContent = "This is a card title";
    cardDescription.textContent = "This is a description of a generated card using JS";
    cardImage.setAttribute("src", "src/img_javascript_480.jpg");
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardDescription);
    cardsContainer.appendChild(cardContainer);

    cardContainer.style.border="2px solid black"
cardContainer.style.textAlign="center"
cardContainer.style.width = "fit-content";
cardContainer.style.maxWidth = "350px";
cardImage.style.width="100%"
cardContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
cardContainer.style.justifySelf="center"
cardContainer.style.width = "250px";

}
document.body.appendChild(cardsContainer);