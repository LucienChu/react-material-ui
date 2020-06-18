import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "../pciTable.module.scss";

export default function ShoulderTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} align="center">
              Shoulders
            </TableCell>
            <TableCell colSpan={4} align="center">
              SEVERITY OF DISTRESS
            </TableCell>
            <TableCell colSpan={4} align="center">
              <p>DENSITY OF DISTRESS</p>
              <p>Extent of Occurrence, %</p>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell rowSpan={4}>DOMINANT TYPE</TableCell>
            <TableCell rowSpan={4}>
              <span className={styles.verticalTitle}>ONE</span>
            </TableCell>
            <TableCell rowSpan={4}>DISTRESS</TableCell>
          </TableRow>

          {/* left / right row */}
          <TableRow>
            <TableCell colSpan={2} align="center">
              RIGHT
            </TableCell>
            <TableCell colSpan={2} align="center">
              LEFT
            </TableCell>
            <TableCell colSpan={2} align="center">
              RIGHT
            </TableCell>
            <TableCell colSpan={2} align="center">
              LEFT
            </TableCell>
          </TableRow>

          {/* mod sever row */}
          <TableRow>
            <TableCell align="center">Mod</TableCell>
            <TableCell align="center">Severe</TableCell>
            <TableCell align="center">Mod</TableCell>
            <TableCell align="center">Severe</TableCell>
            <TableCell align="center">Mod</TableCell>
            <TableCell align="center">Severe</TableCell>
            <TableCell align="center">Mod</TableCell>
            <TableCell align="center">Severe</TableCell>
          </TableRow>

          {/* 1 and 2 row */}
          <TableRow>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={2}>PAVED FULL</TableCell>
            <TableCell rowSpan={2}></TableCell>
            <TableCell>Cracking</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}>Pavement Edge/ Curb Separation</TableCell>
          </TableRow>

          <TableRow>
            <TableCell rowSpan={2}>PAVED PARTIAL</TableCell>
            <TableCell rowSpan={2}></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Distortion</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell rowSpan={3}>SURFACE TREATED</TableCell>
            <TableCell rowSpan={3}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Breakup/Separation</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Edge Break</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>PRIMED</TableCell>
            <TableCell></TableCell>
            <TableCell>Breakup</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GRAVEL</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
