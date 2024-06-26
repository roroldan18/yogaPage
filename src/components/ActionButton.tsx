import styled from "styled-components";
import { stylesColor } from "../theme";

type ActionButtonProps = {
    actionButton: {
        name: string;
        url: string;
    };
};

export const ActionButton = ({actionButton}: ActionButtonProps) => {
  return (
    <ActionButtonStyled>
        <a href={actionButton.url}>{actionButton.name}</a>
    </ActionButtonStyled>
  )
}

const ActionButtonStyled = styled.div`
    transition: scale 0.3s;
    &:hover {
        scale: 1.1;
    }
    a {
        background-color: ${stylesColor.actionButtonBackground};
        color: ${stylesColor.actionButtonColor};
        padding: 10px 20px;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 600;

    }
`;
