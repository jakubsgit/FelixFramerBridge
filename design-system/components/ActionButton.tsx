import * as React from "react";
import styled from "styled-components";

export interface ActionButtonProps {
  active?: boolean;
  height: number;
  buttonText: string;
  onClick?: () => void;
}

const ActionButton: React.SFC<ActionButtonProps> = ({
  active,
  buttonText,
  height,
  onClick
}) => {
  return (
    <Button active={active} height={height} onClick={() => onClick ? onClick() : {}}>
      <p>{buttonText}</p>
    </Button>
  );
};

export default ActionButton;

const Button = styled.div`
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: 80%;
  background: ${(props) => (props.active ? "#00D2AA" : "white")};
  border-radius: 25px;
  border: 2px solid #00d2aa;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  p {
      text-transform: uppercase;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${(props) => (props.active ? "white" : "#00D2AA")};
  }
`;
