import React, { useState } from "react";
// import styles from "../../irisPCIForm.module.scss";
import styles from "../irisPCIForm.module.scss";
import Grid from "@material-ui/core/Grid/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import MenuItem from "@material-ui/core/MenuItem";
import Divider from "../../../UI/divider";

const trafficDirections = [
  "N / A",
  "a: BOTH DIRECTIONS",
  "N: NORTH BOUND",
  "S: SOUTH BOUND",
  "E: EAST BOUND",
  "W: WEST BOUND",
];

const facilities = [
  "N / A",
  "A: ALLIANES",
  "C: COLLECTOR",
  "E: EXPRESS",
  "O: OTHERS (Additional Lanes)",
];

const classes = [
  "N / A",
  "F: FREEWAY",
  "A: ARTERIAL",
  "C: COLLECTOR",
  "L: LOCAL",
  "S: SECONDARY",
];
const rowStyle = {
  // padding: "0 2rem 0.5rem",
};

const INT_TESTER = new RegExp(/^-?\d*$/);
const DECIMAL_TESTER = new RegExp(/^-?\d*[.,]?\d{0,2}$/);
export default function GeneralInfo() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const [LHRSBegin, setLHRSBegin] = useState("");
  const [LHRSOffset, setLHRSOffset] = useState("");
  const [sectionLength, setSectionLength] = useState("");
  const [district, setDistrict] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [PCR, setPCR] = useState("");
  const [RCR, setRCR] = useState("");
  const [traficDirection, setTraficDirection] = useState(trafficDirections[0]);
  const [highway, setHighway] = useState("");

  const [contractNumber, setContractNumber] = useState("");
  const [WPNumber, setWPNumber] = useState("");
  const [facility, setFacility] = useState(facilities[0]);
  const [selectedClass, setSelectedClass] = useState(classes[0]);

  const handleSelectedValue = (event, setter) => {
    const value = event.target.value;
    console.log("handleSelectedValue", value);
    setter(value);
  };

  const handleTextFieldChanged = (event, setter) => {
    const value = event.target.value;
    console.log("handleTextFieldChanged", value);
    setter(value);
  };

  const handleNumberChanged = (event, oldValue, tester, setter) => {
    const updatedOldValue = oldValue || "";
    const value = event.target.value;
    debugger;
    const result = tester.test(value);
    debugger;
    setter(result ? value : updatedOldValue);
  };

  // const handleTextFieldChanged = (event, setter, type) => {
  //   const value = event.target.value;
  //   const oldValue = LHRS.begin || "";
  //   const result = DECIMAL_TESTER.test(value);
  //   debugger;
  //   setLHRS({
  //     begin: result === false ? oldValue : value,
  //     offset: LHRS.offset,
  //   });
  // };

  return (
    <Grid container style={{ padding: "1rem" }}>
      {/* <Grid item container justify="space-between" style={rowStyle} spacing={2}>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel>From</InputLabel>
            <Input
              id="locationFrom"
              value={startLocation}
              onChange={(event) => setStartLocation(event.target.value)}
            />
          </FormControl>
          <Divider height={1} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Input
              id="locationTo"
              aria-describedby="component-helper-text"
              onChange={(event) => setEndLocation(event.target.value)}
            />
          </FormControl>
          <Divider height={1} />
        </Grid>
      </Grid>
       */}
      <Grid item container style={rowStyle} justify="space-between">
        <Grid item container justify="space-between" sm={12} spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>LHRS Begins</InputLabel>
              <Input
                id="LHRSBeginTextField"
                aria-describedby="LHRS-begin-input"
                inputProps={{
                  "aria-label": "weight",
                }}
                value={LHRSBegin}
              />
            </FormControl>
            <Divider height={1} />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>LHRS Offset</InputLabel>
              <Input
                id="LHRSOffsetTextField"
                endAdornment={
                  <InputAdornment position="end">km</InputAdornment>
                }
                aria-describedby="LHRS-Offset-input"
              />
            </FormControl>
            <Divider height={1} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          sm={12}
          justify="space-between"
          spacing={2}
          className={styles.formRow}
        >
          <Grid item md={5} xs={6}>
            <FormControl fullWidth>
              <InputLabel>Section Length</InputLabel>
              <Input
                id="sectionLengthTextInput"
                endAdornment={
                  <InputAdornment position="end">km</InputAdornment>
                }
                aria-describedby="section-length-input"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
            <Divider height={1} />
          </Grid>
          <Grid item md={3} xs={6}>
            <FormControl fullWidth>
              <InputLabel>District</InputLabel>
              <Input
                id="districtTextField"
                aria-describedby="district-input"
                value={district}
                onChange={(event) =>
                  handleNumberChanged(event, district, INT_TESTER, setDistrict)
                }
              />
            </FormControl>
            <Divider height={1} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={rowStyle}
        alignItems="center"
        justify="space-between"
      >
        <Grid item container justify="space-between" md={6}>
          {/* <Grid item xs={3}>
            <input
              style={{ fontSize: "1.25rem" }}
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
              onChange={(value) => handleSelectedValue(value, setSelectedDate)}
            />
          </Grid> */}
          <Grid item xs={6}>
            <Grid item container alignItems="center">
              <Grid item xs={10}>
                <FormControl fullWidth>
                  <InputLabel>PCR</InputLabel>
                  <Input
                    id="locationFrom"
                    value={PCR}
                    onChange={(event) =>
                      handleNumberChanged(event, PCR, INT_TESTER, setPCR)
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid item container alignItems="center">
              <Grid item xs={10}>
                <FormControl fullWidth>
                  <InputLabel>RCR</InputLabel>
                  <Input
                    id="locationFrom"
                    value={RCR}
                    onChange={(event) =>
                      handleNumberChanged(event, RCR, DECIMAL_TESTER, setRCR)
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          alignItems="center"
          md={5}
          justify="space-between"
        >
          <Grid item xs={5}>
            <TextField
              fullWidth
              id="trafficDirectionTextField"
              select
              label="Traffic Direction"
              value={traficDirection}
            >
              {trafficDirections.map((direction, index) => (
                <MenuItem key={index} value={direction}>
                  {direction}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={7}>
            <FormControl fullWidth>
              <InputLabel>Highway</InputLabel>
              <Input id="locationFrom" />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        style={rowStyle}
        alignItems="center"
        justify="space-between"
      >
        <Grid item sm={3} xs={6}>
          <FormControl fullWidth>
            <InputLabel>Contract No.</InputLabel>
            <Input
              id="locationFrom"
              value={contractNumber}
              onChange={(event) =>
                handleNumberChanged(
                  event,
                  contractNumber,
                  INT_TESTER,
                  setContractNumber
                )
              }
            />
          </FormControl>
        </Grid>
        <Grid item sm={3} xs={6}>
          <FormControl fullWidth>
            <InputLabel>WP. No</InputLabel>
            <Input
              id="locationFrom"
              value={WPNumber}
              onChange={(event) =>
                handleNumberChanged(event, WPNumber, INT_TESTER, setWPNumber)
              }
            />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <TextField
            fullWidth
            id="facilitySelector"
            select
            label="Facility"
            value={facility}
          >
            {facilities.map((facility, index) => (
              <MenuItem key={index} value={facility}>
                {facility}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sm={3} xs={6}>
          <TextField
            fullWidth
            id="classSelector"
            select
            label="Class"
            value={selectedClass}
            onChange={(event) => handleSelectedValue(event, setSelectedClass)}
          >
            {classes.map((classType, index) => (
              <MenuItem key={index} value={classType}>
                {classType}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Grid>
  );
}
