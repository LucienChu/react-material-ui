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
import GeneralInfo from "./generalInfo/generalInfo";

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
        <GeneralInfo />
        <TreatmentTable />
        <ShoulderTable />
      </Grid>
    </div>
  );
}
