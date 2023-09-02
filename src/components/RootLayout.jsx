import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPannel from './NavbarPanel'
import { Provider } from 'react-redux'
import store from '../redux/store'

const  RootLayout = () => {
  return (
    <div>
        <Provider store={store}>
        <NavbarPannel />
        <main>
            <Outlet />
        </main>
        </Provider>
    </div>
  )
}

export default RootLayout