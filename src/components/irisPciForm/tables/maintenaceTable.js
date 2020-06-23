import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "../../../UI/divider";
import { InputLabel } from "@material-ui/core";
const PAVEMENT_TITLES = [
  "Manual Patching (PAVEMENT)",
  "Machine Patching (PAVEMENT)",
  "Spray Patching (PAVEMENT)",
  "Rout and Seal Cracks (PAVEMENT)",
  "Chip Seal (PAVEMENT)",
  "Manual Patching (SHOULDERS)",
  "Machine Patching (SHOULDERS)",
  "Rout and Seal Cracks (SHOULDERS)",
  "Chip Seal (SHOULDERS)",
];
const EXTENT_OF_OCCURRENCE = {
  0: "",
  1: "< 10 %",
  2: "10 % - 20 %",
  3: "20 % - 50 %",
  4: "50 % - 80 %",
  5: "> 80 %",
};
export default function MaintenaceTBL() {
  return (
    <div>
      <TableContainer component="div">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ padding: "0.5rem 0" }}>Maintenance</TableCell>
              <TableCell style={{ padding: "0.5rem 0" }}>
                Extent of Occurrence, %
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PAVEMENT_TITLES.map((title, index) => (
              <TableRow key={index}>
                <TableCell style={{ padding: "0.5rem 0" }}>{title}</TableCell>
                <TableCell style={{ padding: "0.5rem 0" }}>
                  <FormControl fullWidth>
                    <Select
                      native
                      id={`severity-selector-${index}`}
                      // onChange={(event) =>
                      //   handleSelectorValueChange(event, title, SEVERITY)
                      // }
                    >
                      {Object.keys(EXTENT_OF_OCCURRENCE).map((k) => (
                        <option key={k} value={k}>
                          {EXTENT_OF_OCCURRENCE[k]}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider height={2} />
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
