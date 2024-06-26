import styled from "styled-components";
import { stylesColor, theme } from "../../theme";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type MenuItemProps = {
    item: {
        name: string;
        url: string;
        submenu?: {
            name: string;
            url: string;
        }[];
    };
    index: number;
};

export const MenuItem = ({item, index}: MenuItemProps) => {
  return (
    <MenuItemStyled key={index}>
        <a href={item.url}>{item.name}</a>
        {item.submenu && <KeyboardArrowDownIcon />}
        {item.submenu && (
            <SubmenuStyled>
                {item.submenu.map((subitem, subindex) => (
                        <a  key={subindex} href={subitem.url}>{subitem.name}</a>
                ))}
            </SubmenuStyled>
        )}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.li`
    position: relative;
    font-family: ${theme.fonts.body};
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0 15px;
    cursor: pointer;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: ${stylesColor.colorMenu};
        transition: color 0.3s;
    }
    
    svg {
        margin-left: 5px;
        color: ${stylesColor.colorMenu};
        transition: color 0.3s;
    }

    &:hover > ul {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    &:hover > a {
        color: ${stylesColor.actionButtonBackground};
    }

    &:hover > svg {
        color: ${stylesColor.actionButtonBackground};
    }

    @media (max-width: 768px) {
        margin: 10px 0;
        width: 100%;
        justify-content: center;
        text-align: center;

        svg {
            display: none;
        }

        &:hover > ul {
            transform: none;
        }
    }
`;

// TODO: Cambiar a una variable de color
const SubmenuStyled = styled.ul`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${stylesColor.backgroundColorHeader};
    list-style: none;
    margin: 0;
    padding: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    width: 200px; /* Ancho para mantener el submenú alineado */
    display: flex;
    flex-direction: column;
        a {
            padding: 8px 12px;
            transition: background-color 0.3s;
            font-size: 1rem;
            font-weight: 400;
            text-decoration: none;
            color: ${stylesColor.colorSubMenu};
            transition: color 0.3s;
            &:hover {
                background-color: ${stylesColor.actionButtonBackground};
                color: ${stylesColor.actionButtonColor};
        }
    }

        
    
    @media (max-width: 768px) {
        position: relative;
        top: 0;
        left: 0;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        background-color: transparent;
        width: 100%;
        width: 100%;
        text-align: center;
        
    }
`;
