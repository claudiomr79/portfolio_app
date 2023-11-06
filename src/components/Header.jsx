import React from 'react'
import Nav from './Nav'

function Header(props) {
  return (
    <div>
       <Nav name={props.name} home={props.home} about={props.about} proyects={props.proyects} contact={props.contact} />  
    </div>
  )
}

export default Header