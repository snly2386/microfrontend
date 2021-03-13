import React from 'react'
import App from './App'
import { render } from 'react-dom'

//Mount function to start the app
const mount = el => {
  render(
    <App />,
    el
  )
}

if(process.env.NODE_ENV === 'development'){
  const root = document.querySelector('#marketing-dev')

  root && mount(root)
}
// If in development - just run

// Otherwise we're running through container - so need to export
export { mount }