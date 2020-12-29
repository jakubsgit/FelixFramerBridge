import * as React from "react";
import * as System from "../../design-system/components/MenuBar";
import { ControlType, PropertyControls } from "framer";

export class FelixMenuBar extends React.Component<System.Props> {
  render() {
    return (
      <System.MenuBar
        menuTitleText={this.props.menuTitleText}
        height={this.props.height}
        menuIconSize={this.props.menuIconSize}
        appBarColor={this.props.appBarColor}
        fontColor={this.props.fontColor}
        menuOptionText={this.props.menuOptionText}
        onMenuClick={this.props.onMenuClick}
      />
    );
  }

  static defaultProps: System.Props = {
    menuTitleText: "Felix",
    height: 100,
    menuIconSize: 24,
    appBarColor: "white",
    fontColor: "#00D2AA",
    menuOptionText: "",
    onMenuClick: () => {},
  };

  static propertyControls: PropertyControls<System.Props> = {
    menuTitleText: { type: ControlType.String, title: "menuTitleText" },
    menuOptionText: { type: ControlType.String, title: "menuOptionText" },
    appBarColor: { type: ControlType.String, title: "appBarColor" },
    fontColor: { type: ControlType.String, title: "fontColor" },
    menuIconSize: { type: ControlType.Number, title: "menuIconSize" },
    onMenuClick: { type: ControlType.EventHandler, title: "onMenuClick" }
  };
}
