import React from 'react'

// components
import Header from '../components/main/header'
import Menu from '../components/main/menu'
import Contact from '../components/main/contact'

export default function dashboard() {
    return (
        <div className="wrapper">
            <Header></Header>
            <Contact></Contact>
            <Menu></Menu>
        </div>
    )
}
