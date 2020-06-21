import React from "react";
import logo from "../ministry_of_transportation.png";
import styles from "./logoAndTitle.module.scss";
import Grid from "@material-ui/core/Grid/Grid";
export default function LogoAndTitle() {
  return (
    <Grid container alignItems="center">
      <Grid item container alignItems="center" xs={3}>
        <img src={logo} />
      </Grid>
      <Grid item xs={9}>
        <h1 className={styles.title}>
          FLEXIBLE PAVEMENT CONDITION EVALUATION FORM
        </h1>
      </Grid>
    </Grid>
  );
}
