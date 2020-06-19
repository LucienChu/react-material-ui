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
  padding: "2rem 1rem",
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
    <div>
      <Grid
        spacing={2}
        item
        container
        justify="center"
        alignItems="center"
        style={rowStyle}
      >
        <Grid item sm={1} xs={2}>
          <p className={styles.title}>Locatiion</p>
        </Grid>
        <Grid item sm={11} xs={10}>
          <Grid item container justify="space-between" spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>From</InputLabel>
                <Input
                  id="locationFrom"
                  value={startLocation}
                  onChange={(event) => setStartLocation(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>To</InputLabel>
                <Input
                  id="locationTo"
                  aria-describedby="component-helper-text"
                  onChange={(event) => setEndLocation(event.target.value)}
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
        style={rowStyle}
        justify="space-between"
        className={styles.formRow}
      >
        <Grid item container md={4} sm={6} xs={12}>
          <Grid item xs={2}>
            <p>LHRS</p>
          </Grid>
          <Grid item xs={10}>
            <Grid item container justify="space-around">
              <Grid item xs={5}>
                <FormControl>
                  <Input
                    id="LHRSBeginTextField"
                    aria-describedby="LHRS-begin-input"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                    value={LHRSBegin}
                  />
                  <FormHelperText id="LHRS-begin-helper-text">
                    BEGINS
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <FormControl>
                  <Input
                    id="LHRSOffsetTextField"
                    endAdornment={
                      <InputAdornment position="end">km</InputAdornment>
                    }
                    aria-describedby="LHRS-Offset-input"
                  />
                  <FormHelperText id="LHRS-Offset-helper-text">
                    OFFSET
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container md={4} sm={6} xs={12}>
          <Grid item xs={4}>
            <p>Section length</p>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
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
              <FormHelperText id="section-length-input-helper-text">
                LENGTH
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container md={4} xs={12} justify="flex-end">
          <Grid item md={2} xs={4}>
            <p>District</p>
          </Grid>
          <Grid item md={6} xs={8}>
            <FormControl fullWidth>
              <Input
                id="districtTextField"
                aria-describedby="district-input"
                value={district}
                onChange={(event) =>
                  handleNumberChanged(event, district, INT_TESTER, setDistrict)
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={2}
        style={rowStyle}
        alignItems="center"
        justify="space-between"
      >
        <Grid item container md={3} alignItems="flex-end">
          <Grid item xs={5}>
            Survey Date
          </Grid>
          <Grid item xs={7}>
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
          </Grid>
        </Grid>
        <Grid item container md={5} spacing={3}>
          <Grid item xs={6}>
            <Grid item container alignItems="center">
              <Grid item xs={2}>
                PCR
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth>
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
              <Grid item xs={2}>
                RCR
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth>
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
        <Grid item container alignItems="center" md={4} spacing={3}>
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
            <Grid item container alignItems="center">
              <Grid item md={5} sm={3} xs={4}>
                Heightway
              </Grid>
              <Grid item md={7} sm={9} xs={8}>
                <FormControl fullWidth>
                  <Input id="locationFrom" />
                </FormControl>
              </Grid>
            </Grid>
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
        <Grid item md={4} xs={6}>
          <Grid item container alignItems="flex-end">
            <Grid item xs={4}>
              Contract No.
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
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
          </Grid>
        </Grid>

        <Grid item md={4} xs={6}>
          <Grid item container alignItems="flex-end">
            <Grid item xs={3}>
              WP No.
            </Grid>
            <Grid item xs={9}>
              <FormControl fullWidth>
                <Input
                  id="locationFrom"
                  value={WPNumber}
                  onChange={(event) =>
                    handleNumberChanged(
                      event,
                      WPNumber,
                      INT_TESTER,
                      setWPNumber
                    )
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} xs={12}>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="classSelector"
                select
                label="Class"
                value={selectedClass}
                onChange={(event) =>
                  handleSelectedValue(event, setSelectedClass)
                }
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
      </Grid>
    </div>
  );
}
