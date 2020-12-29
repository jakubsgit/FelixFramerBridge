import { Grid } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import { clothesIcon } from "../icons/clothesIcon";
import { dots } from "../icons/dots";

export interface FelixActiontileProps {
  titleSize: number;
  descSize: number;
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  time: string;
  program: string;
  programIcon: "dry" | "wash";
  iconColor: string;
}
interface State {}

export class FelixActiontile extends React.Component<
  FelixActiontileProps,
  State
> {
  state = {};

  render() {
    console.log(this.props.programIcon);
    return (
      <StyledTile>
        <Grid container>
          <Grid item xs={5}>
            <StyledWindow>
              <Title titleSize={this.props.titleSize}>
                {this.props.title1}
              </Title>
              <Description descSize={this.props.descSize}>
                {this.props.desc1}
              </Description>
              <Title titleSize={this.props.titleSize}>
                {this.props.title2}
              </Title>
              <Description descSize={this.props.descSize}>
                {this.props.desc2}
              </Description>
            </StyledWindow>
          </Grid>
          <Grid item xs={2}>
            <TimeBox>
              <p>{this.props.time}</p>
            </TimeBox>
          </Grid>
          <Grid item xs={4}>
            <IconBox>
              {clothesIcon(this.props.programIcon, this.props.iconColor)}
              <p>{this.props.program}</p>
            </IconBox>
          </Grid>
        </Grid>
        <Grid item xs={1} style={{ position: "relative" }}>
          <Dots>{dots()}</Dots>
        </Grid>
      </StyledTile>
    );
  }
}

const StyledTile = styled.div`
  &:hover {
    background: rgba(216, 216, 216, 0.5);
  }
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(216, 216, 216, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  min-height: 95px;
  min-width: 282px;
  width: 100%;
`;
const StyledWindow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: flex-start;
  padding: 15px;
  margin-bottom: -9px;
`;
const Title = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: inherit;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.titleSize}px;
  line-height: 12px;
  color: #8f8f8f;
  padding-bottom: 9px;
`;
const Description = styled.p`
  margin: 0px;
  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.descSize}px;
  line-height: 14px;
  color: #9b9b9b;
  padding-bottom: 9px;
`;

const TimeBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  p {
    font-family: inherit;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    color: #ff846d;
  }
`;

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

const Dots = styled.div`
  &:hover {
    transform: scale(1.4, 1.4);
    svg {
      path {
        fill: #000000;
      }
    }
  }
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  text-align: center;
`;
