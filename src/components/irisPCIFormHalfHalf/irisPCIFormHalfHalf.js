import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import IrisCarousel from "./carousel";
import LogoAndTitle from "../irisPciForm/logoAndTitle/logoAndTitle";
import GeneralInfo from "../irisPciForm/generalInfo/generalInfo";
export default function IrisPCIFormHalfHalf() {
  return (
    <div style={{ maxWidth: "1440px", margin: "auto" }}>
      {/* <LogoAndTitle /> */}
      <Grid container justify="center">
        <Grid item>
          <IrisCarousel style={{ height: "100%", marginBottm: "1rem" }} />
        </Grid>
        <Grid item>
          <GeneralInfo />
        </Grid>
      </Grid>
    </div>
  );
}
