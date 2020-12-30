import * as React from "react";
import FelixDropdown, {
  Props,
} from "../../design-system/components/FelixDropdown";
import { ControlType, PropertyControls } from "framer";

export class FelixDropdowns extends React.Component<Props> {
  render() {
    return (
      <FelixDropdown
        onClick={this.props.onClick}
        headerText={this.props.headerText}
        toggleText={this.props.toggleText}
        optionsArray={this.props.optionsArray}
      />
    );
  }

  static defaultProps: Props = {
    onClick: () => {},
    headerText: "FelixDropdown",
    toggleText: "Toggle text",
    optionsArray: [],
  };

  static propertyControls: PropertyControls<Props> = {
    onClick: { type: ControlType.EventHandler, title: "onClick" },
    headerText: { type: ControlType.String, title: "headerText" },
    toggleText: { type: ControlType.String, title: "toggleText" },
    optionsArray: { type: ControlType.Array, title: "optionsArray" },
  };
}
