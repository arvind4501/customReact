
const reactElement = {
  type: 'a',
  args: {
    href: 'https://google.com',
    target: '_blank',
    style: "color: #00FF00;"
  }
}

const maincontainer = document.querySelector('#root')

customRender(maincontainer, reactElement)

function customRender(domcontainer, reactElement){
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = "click mewww "
  for (const arg in reactElement.args) {
    domElement.setAttribute(arg, reactElement.args[arg])
  }
  domcontainer.appendChild(domElement)
}

function Render(rElement){
  const dElement = document.createElement(rElement.type)
  dElement.innerHTML = "click mewww "
  for (const arg in rElement.args) {
    dElement.setAttribute(arg, rElement.args[arg])
  }
  maincontainer.appendChild(dElement)

}
Render(reactElement)