/* dom.js */

function init() {
    let element = document.getElementById('walkBtn');
    element.addEventListener('click', function () {
        walk();
    });

    element = document.getElementById('adv_walkBtn');
    element.addEventListener('click', function () {
        adv_walk(document.getElementById("root"), 0);
    })

    element = document.getElementById('modifyBtn');
    element.addEventListener('click', function () {
        modify();
    });


    element = document.getElementById('adv_modifyBtn');
    element.addEventListener('click', function () {
        adv_modify();
    });

    element = document.getElementById('addBtn');
    element.addEventListener('click', function () {
        add();
    });

    element = document.getElementById('advAdd');
    element.addEventListener('click', function () {
        adv_add();
    });



    element = document.getElementById('removeBtn');
    element.addEventListener('click', function () {
        remove();
    });

    element = document.getElementById('safe_removeBtn');
    element.addEventListener('click', function () {
        safe_remove();
    });

    element = document.getElementById('selector_removeBtn');
    element.addEventListener('click', function () {
        selector_remover();
    });

    element = document.getElementById("basicCloneBtn");
    element.addEventListener('click', function () {
        basic_clone();
    });

    element = document.getElementById('advCloneBtn');
    element.addEventListener('click', function (){
        advance_clone();
    });
}

function walk() {
    let el;

    el = document.getElementById('p1');
    showNode(el, outputTextarea);

    el = el.firstChild;
    showNode(el, outputTextarea);

    el = el.nextSibling;
    showNode(el, outputTextarea);

    el = el.lastChild;
    showNode(el, outputTextarea);

    el = el.parentNode.parentNode.parentNode;
    showNode(el, outputTextarea);

    el = el.querySelector('section > *');
    showNode(el, outputTextarea);


}

function adv_walk(current, tab) {

    for (var i = 0; i < tab; i++) {
        let tArea = document.getElementById("outputTextarea2");
        tArea.value += "              "

    }
    showNodeTree(current, outputTextarea2)

    for (var i = 0; i < current.childNodes.length; i++) {

        let curChild = current.childNodes[i];
        adv_walk(curChild, tab + 1);
    }

}




function showNode(el, tArea) {

    let nodeType = el.nodeType;
    let nodeName = el.nodeName;
    let nodeValue = el.nodeValue;

    tArea.value += `Node type: ${nodeType}\nNode name: ${nodeName}\nNode value: ${nodeValue}\n`;
    tArea.value += `\n`;
    //alert(`Node type: ${nodeType}\nNode name: ${nodeName}\nNode value: ${nodeValue}`);
}

function showNodeTree(el, tArea) {

    let nodeName = el.nodeName;

    tArea.value += `Node name: ${nodeName}`;
    tArea.value += `\n`;
    //alert(`Node type: ${nodeType}\nNode name: ${nodeName}\nNode value: ${nodeValue}`);
}
function adv_modify() {
    let el = document.getElementById("h1");
    let ptag = document.getElementById("p1")



    el.textContent = "DOM Manipulation is Fun!";


    const darkColors = [
        getComputedStyle(document.documentElement).getPropertyValue('--darkcolor1'),
        getComputedStyle(document.documentElement).getPropertyValue('--darkcolor2'),
        getComputedStyle(document.documentElement).getPropertyValue('--darkcolor3'),
        getComputedStyle(document.documentElement).getPropertyValue('--darkcolor4'),
        getComputedStyle(document.documentElement).getPropertyValue('--darkcolor5'),
        getComputedStyle(document.documentElement).getPropertyValue('--darkcolor6')
    ];

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * darkColors.length);

    // Get the random dark color from the array
    const randomDarkColor = darkColors[randomIndex];

    el.style.color = randomDarkColor;

    ptag.className = 'shmancy';

}

function modify() {
    let el = document.getElementById('p1');

    // You can do all the properties one by one if you know them in HTML
    el.title = 'I was changed by JS';

    // you can update the style as a string
    // el.style = 'color: blue; font-size: 1em;';

    // you also may prefer to update on the CSS object.  This is the same as above
    // el.style.color = 'blue';
    // el.style.fontSize = '1em';
    // be careful doing many styles bit by bit it isn't efficent, might be easier just to set a class

    // you can also update the class list
    el.className = 'fancy';

    // you can also update the dataset which change data-* attributes
    el.dataset.cool = 'true';       // data-cool="true"
    el.dataset.coolFactor = '9000'; //data-cool-factor="9000"

}

