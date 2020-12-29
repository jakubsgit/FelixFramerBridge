import * as React from "react";
import styled from "styled-components";
import * as System from "../../design-system/components/FelixActionTile";
import { ControlType, PropertyControls } from "framer";

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

export class FelixActionTile extends React.Component<
  FelixActiontileProps,
  State
> {
  state = {};

  render() {
    return (
      <System.FelixActiontile
        titleSize={this.props.titleSize}
        descSize={this.props.descSize}
        title1={this.props.title1}
        desc1={this.props.desc1}
        title2={this.props.title2}
        desc2={this.props.desc2}
        time={this.props.time}
        program={this.props.program}
        programIcon={this.props.programIcon}
        iconColor={this.props.iconColor}
      />
    );
  }

  static defaultProps: System.FelixActiontileProps = {
    titleSize: 8,
    descSize: 10,
    title1: "Data",
    desc1: "Wtorek, 24/07/20",
    title2: "Godzina rozpoczęcia:",
    desc2: "15:00",
    time: "00:32",
    program: "Sportowe 45℃ ",
    programIcon: "wash",
    iconColor: "#FF846D",
  };

  static propertyControls: PropertyControls<System.FelixActiontileProps> = {
    titleSize: { type: ControlType.Number, title: "titleSize" },
    descSize: { type: ControlType.Number, title: "descSize" },
    title1: { type: ControlType.String, title: "title1" },
    desc1: { type: ControlType.String, title: "desc1" },
    title2: { type: ControlType.String, title: "title2" },
    desc2: { type: ControlType.String, title: "desc2" },
    time: { type: ControlType.String, title: "time" },
    program: { type: ControlType.String, title: "program" },
    programIcon: {
      type: ControlType.Enum,
      options: ["wash", "dry"],
      optionTitles: ["wash", "dry"],
    },
    iconColor: { type: ControlType.String, title: "color" },
  };
}
