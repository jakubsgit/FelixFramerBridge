import * as React from "react";
import styled from "styled-components";
import * as System from "../../design-system/components/FelixAddButton";

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
}
