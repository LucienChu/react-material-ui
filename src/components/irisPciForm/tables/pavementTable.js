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

const PAVEMENT_TITLES = [
  "Ravelling & C. Agg.",
  "Flushing",
  "Rippling and Shoving",
  "Wheel Track Rutting",
  "Distortion",
  "Longitudinal Wheel Track (Single and Multiple",
  "Longitudinal Wheel Track (Alligator)",
  "Centre Line (Single and Multiple)",
  "Centre Line (Alligator)",
  "Pavement Edge (Single and Multiple)",
  "Pavement Edge (Alligator)",
  "Transverse (Half, Full, and Multiple)",
  "Transverse (Alligator)",
  "Longitudinal Meaander and Midlane)",
  "Random",
];

const SEVERITY_OBJECT = {
  0: "",
  1: "Very Slight",
  2: "Slight",
  3: "Moderate",
  4: "Severe",
  5: "Very Severe",
};

const DENSITY_OBJECT = {
  0: "",
  1: "Few ( < 10% )",
  2: "Intermittent ( 10% - 20% )",
  3: "Frequent ( 20% - 50% )",
  4: "Extensive ( 50% - 80% )",
  5: "Throughout ( > 80% )",
};

const SEVERITY = "severity";
const DENSITY = "density";

export default function PavementTBL() {
  let pavementSeverityAndDensityObject = PAVEMENT_TITLES.map((title) => ({
    title: title,
    [SEVERITY]: "",
    [DENSITY]: "",
  }));

  const handleSelectorValueChange = (event, title, subTitle) => {
    const value = event.target.value;
    const updatedObject = [...pavementSeverityAndDensityObject];
    const index = updatedObject.findIndex((a) => a.title === title);
    if (index > -1) {
      updatedObject[index][subTitle] = value;
      pavementSeverityAndDensityObject = updatedObject;
    }
  };

  const PavementRow = ({ title, selectorId }) => {
    return (
      <TableRow>
        <TableCell style={{ padding: "0.5rem" }}>{title}</TableCell>
        <TableCell style={{ padding: "0.5rem" }}>
          <FormControl fullWidth>
            <Select
              native
              id={`severity-selector-${selectorId}`}
              onChange={(event) =>
                handleSelectorValueChange(event, title, SEVERITY)
              }
            >
              {Object.keys(SEVERITY_OBJECT).map((objectKey) => (
                <option key={objectKey} value={SEVERITY_OBJECT[objectKey]}>
                  {SEVERITY_OBJECT[objectKey]}
                </option>
              ))}
            </Select>
          </FormControl>
        </TableCell>
        <TableCell style={{ padding: "0.5rem" }}>
          <FormControl fullWidth>
            <Select
              native
              id={`density-selector-${selectorId}`}
              onChange={(event) =>
                handleSelectorValueChange(event, title, DENSITY)
              }
            >
              {Object.keys(DENSITY_OBJECT).map((objectKey) => (
                <option key={objectKey} value={DENSITY_OBJECT[objectKey]}>
                  {DENSITY_OBJECT[objectKey]}
                </option>
              ))}
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>
    );
  };
  return (
    <div>
      <TableContainer component="div">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pavement</TableCell>
              <TableCell>Severity of Distress</TableCell>
              <TableCell>Density of Distress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PAVEMENT_TITLES.map((title, index) => (
              <PavementRow key={index} selectorId={index} title={title} />
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
