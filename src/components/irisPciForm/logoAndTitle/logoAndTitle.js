import React from "react";
import logo from "../ministry_of_transportation.png";
import styles from "./logoAndTitle.module.scss";
import Grid from "@material-ui/core/Grid/Grid";
export default function LogoAndTitle() {
  return (
    <Grid container alignItems="center" style={{ margin: "0.725rem" }}>
      <Grid item container alignItems="center" md={2} sm={3} xs={4}>
        <img src={logo} />
      </Grid>
      <Grid item sm={9} xs={8}>
        <h1 className={styles.title}>
          FLEXIBLE PAVEMENT CONDITION EVALUATION FORM
        </h1>
      </Grid>
    </Grid>
  );
}
