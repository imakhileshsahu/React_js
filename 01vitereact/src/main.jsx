import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div><h1>!Custom App</h1> </div>
  )
}

const anotherElement=(
  <a href ="https://google.com" target='_blank'>visit google?</a>
)
// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     <MyApp />
//   //  anotherElement
//   // </StrictMode>,
// )
const reactElement=React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank'},
  'click to visit google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement
  <App />
)
