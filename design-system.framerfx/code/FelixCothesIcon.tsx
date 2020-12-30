import * as React from "react";
import * as System from "../../design-system/components/FelixClothesIcon";
import { ControlType, PropertyControls } from "framer";

export class FelixClothesIcon extends React.Component<
  System.Props
> {
  state = {};

  render() {
    return (
      <System.FelixClothesIcon
        program={this.props.program}
        programIcon={this.props.programIcon}
        iconColor={this.props.iconColor}
      />
    );
  }

  static defaultProps: System.Props = {
    program: "Sportowe 45℃ ",
    programIcon: "wash",
    iconColor: "#FF846D",
  };

  static propertyControls: PropertyControls<System.Props> = {
    program: { type: ControlType.String, title: "program" },
    programIcon: {
      type: ControlType.Enum,
      options: ["wash", "dry"],
      optionTitles: ["wash", "dry"],
    },
    iconColor: { type: ControlType.String, title: "color" },
  };
}
