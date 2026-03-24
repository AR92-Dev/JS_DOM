DOM : Document object model 
DOM used for build a web page based on a structure of a HTML file and it can modify the a built web pages
Tree structure treat every elements in HTML like a tree as log and branches of that tree and each element called a nod and every attribute called a attribute node and every node has another node share exact parent they called siblings and a leaf is a node that have no child  inside it 
as example 
<html>
<head>
<title>Hi</title>
</head>
<body>
<h1>header</h1>
<p>this is a paragraph</p>
</body>
The parent of all structure is a node html and inside it there is many children like html and body and inside a html (treat as a parent ) have a children a title and for a body(treat as a parent ) has two child a h1 and p and a h1 here (treat as parent for a text inside it) the “Hi” and every attribute as a branch of tree too
The main idea of DOM to simplify how to search of HTML structure and find specific elements and change it based on node relationship like fin a parent has id and remove first child of it and so on

The element node: that node accept attributes and its act as a parent for anther elements like when you search in DOM by document.getElementById() you are hunting a Element node
The Text Node: That a node that cant have any child inside it (Text) acts like a leaf and the white spaces like tabs, space and enter Key treat as a text
The comment Node: not loaded in a visible browser but its loaded to keep track where components should be injected or removed
The deference between DOM and HTML is a HTML stored in a storage or in a  web server and its cant be modified until you open a source code and change It and its used to struct a web page and its only understand a HTML only
And the DOM is a dynamic structure and it’s a Object oriented of nodes and its stored in a RAM and can modify the element in html like insert new element and delete elements or modify elements and if you missing something the DOM trying to fix it like when you forgot to close a tag it trying to do that  and can be interacted by HTML, CSS, JavaScript

How browser builds the DOM :
1-	First when you enter a website using URL the data comes in a form of 0s and 1s 
2-	The browser encoding those into a plain text using like UTF-8 
3-	Then in a Tokenization step its search inside the plain text for indicators like < and > to build a tags and structure 
4-	Then the browser start building object of nodes (elements, text, comments) when building those nodes it build the properties of every node like attach id 
5-	Then the relationship process occur like when its sees a <header> tag and find <h1> inside it and its placed before the end tag of header </header>  its will treat it as a child of header
Note: the DOM building the objects step by step from top to down so if there is a JavaScript code its stop building the rest of page and start execute the code so if in JS want an element does not rendered yet is return an null error 

The node its everything inside tree including whitespaces and comments
The element ignore text and comments and look only to tags so when select a tag  its search of an real elements not for a node with noting inside (invisible)
 
Document (Root)
 │
 └── <html> (Element Node)
      │
      ├── <head> (Element Node)
      │    │
      │    └── <title> (Element Node)
      │         └── "My Page" (Text Node)
      │
      └── <body> (Element Node)
           │
           ├── #text (Whitespace/Line break before the ul)
           │
           └── <ul id="menu"> (Element Node)
                │
                ├── #text (Whitespace/Line break before comment)
                ├── (Comment Node)
                ├── #text (Whitespace/Line break after comment)
                │
                ├── <li> (Element Node)
                │    └── "Home" (Text Node)
                │
                ├── #text (Whitespace/Line break between LIs)
                │
                ├── <li> (Element Node)
                │    └── "About" (Text Node)
                │
                └── #text (Whitespace/Line break before closing ul)

parentNode vs parentElement
When select and element like <ul> the Node return the node and does not ask for its type but element return only elements as a HTML tag and if its not a element its return null

ChildNodes and children
ChildNodes return a NodeList and this list contains a (text, comments, elements) and we can use foreach to iterate on a list
But the children return HTMLCollection and its only contain HTML tags only and its treat as a array but its don’t have a foreach method so we have to convert it to real array to do that
The HTML Collection is a live update

firstChild vs firstElementChild
the firstChild return the first node and may return whitespace and it will crash but firstElementChild return the real first element

nextSibling vs nextElementSibling
used to get a next sibling of current element if you don’t know the next element id and nextSibling get everything in DOM also whitespaces

Selectors 
 document.getElementById('my-id'): Searches for a single element with a specific id.
document.getElementsByClassName('my-class'): Searches for all elements sharing a specific CSS class.
document.getElementsByTagName('div'): Searches for all elements of a specific HTML tag.
 document.querySelector('.my-class > li'): Uses any valid CSS selector to find the first matching element.
document.querySelectorAll('.my-class > li'): Uses any valid CSS selector to find all matching elements.
the getElementByid and querySelector return only 1 element
the getElementByClassName and getElementsByTagName return HTMLCollection
the querySelectorAll return NodeList but its has only a elements 
The getElementByClassName and getElementsByTagName is HTMLCollection so its live update so when a query change element the variables changed
The querySelectorAll returns NodeList its take a snapshot of a DOM Picture so when DOM changed later the variables not know about it

Performance 
GetelemenById is the fastest one 
And the getElementByClassName and querySelectorAll is slower

The textContent extract the text as it is from the HTML file also spaces and hidden text
myDiv.textContent = "Welcome to the site!";

The innerText only extract the visible text as shown in a user browser 
myDiv.innerText = "Welcome to the site!";

innerHTML its extract the text and all HTML tags and properties of that tag
myDiv.innerHTML = "<strong>Welcome</strong> to the <em>site</em>!";
 
Manipulating Attributes 
getAttribute('name'): Reads the current value of an attribute.
setAttribute('name', 'value'): Changes an attribute or adds a completely new one.
removeAttribute('name'): Deletes the attribute entirely.

classList.add : add class to element
classList.remove: remove class from element
classList.toggle: if the class exist remove it and if it is not add it
classList.contains return true or false of the class exist or not

inlineStyke vs CSS classes 
the style property adds a style=”” to an HTML element
like 
box.style.backgroundColor = "blue";
The CSS Classes uses a classList to add a pre Written css class in css file 
box.classList.add('highlight-box');









