import * as React from "react";
import styled from "styled-components";
import * as System from "../../design-system/components/FelixAddButton";
import { ControlType, PropertyControls } from "framer";

export interface FelixAddButtonProps {}
interface State {}

export class FelixAddButton extends React.Component<
  FelixAddButtonProps,
  State
> {
  state = {};

  render() {
    return (
      <>
        <System.FelixAddButton />
      </>
    );
  }

  // static defaultProps: System.FelixAddButtonProps = {

  // };

  // static propertyControls: PropertyControls<System.FelixAddButtonProps> = {

  // };
}
