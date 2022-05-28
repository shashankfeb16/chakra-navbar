import React from 'react'
import { Box } from '@chakra-ui/react'
import Buttons from './Buttons'
import Logo from './Logo'
import styles from './app.module.css'
import SideButtons from './SideButtons'

const Navbar = () => {
  return (
   <div className={styles.box}>
       <Logo></Logo>
       <Buttons></Buttons>
       <SideButtons></SideButtons>
   </div>

    
  )
}

export default Navbar