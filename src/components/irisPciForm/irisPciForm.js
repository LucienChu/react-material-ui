import React from "react";
import logo from "./ministry_of_transportation.png";
import Grid from "@material-ui/core/Grid/Grid";
import styles from "./irisPCIForm.module.scss";

//FORM
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
import PavementTable from "./table/pavementTable/pavementTable";
import ShoulderTable from "./table/shoulderTable/shouldersTable";
import TreatmentTable from "./table/treatmentTable/treatmentTable";

const rowStyle = {
  padding: "2rem 1rem",
};

const trafficDirections = [
  "a: BOTH DIRECTIONS",
  "N: NORTH BOUND",
  "S: SOUTH BOUND",
  "E: EAST BOUND",
  "W: WEST BOUND",
];

const facilities = [
  "A: ALLIANES",
  "C: COLLECTOR",
  "E: EXPRESS",
  "O: OTHERS (Additional Lanes)",
];

const classes = [
  "F: FREEWAY",
  "A: ARTERIAL",
  "C: COLLECTOR",
  "L: LOCAL",
  "S: SECONDARY",
];
export default function IrisPciForm() {
  return (
    <div>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        className={styles.formWrapper}
      >
        {/* <TreatmentTable /> */}
        <ShoulderTable />
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
                  <Input id="locationFrom" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>To</InputLabel>
                  <Input
                    id="locationTo"
                    aria-describedby="component-helper-text"
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
                      id="standard-adornment-weight"
                      aria-describedby="standard-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                    <FormHelperText id="standard-weight-helper-text">
                      BEGINS
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={5}>
                  <FormControl>
                    <Input
                      id="standard-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">km</InputAdornment>
                      }
                      aria-describedby="standard-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                    <FormHelperText id="standard-weight-helper-text">
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
                  id="standard-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">km</InputAdornment>
                  }
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <FormHelperText id="standard-weight-helper-text">
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
                  id="standard-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">km</InputAdornment>
                  }
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <FormHelperText id="standard-weight-helper-text">
                  LENGTH
                </FormHelperText>
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
                onChange={() => console.log("input onChange")}
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
                    <Input id="locationFrom" />
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
                    <Input id="locationFrom" />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" md={4} spacing={3}>
            <Grid item xs={5}>
              <TextField
                fullWidth
                id="standard-select-currency"
                select
                label="Traffic Direction"
                helperText="Please select your currency"
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
                  <Input id="locationFrom" />
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
                  <Input id="locationFrom" />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4} xs={12}>
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="standard-select-currency"
                  select
                  label="Facility"
                  helperText="Please select your currency"
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
                  id="standard-select-currency"
                  select
                  label="Class"
                  helperText="Please select your currency"
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

        <Grid container style={rowStyle}>
          {/* <PavementTable /> */}
        </Grid>
        <Grid container style={rowStyle}>
          <TextField
            id="distressCommentsTextField"
            fullWidth
            rows={2}
            rowsMax={5}
            label="Distress Comments (items not covered above)"
            color="secondary"
            multiline
          />
        </Grid>
      </Grid>
    </div>
  );
}
