
function customrender(renderElement,container){
    /*const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=renderElement.Children
    domElement.setAttribute("href",renderElement.props.href)
    domElement.setAttribute("target",renderElement.props.target)
    container.appendChild(domElement)
    */
   const domElement=document.createElement(renderElement.type)
   domElement.innerHTML=renderElement.Children
   for (const prop in reactElement.props){
    if (prop==='children') continue;
    domElement.setAttribute(prop,renderElement.props[prop])
    
   }
   container.appendChild(domElement)
}
const reactElement ={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    Children:"click to visit google"

}
const mainContainer=document.querySelector("#root")
customrender(reactElement,mainContainer)

