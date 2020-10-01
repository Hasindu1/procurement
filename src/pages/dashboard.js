import React from 'react'

// components
import Header from '../components/main/header'
import Menu from '../components/main/menu'
import Contact from '../components/main/contact'
import NavBar from '../components/navbar'
export default function dashboard() {
    return (
        <>
        <NavBar/>
        <div class="jumbotron" style={{marginTop: 20}}>
            <h2 style={{textAlign: "center"}}><u>Welcome to the Our Procurement System Admin DashBaord</u></h2>
        </div>
       </>
    )
}
