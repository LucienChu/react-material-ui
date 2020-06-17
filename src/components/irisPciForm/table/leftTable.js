import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./leftTable.module.scss";
import { Tab } from "@material-ui/core";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function LeftTable() {
  return (
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
            <TableCell>
              <p className={styles.verticalTitle}>Very Sight</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Sight</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Moderate</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Severe</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Very Severe</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Few</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Intermittent</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Frequent</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Extensive</p>
            </TableCell>
            <TableCell>
              <p className={styles.verticalTitle}>Throughout</p>
            </TableCell>
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
