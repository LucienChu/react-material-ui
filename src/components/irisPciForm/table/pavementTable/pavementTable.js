import React, { useState } from "react";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "../pciTable.module.scss";
import {
  SEVERITY_AND_DENSITY_OF_DISTRESS,
  DISTRESS,
} from "../tableConstant/tableConstants";

import Grid from "@material-ui/core/Grid/Grid";

import TextField from "@material-ui/core/TextField";

const radioBtnLabels = [1, 2, 3, 4, 5];
export default function PavementTable() {
  const [
    surfaceDefectsRavellingSeverity,
    setSurfaceDefectsRavellingSeverity,
  ] = useState(0);
  const [
    surfaceDefectsFlushingSeverity,
    setSurfaceDefectsFlushingSeverity,
  ] = useState(0);
  const [
    surfaceDeformationsRipplingAndShovingSeverity,
    setSurfaceDeformationsRipplingAndShovingSeverity,
  ] = useState(0);
  const [
    surfaceDeformationsWheelTrackRuttingSeverity,
    setSurfaceDeformationsWheelTrackRuttingSeverity,
  ] = useState(0);
  const [
    surfaceDeformationsDistortionSeverity,
    setSurfaceDeformationsDistortionSeverity,
  ] = useState(0);
  const [
    longitudinalWheelTrackSingleAndMultiplSeverity,
    setlongitudinalWheelTrackSingleAndMultiplSeverity,
  ] = useState(0);
  const [
    longitudinalWheelTrackAlligatorSeverity,
    setLongitudinalWheelTrackAlligatorSeverity,
  ] = useState(0);
  const [
    centerLineSingleAndMultipleSeverity,
    setcenterLineSingleAndMultipleSeverity,
  ] = useState(0);
  const [
    centerLineAlligatorSeverity,
    setCenterLineAlligatorSeverity,
  ] = useState(0);
  const [
    pavementEdgeSingleAndMultipleSeverity,
    setPavementEdgeSingleAndMultipleSeverity,
  ] = useState(0);
  const [
    pavementEdgeAlligatorSeverity,
    setPavementEdgeAlligatorSeverity,
  ] = useState(0);
  const [
    transverseHalfFullAndMultipleSeverity,
    setTransverseHalfFullAndMultipleSeverity,
  ] = useState(0);
  const [
    transverseAlligatorSeverity,
    setTransverseAlligatorSeverity,
  ] = useState(0);
  const [
    longitudinalMeanderAndMidlaneSeverity,
    setLongitudinalMeanderAndMidlaneSeverity,
  ] = useState(0);
  const [randomSeverity, setRandomSeverity] = useState(0);

  const [
    surfaceDefectsRavellingDensity,
    setSurfaceDefectsRavellingDensity,
  ] = useState(0);
  const [
    surfaceDefectsFlushingDensity,
    setSurfaceDefectsFlushingDensity,
  ] = useState(0);
  const [
    surfaceDeformationsRipplingAndShovingDensity,
    setSurfaceDeformationsRipplingAndShovingDensity,
  ] = useState(0);
  const [
    surfaceDeformationsWheelTrackRuttingDensity,
    setSurfaceDeformationsWheelTrackRuttingDensity,
  ] = useState(0);
  const [
    surfaceDeformationsDistortionDensity,
    setSurfaceDeformationsDistortionDensity,
  ] = useState(0);
  const [
    longitudinalWheelTrackSingleAndMultiplDensity,
    setlongitudinalWheelTrackSingleAndMultiplDensity,
  ] = useState(0);
  const [
    longitudinalWheelTrackAlligatorDensity,
    setLongitudinalWheelTrackAlligatorDensity,
  ] = useState(0);
  const [
    centerLineSingleAndMultipleDensity,
    setcenterLineSingleAndMultipleDensity,
  ] = useState(0);
  const [centerLineAlligatorDensity, setCenterLineAlligatorDensity] = useState(
    0
  );
  const [
    pavementEdgeSingleAndMultipleDensity,
    setPavementEdgeSingleAndMultipleDensity,
  ] = useState(0);
  const [
    pavementEdgeAlligatorDensity,
    setPavementEdgeAlligatorDensity,
  ] = useState(0);
  const [
    transverseHalfFullAndMultipleDensity,
    setTransverseHalfFullAndMultipleDensity,
  ] = useState(0);
  const [transverseAlligatorDensity, setTransverseAlligatorDensity] = useState(
    0
  );
  const [
    longitudinalMeanderAndMidlaneDensity,
    setLongitudinalMeanderAndMidlaneDensity,
  ] = useState(0);
  const [randomDensity, setRandomDensity] = useState(0);

  const renderRadioButtons = (treatmentType, targetValue, setter) => {
    return radioBtnLabels.map((element, id) => (
      <TableCell align="center" key={id}>
        <FormControlLabel
          style={{ margin: 0 }}
          checked={element === targetValue}
          value={element}
          control={<Radio />}
          label=""
          onClick={(event) => {
            // uncheck radio if checked button is clicked
            const value = event.target.value;
            if (Number(value) === targetValue) {
              setter(0);
            }
          }}
          onChange={(event) => {
            const value = event.target.value;
            setter(Number(value));
            // updateTreatmentObject(treatmentType, Number(value));
          }}
        />
      </TableCell>
    ));
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3}></TableCell>
              <TableCell align="center" colSpan={5}>
                Severity of distress
              </TableCell>
              <TableCell align="center" colSpan={5}>
                Density of distress
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}></TableCell>
              {Object.keys(SEVERITY_AND_DENSITY_OF_DISTRESS).map((keyName) => (
                <TableCell key={keyName}>
                  <p className={styles.verticalTitle}>
                    {SEVERITY_AND_DENSITY_OF_DISTRESS[keyName]}
                  </p>
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell colSpan={8}></TableCell>
              <TableCell align="center">&lt;10</TableCell>
              <TableCell align="center">10 - 20</TableCell>
              <TableCell align="center">20 - 50</TableCell>
              <TableCell align="center">50 - 80</TableCell>
              <TableCell align="center">80 - 100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} align="center">
                Pavement
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" rowSpan={2} colSpan={2}>
                SURFACE DEFECTS
              </TableCell>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Raveling & C. Agg. Loss</span>
                  <span>1</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFECTS_RAVELLING_AND_C_AGG_LOSS,
                surfaceDefectsRavellingSeverity,
                setSurfaceDefectsRavellingSeverity
              )}
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFECTS_RAVELLING_AND_C_AGG_LOSS,
                surfaceDefectsRavellingDensity,
                setSurfaceDefectsRavellingDensity
              )}
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Flushing</span>
                  <span>2</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFECTS_FLUSHING,
                surfaceDefectsFlushingSeverity,
                setSurfaceDefectsFlushingSeverity
              )}
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFECTS_FLUSHING,
                surfaceDefectsFlushingDensity,
                setSurfaceDefectsFlushingDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="center" rowSpan={3} colSpan={2}>
                SURFACE DEFORMATIONS
              </TableCell>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Ripping and Shoving</span>
                  <span>3</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFORMATIONS_RIPPLING_AND_SHOVING,
                surfaceDeformationsRipplingAndShovingSeverity,
                setSurfaceDeformationsRipplingAndShovingSeverity
              )}
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFORMATIONS_RIPPLING_AND_SHOVING,
                surfaceDeformationsRipplingAndShovingDensity,
                setSurfaceDeformationsRipplingAndShovingDensity
              )}
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Wheel Track Rutting</span>
                  <span>4</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFORMATIONS_WHEEL_TRACK_RUTTING,
                surfaceDeformationsWheelTrackRuttingSeverity,
                setSurfaceDeformationsWheelTrackRuttingSeverity
              )}
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFORMATIONS_WHEEL_TRACK_RUTTING,
                surfaceDeformationsWheelTrackRuttingDensity,
                setSurfaceDeformationsWheelTrackRuttingDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Distortion</span>
                  <span>5</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFORMATIONS_DISTORTION,
                surfaceDeformationsDistortionSeverity,
                setSurfaceDeformationsDistortionSeverity
              )}
              {renderRadioButtons(
                DISTRESS.SURFACE_DEFORMATIONS_DISTORTION,
                surfaceDeformationsDistortionDensity,
                setSurfaceDeformationsRipplingAndShovingDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="center" rowSpan={10}>
                <p className={styles.verticalTitle}>CRACKING</p>
              </TableCell>
              <TableCell rowSpan={2}>Longitudinal Wheel Track</TableCell>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Single and Multiple</span>
                  <span>6</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.LONGITUDINAL_WHEEL_TRACK_SINGLE_AND_MULTIPLE,
                longitudinalWheelTrackSingleAndMultiplSeverity,
                setlongitudinalWheelTrackSingleAndMultiplSeverity
              )}
              {renderRadioButtons(
                DISTRESS.LONGITUDINAL_WHEEL_TRACK_SINGLE_AND_MULTIPLE,
                longitudinalWheelTrackSingleAndMultiplDensity,
                setlongitudinalWheelTrackSingleAndMultiplDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Alligator</span>
                  <span>7</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.LONGITUDINAL_WHEEL_TRACK_ALLIGATOR,
                longitudinalWheelTrackAlligatorSeverity,
                setLongitudinalWheelTrackAlligatorSeverity
              )}
              {renderRadioButtons(
                DISTRESS.LONGITUDINAL_WHEEL_TRACK_ALLIGATOR,
                longitudinalWheelTrackAlligatorDensity,
                setLongitudinalWheelTrackAlligatorDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell rowSpan={2}>Centre Line</TableCell>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Single and Multiple</span>
                  <span>8</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.CENTER_LINE_SINGLE_AND_MULTIPLE,
                centerLineSingleAndMultipleSeverity,
                setcenterLineSingleAndMultipleSeverity
              )}

              {renderRadioButtons(
                DISTRESS.CENTER_LINE_SINGLE_AND_MULTIPLE,
                centerLineSingleAndMultipleDensity,
                setcenterLineSingleAndMultipleDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Alligator</span>
                  <span>9</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.CENTER_LINE_ALLIGATOR,
                centerLineAlligatorSeverity,
                setCenterLineAlligatorSeverity
              )}

              {renderRadioButtons(
                DISTRESS.CENTER_LINE_ALLIGATOR,
                centerLineAlligatorDensity,
                setCenterLineAlligatorDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell rowSpan={2}>Pavement Edge</TableCell>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Single and Multiple</span>
                  <span>10</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.PAVEMENT_EDGE_SINGLE_AND_MULTIPLE,
                pavementEdgeSingleAndMultipleSeverity,
                setPavementEdgeSingleAndMultipleSeverity
              )}
              {renderRadioButtons(
                DISTRESS.PAVEMENT_EDGE_SINGLE_AND_MULTIPLE,
                pavementEdgeSingleAndMultipleDensity,
                setPavementEdgeSingleAndMultipleDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Alligator</span>
                  <span>11</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.PAVEMENT_EDGE_ALLIGATOR,
                pavementEdgeAlligatorSeverity,
                setPavementEdgeAlligatorSeverity
              )}
              {renderRadioButtons(
                DISTRESS.PAVEMENT_EDGE_ALLIGATOR,
                pavementEdgeAlligatorDensity,
                setPavementEdgeAlligatorDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell rowSpan={2}>Transverse</TableCell>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Half, Full and Multiple</span>
                  <span>12</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.TRANSVERSE_HALF_FULL_AND_MULTIPLE,
                transverseHalfFullAndMultipleSeverity,
                setTransverseHalfFullAndMultipleSeverity
              )}
              {renderRadioButtons(
                DISTRESS.TRANSVERSE_HALF_FULL_AND_MULTIPLE,
                transverseHalfFullAndMultipleDensity,
                setTransverseHalfFullAndMultipleDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="left">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Alligator</span>
                  <span>13</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.TRANSVERSE_ALLIGATOR,
                transverseAlligatorSeverity,
                setTransverseAlligatorSeverity
              )}
              {renderRadioButtons(
                DISTRESS.TRANSVERSE_ALLIGATOR,
                transverseAlligatorDensity,
                setTransverseAlligatorDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="left" colSpan={2}>
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Longitudinal Meander and Midlane</span>
                  <span>14</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.LONGITUDINAL_MEANDER_AND_MIDLANE,
                longitudinalMeanderAndMidlaneSeverity,
                setLongitudinalMeanderAndMidlaneSeverity
              )}
              {renderRadioButtons(
                DISTRESS.LONGITUDINAL_MEANDER_AND_MIDLANE,
                longitudinalMeanderAndMidlaneDensity,
                setLongitudinalMeanderAndMidlaneDensity
              )}
            </TableRow>

            <TableRow>
              <TableCell align="left" colSpan={2}>
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Random</span>
                  <span>15</span>
                </span>
              </TableCell>
              {renderRadioButtons(
                DISTRESS.RANDOM,
                randomSeverity,
                setRandomSeverity
              )}
              {renderRadioButtons(
                DISTRESS.RANDOM,
                randomDensity,
                setRandomDensity
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
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
    </div>
  );
}
