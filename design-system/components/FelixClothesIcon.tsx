import * as React from "react";
import styled from "styled-components";
import { clothesIcon } from "../icons/clothesIcon";

export interface Props {
  program: string;
  programIcon: "dry" | "wash";
  iconColor: string;
}
interface State {}

export class FelixClothesIcon extends React.Component<
  Props,
  State
> {
  state = {};

  render() {
    return (
      <IconBox>
        {clothesIcon(this.props.programIcon, this.props.iconColor)}
        <p>{this.props.program}</p>
      </IconBox>
    );
  }
}

const IconBox = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  svg {
    height: 100%;
  }
  justify-content: center;
  align-items: center;
  p {
    font-family: inherit;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    color: #c4c4c4;
  }
`;
