const cardContainer = document.createElement('div');
const cardImage = document.createElement('img');
const cardTitle = document.createElement('h2');
const cardDescription = document.createElement('p');

cardTitle.textContent = "This is a card title"
cardDescription.textContent="The is a description of a generated card using JS "
cardImage.setAttribute("src","src/img_javascript_480.jpg")

cardContainer.appendChild(cardImage)
cardContainer.appendChild(cardTitle)
cardContainer.appendChild(cardDescription)
document.body.appendChild(cardContainer)
cardContainer.style.border="2px solid black"
cardContainer.style.textAlign="center"
cardContainer.style.width = "fit-content";
cardContainer.style.maxWidth = "350px";
cardImage.style.width="100%"
cardContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
cardContainer.style.justifySelf="center"