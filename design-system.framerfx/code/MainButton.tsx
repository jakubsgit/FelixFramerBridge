import *  as React from 'react'
import { Button, PropTypes, Theme, withStyles } from "@material-ui/core";
import { ControlType, PropertyControls } from "framer"

const ColorButton = withStyles(() => ({
    root: {
    width: "100%",
      height: "100%"
    },
  }))(Button);

export interface IFelixMainButtonProps {
    color: PropTypes.Color,
    disabled: boolean,
    label: string
}

export class FelixMainButton extends React.Component<IFelixMainButtonProps> {
 render() {
    return (
    <ColorButton color={this.props.color ? this.props.color : "primary"} variant="contained" disabled={this.props.disabled}>{this.props.label}</ColorButton>
    );
  }
  static defaultProps: IFelixMainButtonProps = {
    color: "secondary",
    disabled: false,
    label: "Felix Button"
  }

   static propertyControls: PropertyControls<IFelixMainButtonProps> = {
    color: {
      type: ControlType.Enum,
      options: ['inherit' ,'primary' , 'secondary' , 'default'],
      optionTitles: ['inherit' ,'primary' , 'secondary' , 'default']
    },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    label: { type: ControlType.String, title: "Felix" },
  }
}

