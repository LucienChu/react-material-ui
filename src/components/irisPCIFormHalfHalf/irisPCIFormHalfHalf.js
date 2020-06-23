import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import IrisCarousel from "./carousel";
import LogoAndTitle from "../irisPciForm/logoAndTitle/logoAndTitle";
import GeneralInfo from "../irisPciForm/generalInfo/generalInfo";
import PavementTBL from "../irisPciForm/tables/pavementTable";
import ShoulderBTL from "../irisPciForm/tables/shoulderTable";
export default function IrisPCIFormHalfHalf() {
  return (
    <div style={{ maxWidth: "1440px", margin: "auto" }}>
      <LogoAndTitle />
      <Grid container justify="center">
        <Grid item>
          <IrisCarousel style={{ height: "100%" }} />
        </Grid>
        <Grid item>
          <GeneralInfo />
        </Grid>
        <Grid item container style={{ padding: "3rem" }}>
          <Grid item xs={12} container justify="center" spacing={2}>
            <Grid item md={6} sm={10}>
              <PavementTBL />
            </Grid>
            <Grid item container direction="column" md={6} sm={10}>
              <Grid item>
                <ShoulderBTL />
              </Grid>
              <Grid item>
                <PavementTBL />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
