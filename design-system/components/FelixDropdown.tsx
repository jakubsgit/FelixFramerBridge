import * as React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "./Dropdown.scss";
import cx from "classnames"
import { arrowDown } from "../icons/arrowDown";
import "../../node_modules/bootstrap/scss/bootstrap.scss";

export interface Props {
  onClick: () => void;
  headerText: string;
  toggleText: string;
  optionsArray: Array<string>;
}

const FelixDropdown = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [toggleText, setToggleText] = React.useState(
    props.toggleText !== undefined ? props.toggleText : "Default toggle"
  );

  return (
    <div className={cx("input-wrapper", "container")}>
      <p className={cx("font-weight-bold", "row")}>
        {props.headerText !== undefined ? props.headerText : "Default header"}
      </p>
      <div className={cx("row", "role-button")}>
        <Dropdown
          {...props}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
          className={"dropdown-button"}
        >
          <DropdownToggle caret={false} className={"drop-toggle"}>
            <span className={cx("dropdown-placeholder")}>{toggleText}</span>
            {arrowDown()}
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu">
            {props.optionsArray !== undefined ? (
              props.optionsArray.map((op) => (
                <DropdownItem
                  className={"dropdown-item"}
                  onClick={() => setToggleText(op)}
                >
                  <span>{op}</span>
                </DropdownItem>
              ))
            ) : (
              <DropdownItem
                className={"dropdown-item"}
                onClick={() => setToggleText("Jeden")}
              >
                <span>Jeden</span>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default FelixDropdown;