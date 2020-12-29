import { Grid } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { clothesIcon } from "../icons/clothesIcon";
import ActionButton from "./ActionButton";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { addIcon } from "../icons/addIcon";

export interface Props {
  width: number;
  height: number;
  color: string;
  iconSize: number,
  onClick: () => void;
}
export interface State {}

export class FelixButton extends React.Component<Props, State> {
  render() {
    return (
      <ButtonContainer
        style={{ width: this.props.width, height: this.props.height }}
      >
        <IconButton
          aria-label="add"
          onClick={() => this.props.onClick()}
          size="medium"
          style={{
            width: this.props.width,
            height: this.props.height,
            background: this.props.color,
          }}
        >
          {addIcon(this.props.iconSize)}
        </IconButton>
      </ButtonContainer>
    );
  }
}

const ButtonContainer = styled.div`
  border-radius: 50%;
  z-index: 10000;
`;
