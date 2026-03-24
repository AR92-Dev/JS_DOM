const img = document.getElementById("img")
const newElement =document.createElement("h2")
img.replaceWith(newElement)
newElement.textContent="Here was a Image"
const updatevar= document.getElementById("update")
updatevar.textContent="Updated!"
updatevar.classList.remove("red")
updatevar.classList.add("blue")