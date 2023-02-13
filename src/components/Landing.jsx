import React from 'react'
import NavBar from './NavBar/NavBar'
import Button from './Button/Button'
import ItemListContainer from './ItemListContainer'

const Landing = () => {
  return <>
  <NavBar />
  <Button/>
  <ItemListContainer  greeting= "Bienvenidos a MECA, una libreria on-line"/> 
  
</>
}


export default Landing