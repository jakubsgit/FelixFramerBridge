import { Grid } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { clothesIcon } from "../icons/clothesIcon";
import ActionButton from "./ActionButton";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { addIcon } from "../icons/addIcon";

export interface Props {}
interface State {
  isActionsOpened: boolean;
  selectedDate: string;
}

function valuetext(value) {
  return `${value}°C`;
}

const FelixSlider = withStyles({
  root: {
    color: "#EFEFEF",
    height: 8,
  },
  thumb: {
    height: 10,
    width: 10,
    backgroundColor: "#00D2AA",
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
    },
  },
  valueLabel: {
    display: "none",
  },
  mark: {
    top: -30,
  },
})(Slider);

export class FelixAddButton extends React.Component<Props, State> {
  state = {
    isActionsOpened: false,
    selectedDate: "2014-08-18T21:11:54",
  };

  onActionsToggle = () => {
    this.setState({ isActionsOpened: !this.state.isActionsOpened });
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    const tempMarks = [
      {
        value: 30,
        label: "30°C",
      },
      {
        value: 50,
        label: "50°C",
      },
      {
        value: 70,
        label: "70°C",
      },
      {
        value: 90,
        label: "90°C",
      },
    ];
    const rotationMarks = [
      {
        value: 600,
        label: "600",
      },
      {
        value: 800,
        label: "800",
      },
      {
        value: 1000,
        label: "1000",
      },
      {
        value: 1200,
        label: "1200",
      },
    ];
    console.log(this.state.isActionsOpened);
    return (
      <>
        <StyledButtonContainer
          isActionsOpened={this.state.isActionsOpened}
          style={{ cursor: this.state.isActionsOpened ? "pointer" : "" }}
          onClick={() =>
            this.state.isActionsOpened ? this.onActionsToggle() : {}
          }
        >
          <ButtonContainer isActionsOpened={this.state.isActionsOpened}>
            <IconButton
              aria-label="add"
              onClick={() => this.onActionsToggle()}
              size="medium"
              style={{
                width: 40,
                height: 40,
                background: "#00D2AA",
                zIndex: 10000,
              }}
            >
              {addIcon(30)}
            </IconButton>
          </ButtonContainer>
        </StyledButtonContainer>
        <Grid container direction="column">
          <Grid item sm={10}>
            <ActionsContainer isActionsOpened={this.state.isActionsOpened}>
              <Grid
                container
                direction="column"
                alignItems="stretch"
                justify="space-between"
              >
                <Grid item sm={1}>
                  <TitleContainer>
                    <h1>Nowe pranie</h1>
                  </TitleContainer>
                </Grid>
                <Grid item sm={3}>
                  <DescriptionText>Tryb:</DescriptionText>
                  <ProgramsContainer>
                    <IconBox>
                      {clothesIcon("wash", "#FF846D", true)}
                      <p>Sportowe</p>
                    </IconBox>
                    <IconBox>
                      {clothesIcon("wash", "#FF846D", true)}
                      <p>Ręczne</p>
                    </IconBox>
                    <IconBox>
                      {clothesIcon("wash", "#FF846D", true)}
                      <p>Bawełna</p>
                    </IconBox>
                    <IconBox>
                      {clothesIcon("wash", "#FF846D", true)}
                      <p>Jedwab</p>
                    </IconBox>
                    <IconBox>
                      {clothesIcon("wash", "#FF846D", true)}
                      <p>ECO</p>
                    </IconBox>
                  </ProgramsContainer>
                </Grid>
                <Grid item sm={1}>
                  <DescriptionText>Temperatura:</DescriptionText>
                  <SliderContainer>
                    <FelixSlider
                      defaultValue={30}
                      getAriaValueText={valuetext}
                      aria-labelledby="non-linear-slider"
                      valueLabelDisplay="auto"
                      step={20}
                      marks={tempMarks}
                      min={30}
                      max={90}
                    />
                  </SliderContainer>
                </Grid>
                <Grid item sm={1}>
                  <DescriptionText>Obroty:</DescriptionText>
                  <SliderContainer>
                    <FelixSlider
                      defaultValue={1000}
                      getAriaValueText={valuetext}
                      aria-labelledby="non-linear-slider"
                      valueLabelDisplay="auto"
                      step={200}
                      marks={rotationMarks}
                      min={600}
                      max={1200}
                    />
                  </SliderContainer>
                </Grid>
                <Grid item sm={1}>
                  <DescriptionText>Czas trwania:</DescriptionText>
                  <SliderContainer>
                    <FelixSlider
                      defaultValue={1000}
                      getAriaValueText={valuetext}
                      aria-labelledby="non-linear-slider"
                      valueLabelDisplay="auto"
                      step={200}
                      marks={rotationMarks}
                      min={600}
                      max={1200}
                    />
                  </SliderContainer>
                </Grid>
                <Grid item sm={2}>
                  <DescriptionText>Data i godzina rozpoczęcia:</DescriptionText>
                  {/* <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={new Date('2020-08-18T21:11:54')}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  /> */}
                </Grid>
                <Grid item sm={4}>
                  <ButtonsContainer>
                    <ActionButton
                      height={46}
                      buttonText="Dodaj"
                      onClick={() =>
                        this.state.isActionsOpened ? this.onActionsToggle() : {}
                      }
                    />
                    <ActionButton
                      active
                      height={80}
                      buttonText="Anuluj"
                      onClick={() =>
                        this.state.isActionsOpened ? this.onActionsToggle() : {}
                      }
                    />
                  </ButtonsContainer>
                </Grid>
              </Grid>
            </ActionsContainer>
          </Grid>
        </Grid>
      </>
    );
  }
}

const StyledButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => (props.isActionsOpened ? "grey" : "none")};
  opacity: ${(props) => (props.isActionsOpened ? "0.5" : "1")};
  transition: all 500ms ease;
  z-index: ${(props) => (props.isActionsOpened ? "100000" : "-100000")};
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  z-index: 10000;
`;

const TitleContainer = styled.div`
  padding: 11px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 12px;
  line-height: 17px;
  margin-left: 10px;
  margin-top: 10px;
  color: #00d2aa;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const DescriptionText = styled.p`
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  color: #8f8f8f;
  padding-left: 21px;
`;

const ActionsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: black;
  z-index: ${(props) => (props.isActionsOpened ? "10000" : "-10000")};
  height: 100%;
  width: 100%;
  transform: translateY(
    ${(props) => (props.isActionsOpened ? "100px" : "120vh")}
  );
  transition: all 500ms ease;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(154, 154, 154, 0.5);
  border-radius: 32.5px 32.5px 0px 0px;
`;

const ProgramsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 42px;
`;

const IconBox = styled.div`
  cursor: pointer;
  padding: 0px;
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
