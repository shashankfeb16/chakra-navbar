import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

const Buttons = () => {
    return (
        <>
            <Popover isLazy >
                <PopoverTrigger>
                    <Button marginTop="20px" colorScheme='white' color="black">Inspiration</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Explore Design Works</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Trending Design to inspire you
                    </PopoverBody>
                    <PopoverHeader fontWeight='semibold'>New And Note Worthy</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Up-and-coming Designers
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Popover isLazy >
                <PopoverTrigger>
                    <Button marginTop="20px" colorScheme='white' color="black">Find Work</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Job Board</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Find your dream design job
                    </PopoverBody>
                    <PopoverHeader fontWeight='semibold'>Freelance Projects</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        An exclusive link for construct work
                    </PopoverBody>
                </PopoverContent>
            </Popover>
    <Button colorScheme='teal' variant='ghost' marginTop="20px" color="black">
        Learn Design
    </Button>
    <Button colorScheme='teal' variant='ghost' marginTop="20px" color="black">
        Hire Designers
    </Button>

        </>
    )
}

export default Buttons