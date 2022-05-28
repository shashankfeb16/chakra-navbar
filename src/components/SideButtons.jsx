import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import styles from './app.module.css'
const SideButtons = () => {
  return (
    <div className={styles.side}>
        <Button colorScheme='teal' variant='link' marginTop="30px" marginBottom="20px">
            Sign in
        </Button>
        <Button colorScheme='pink' variant='solid' marginLeft="20px">
          Sign Up
        </Button>
    </div>
  )
}

export default SideButtons