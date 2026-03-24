const list= document.getElementById("list")
console.log(list.parentElement.nodeName)
for(let i=0;i<list.childElementCount;i++){
    console.log(list.children[i])
}
console.log(list.nextElementSibling)