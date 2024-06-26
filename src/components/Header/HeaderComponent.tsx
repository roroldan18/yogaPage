import { useState } from "react";
import styled from "styled-components";
import { ActionButton } from "../ActionButton";
import { MenuItem } from "./MenuItem";
import { actionButton, menu } from "../../data";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { stylesColor } from "../../theme";

export const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <DivStyled>

            <DivLogo>
                <img src='./src/assets/images/logoBig.png' alt='logo' />
                <div>
                    <h1>Marca profesor</h1>
                    <h2>Yoga</h2>
                </div>
            </DivLogo>

            <NavStyled isMenuOpen={isMenuOpen}>
                <ul>
                    {menu.map((item, index) => (
                        <MenuItem key={index} item={item} index={index} />
                    ))}
                </ul>
            </NavStyled>
            <ActionButton actionButton={actionButton} />
            <MenuToggle onClick={toggleMenu}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </MenuToggle>
        </DivStyled>
    );
};

const DivStyled = styled.div`
    background-color: ${stylesColor.backgroundColorHeader};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: sticky;
    
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    @media (max-width: 768px) {
        padding: 10px 20px;
    }
`;

const DivLogo = styled.div`
    display: flex;
    align-items: center;
    color: ${stylesColor.logoColor};
    img {
        width: 50px;
        height: 50px;
        margin: 0 10px;
    }
    h1 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
    }
    h2 {
        font-size: 0.8rem;
        margin: 0;
    }
`;

interface NavStyledProps {
    isMenuOpen: boolean;
}

const NavStyled = styled.nav<NavStyledProps>`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: ${stylesColor.backgroundColorHeader};
            transition: all 0.3s ease-in-out;
            transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(-100%)'};
            opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
            visibility: ${({ isMenuOpen }) => isMenuOpen ? 'visible' : 'hidden'};
        }
    }
`;

const MenuToggle = styled.div`
    display: none;
    cursor: pointer;
    svg {
        font-size: 2rem;
        color: ${stylesColor.colorIcons};
    }
    @media (max-width: 768px) {
        display: block;
    }
`;