function add() {

    let p, em, txt1, txt2, txt3;

    // first we do things the long old-fashioned standard DOM way
    p = document.createElement('p'); // <p></p>
    em = document.createElement('em'); // <em></em>
    txt1 = document.createTextNode('This is a '); // "This is a"
    txt2 = document.createTextNode('test'); // "test"
    txt3 = document.createTextNode(' of the DOM'); // " of the DOM"

    p.appendChild(txt1); // <p>This is a</p>
    em.appendChild(txt2); // <em>test</em>
    p.appendChild(em); // <p>This is a<em>test</em></p>
    p.appendChild(txt3); // <p>This is a<em>test</em> of the DOM</p>

    // go an insert this new copy below the old one
    let oldP = document.getElementById('p1');
    oldP.parentNode.insertBefore(p, oldP.nextSibling);

    // Alternative method using innerHTML and insertAdjacentHTML
    // let oldP = document.getElementById('p1');
    // oldP.insertAdjacentHTML('afterend', '<p>This is a<em>test</em> of the DOM</p>');
    // clearly short hands are pretty easy!
}

function adv_add() {
    let selectedType = document.getElementById('element-type').value;
    let userInput = document.getElementById('elementText').value;
    var parentElement = document.getElementById('addSection');
    const currentDate = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };




    // Create the new element based on the selected value
    var newElement;
    if (selectedType === 'text-node') {
        if (userInput.trim() == '') {
            userInput += "New Text Node "
            userInput += currentDate.toLocaleString(undefined, options);
            userInput += `\n`;
        }

        newElement = document.createTextNode(`\n${userInput}\n`);
    } else if (selectedType === 'comment') {
        if (userInput.trim() == '') {
            userInput += "New Comment "
            userInput += currentDate.toLocaleString(undefined, options);
            userInput += `\n`;
        }
        newElement = document.createComment(`${userInput}`);
    } else if (selectedType === 'element') {
        if (userInput.trim() == '') {
            userInput += "New Element "
            userInput += currentDate.toLocaleString(undefined, options);
            userInput += `\n`;
        }
        newElement = document.createElement('p');
        newElement.textContent = `${userInput}`;
    }


    // Insert the new element as the last child of the parent element
    parentElement.appendChild(newElement);
}
function remove() {
    document.body.removeChild(document.body.lastChild);
}

function safe_remove() {
    const parentElement = document.body; // Change this to the appropriate parent element containing the last child.
    const lastChild = parentElement.lastChild;

    if (lastChild !== null && lastChild.id !== "controls") {
        parentElement.removeChild(lastChild);
    }
}

function selector_remover() {
    let selector = document.getElementById("selectorText").value;
    const elementsToRemove = document.querySelectorAll(`${selector}`);

    // Remove each matching element from the DOM
    elementsToRemove.forEach((element) => {
        element.remove();
    });
}

function basic_clone() {
    let selectedType = document.getElementById('element-type').value;
    let userInput = document.getElementById('elementText').value;
    var parentElement = document.getElementById('addSection');
    const currentDate = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };




    // Create the new element based on the selected value
    var newElement;

    // Get the first <p> element with id "p1"
    const originalElement = document.querySelector("#p1");

    // Clone the element
    const clonedElement = originalElement.cloneNode(true);

    // Modify any attributes of the cloned element if needed
    // For example, you can update the id attribute of the cloned element
    clonedElement.id = "clonedP1";



    // Insert the new element as the last child of the parent element
    parentElement.appendChild(clonedElement);

}

function advance_clone(){
    const template = document.getElementById('card-template');

    // Clone the content of the template
    const cardClone = template.content.cloneNode(true);

    // Add the cloned content to the DOM
    document.body.appendChild(cardClone);
}
window.addEventListener('DOMContentLoaded', init);