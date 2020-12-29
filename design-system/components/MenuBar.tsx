import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Slide, useScrollTrigger } from "@material-ui/core";
import styled from "styled-components";
import { menuIcon } from "../icons/menuIcon";

export interface Props {
  menuTitleText: string;
  menuOptionText: string;
  height: number;
  menuIconSize: number;
  appBarColor: string;
  fontColor: string;
  onMenuClick: () => void
}

export class MenuBar extends React.Component<Props> {
  render() {
    return (
      <MenuBarContainer style={{ height: `${this.props.height}px` }}>
        <AppBar
          position="static"
          style={{
            height: "100%",
            display: "flex",
            alignContent: "center",
            background: this.props.appBarColor,
          }}
        >
          <Toolbar style={{ height: "100%" }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => this.props.onMenuClick()}>
              {menuIcon(this.props.menuIconSize)}
            </IconButton>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
                textAlign: "center",
                color: this.props.fontColor,
                fontSize: 18,
                fontWeight: 900
              }}
            >
              {this.props.menuTitleText}
            </Typography>
            <Button
              style={{
                color: this.props.fontColor,
              }}
            >
              {this.props.menuOptionText}
            </Button>
          </Toolbar>
        </AppBar>
      </MenuBarContainer>
    );
  }
}

const MenuBarContainer = styled.div`
  flex-grow: 1;
`;
