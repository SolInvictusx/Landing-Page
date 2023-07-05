import React from 'react'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
} from '../../styles/Global.styled';

// import Navbar styles
import {
    MenuIcon,
    NavMenuContainer,
    MenuItem,
} from '../../styles/Navbar.styled';

import { AiOutlineClose } from 'react-icons/ai';

const NavMenu = ({ setOpenMenu }) => {
    return (
        <NavMenuContainer>
            {/* --close-button-- */}
            <PaddingContainer
                left='5%'
                right='5%'
                top='2rem'
            >
                <FlexContainer justify='flex-end'>
                    <MenuIcon
                        onClick={() => setOpenMenu(false)}
                    >
                        <AiOutlineClose />
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            {/* --menu-items-- */}
            <PaddingContainer top='8%'>
                <FlexContainer
                    direction='column'
                    align='center'
                >
                    <MenuItem
                        href='#Home'
                        onClick={() => setOpenMenu(false)}
                    >
                        Who I Am
                    </MenuItem>

                    <MenuItem
                        href='#Skills'
                        onClick={() => setOpenMenu(false)}
                    >
                        My Skills
                    </MenuItem>

                    <MenuItem
                        href='#Projects'
                        onClick={() => setOpenMenu(false)}
                    >
                        My Projects
                    </MenuItem>

                    <MenuItem
                        href='#Contact'
                        onClick={() => setOpenMenu(false)}
                    >
                        My Contact
                    </MenuItem>
                </FlexContainer>
            </PaddingContainer>
        </NavMenuContainer >
    )
}

export default NavMenu