// const html1 = document.documentElement
// const firstNode = document.firstChild
// const firstElementChildNode = document.firstElementChild
// const lastNode = document.lastChild
// const lastElementChildNode = document.lastElementChild
// console.log(document)
// console.log(html1)
// console.log(firstNode)
// console.log(firstElementChildNode)
// console.log(lastElementChildNode)
// console.log(lastNode)

// console.log(document.body)
// console.log(document.body.nodeName)
// console.log(document.body.nodeType)
// console.log(document.body.nodeValue)

// if (document.body.nodeType === Node.ELEMENT_NODE)
//   console.log(`body is an element node type`)
// if (document.body.nodeType === Node.ATTRIBUTE_NODE)
//   console.log(`body is an attribute node type`)
// if (document.body.nodeType === Node.TEXT_NODE)
//   console.log(`body is a text node type`)
 

// const divChildNodes = divElement.childNodes
// console.log(`length: ${divElement.childNodes.length}`)
// divChildNodes.forEach((child)=> {
//     console.log(child.nodeName)
//     console.log(child.nodeType)
//     console.log(child.nodeValue)
// })

// const divChildren = divElement.children
// console.log(`length: ${divElement.children.length}`)
// Array.from(divChildren).forEach((child)=>{
//     console.log(children.nodeName)
//     console.log(children.nodeType)
//     console.log(children.nodeValue)
// })


// create <p id='int141'>INT141</p> as a child of <div id="subject">

//1. create <p element
const divElement = document.getElementById("subject")
const pElement = document.createElement("p")
//1.5 create attribute id
// const idAttr = document.createAttribute("id")
// idAttr.value = "int141"
// pElement.setAttributeNode(idAttr)
pElement.setAttribute("id", "int141")
pElement.setAttribute("style", "color:blue")
pElement.setAttribute("name", "corgi")

//2. create text node then 3. append to <p> child
const pText = document.createTextNode("INT141")
pElement.appendChild(pText)
// pElement.textContent = "INT141"

//4.append <p> with text node to div element
divElement.appendChild(pElement)
 

console.log(pElement.getAttribute("id"))
console.log(pElement.attributes[0])
console.log(pElement.attributes[0].ownerElement)

const pAttributes=pElement.attributes
for(let i = 0; i < pAttributes.length; i++){
    const name = pAttributes[i].name
    const value = pAttributes[i].value
    console.log(name,value)

    if(pAttributes[i].name === "name"){
        console.log("kuy")
    }
}