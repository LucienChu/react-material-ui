import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import { PCIInfo } from "../generalInfo/pciInfo";
import PavementTBL from "../tables/pavementTable";
import logo from "../ministry_of_transportation.png";
import LogoAndTitle from "../logoAndTitle/logoAndTitle";
const Divider = (props) => {
  const { v, h } = props;
  return <div style={{ width: "100%", margin: `${v}rem ${h}rem` }}></div>;
};

export default function ImageInfo() {
  return (
    <div
    // style={{
    //   maxWidth: "1440px",
    //   margin: "auto",
    // }}
    >
      <div style={{ background: "#000000", padding: "1rem 0" }}>
        <Grid
          container
          justify="center"
          style={{ maxWidth: "1440px", margin: "auto" }}
        >
          <Grid item container sm={10} xs={12}>
            <LogoAndTitle />
          </Grid>
        </Grid>
      </div>
      <Divider v={1} h={3} />

      <div
        style={{
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12} container justify="center">
            <Grid item md={5} sm={10}>
              <img src="https://via.placeholder.com/500" />
            </Grid>
            <Grid item container md={5} sm={10}>
              <PCIInfo />
            </Grid>
          </Grid>
          <Divider v={1} h={1} />
          <Grid item xs={12} container justify="center" spacing={4}>
            <Grid item md={5} sm={10}>
              <PavementTBL />
            </Grid>
            <Grid item container direction="column" md={5} sm={10}>
              <Grid item>
                <PavementTBL />
              </Grid>
              <Grid item>
                <PavementTBL />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
