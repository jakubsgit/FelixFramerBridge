import * as React from "react";
import * as System from "../../design-system/components/FelixButton";
import { ControlType, PropertyControls } from "framer";

export class FelixButton extends React.Component<System.Props, System.State> {
  render() {
    return (
      <System.FelixButton
        width={this.props.width}
        height={this.props.height}
        color={this.props.color}
        iconSize={this.props.iconSize}
        onClick={this.props.onClick}
      />
    );
  }

  static defaultProps: System.Props = {
    width: 50,
    height: 50,
    color: "#00D2AA",
    iconSize: 40,
    onClick: () => {}
  };

  static propertyControls: PropertyControls<System.Props> = {
    color: { type: ControlType.String, title: "color" },
    iconSize: { type: ControlType.Number, title: "iconSize" },
    onClick: { type: ControlType.EventHandler, title: "onClick" }
  };
}
