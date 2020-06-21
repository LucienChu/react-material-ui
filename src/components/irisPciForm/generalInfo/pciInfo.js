import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const renderTextField = (id, label, onChangeFunction, variant) => {
  return (
    <TextField
      style={{ margin: "1rem 0" }}
      fullWidth
      id={id}
      label={label}
      variant={variant}
      onChange={onChangeFunction}
    />
  );
};

export const PCIInfo = () => {
  return (
    <Grid container justify="center">
      {/* first row */}
      <Grid container justify="center" spacing={3}>
        <Grid item xs={11}>
          {renderTextField("startFrom", "From", () => console.log("changed"))}
        </Grid>
        <Grid item xs={11}>
          {renderTextField("endTo", "To")}
        </Grid>
      </Grid>

      {/* second row */}
      <Grid container justify="center">
        <Grid item container justify="space-between" sm={8} xs={11}>
          <Grid item sm={3} xs={12}>
            {renderTextField(
              "LHRSBeginTextField",
              "LHRS Begin",
              null,
              "outlined"
            )}
          </Grid>
          <Grid item sm={3} xs={12}>
            {renderTextField(
              "LHRSOffsetTextField",
              "LHRS Offset",
              null,
              "outlined"
            )}
          </Grid>
          <Grid item sm={3} xs={12}>
            {renderTextField(
              "sectionLengthTextField",
              "Section Length",
              null,
              "outlined"
            )}
          </Grid>
        </Grid>
        <Grid item container justify="flex-end" sm={3} xs={11}>
          <Grid item sm={6} xs={12}>
            {renderTextField("districtTextField", "District", null, "outlined")}
          </Grid>
        </Grid>
      </Grid>

      {/* third row */}
      <Grid container justify="center">
        <Grid item container justify="space-between" xs={11}>
          <Grid item sm={6} xs={12}>
            Survey Date
          </Grid>
          <Grid item container justify="space-between" sm={6} xs={12}>
            <Grid item xs={5}>
              {renderTextField("PCRTextField", "PCR", null, "outlined")}
            </Grid>
            <Grid item xs={5}>
              {renderTextField("RCRTextField", "RCR", null, "outlined")}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify="flex-end" xs={11}>
          <Grid item xs={12}>
            <Grid item container justify="space-between">
              <Grid item xs={6}>
                {renderTextField(
                  "trafficDirectionTextField",
                  "Traffic direction",
                  null
                )}
              </Grid>
              <Grid item xs={5}>
                {renderTextField("highwayTextField", "Highway", null)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* fourth row */}
      <Grid container justify="center">
        <Grid item container justify="space-between" xs={11}>
          <Grid item sm={2} xs={12}>
            {renderTextField("contractNumberTextField", "Contract No.", null)}
          </Grid>
          <Grid item sm={2} xs={12}>
            {renderTextField("WPNumberTextField", "WP No.", null)}
          </Grid>
          <Grid item sm={2} xs={12}>
            {renderTextField("facilitySelector", "Facility", null)}
          </Grid>
          <Grid item sm={2} xs={12}>
            {renderTextField("classesSelector", "Classes", null)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
