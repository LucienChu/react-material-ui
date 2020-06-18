import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MAINTENANCE_TREATMENTS } from "../tableConstant/tableConstants";

const radioBtnLabels = [1, 2, 3, 4, 5];
const maintenanceTreatmentObject = Object.keys(
  MAINTENANCE_TREATMENTS
).map((treatment) => ({ treatment: treatment, id: 0 }));

export default function TreatmentTable() {
  const obj = [
    { name: "pavementManualPatching", value: 0 },
    { name: "pavementMachinePatching", value: 0 },
    { name: "pavementSprayPatching", value: 0 },
    { name: "pavementRoutAndSealCracks", value: 0 },
    { name: "pavementChipSeal", value: 0 },
    { name: "shouldersManualPatching", value: 0 },
    { name: "shouldersMachinePatching", value: 0 },
    { name: "shouldersRoutAndSealCracks", value: 0 },
    { name: "shouldersChipSeal", value: 0 },
  ];

  // pavement
  const [pavementManualPatching, setPavementManualPatching] = useState(0);
  const [pavementMachinePatching, setPavementMachinePatching] = useState(0);
  const [pavementSprayPatching, setPavementSprayPatching] = useState(0);
  const [pavementRoutAndSealCracks, setPavementRoutAndSealCracks] = useState(0);
  const [pavementChipSeal, setPavementChipSeal] = useState(0);

  // shoulders
  const [shouldersManualPatching, setShouldersManualPatching] = useState(0);
  const [shouldersMachinePatching, setShouldersMachinePatching] = useState(0);
  const [shouldersRoutAndSealCracks, setShouldersRoutAndSealCracks] = useState(
    0
  );
  const [shouldersChipSeal, setShouldersChipSeal] = useState(0);

  // treatment object
  const [treatmentObjects, setTreatmentObjects] = useState(
    Object.keys(MAINTENANCE_TREATMENTS).map((treatment) => ({
      name: treatment,
      id: 0,
    }))
  );

  /**
   * update treatment objects with updated id
   *
   * @param {String} treatmentName
   * @param {Number} idValue
   */
  const updateTreatmentObject = (treatmentName, idValue) => {
    const updatedTreatmentObjects = treatmentObjects.map((treatment) => {
      if (treatment.name === treatmentName) {
        return { ...treatment, id: idValue };
      } else {
        return treatment;
      }
    });
    setTreatmentObjects(updatedTreatmentObjects);
  };

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
            updateTreatmentObject(treatmentType, Number(value));
          }}
        />
      </TableCell>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" rowSpan={3} colSpan={2}>
              Maintenance Treatment
            </TableCell>
            <TableCell align="center" colSpan={5}>
              EXTENT OF OCCURRENCE, %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center"> &lt; 10</TableCell>
            <TableCell align="center"> 10 - 20</TableCell>
            <TableCell align="center"> 20 - 50</TableCell>
            <TableCell align="center"> 58 - 80</TableCell>
            <TableCell align="center"> &gt; 80</TableCell>
          </TableRow>
          <TableRow>
            {radioBtnLabels.map((element, index) => (
              <TableCell key={index} align="center">
                {element}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={6}>PAVEMENT</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Manual Patching</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.PAVEMENT_MANUAL_PATCHING,
              pavementManualPatching,
              setPavementManualPatching
            )}
          </TableRow>
          <TableRow>
            <TableCell>Machine Patching</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.PAVEMENT_MACHINE_PATCHING,
              pavementMachinePatching,
              setPavementMachinePatching
            )}
          </TableRow>
          <TableRow>
            <TableCell>Spray Patching</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.PAVEMENT_SPRAY_PATCHING,
              pavementSprayPatching,
              setPavementSprayPatching
            )}
          </TableRow>
          <TableRow>
            <TableCell>Rout and Seal Cracks</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.PAVEMENT_ROUT_AND_SEAL_CRACKS,
              pavementRoutAndSealCracks,
              setPavementRoutAndSealCracks
            )}
          </TableRow>
          <TableRow>
            <TableCell>Chip Seal</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.PAVEMENT_CHIP_SEAL,
              pavementChipSeal,
              setPavementChipSeal
            )}
          </TableRow>

          <TableRow>
            <TableCell rowSpan={5}>SHOULDERS</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Manual Patching</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.SHOULDERS_MANUAL_PATCHING,
              shouldersManualPatching,
              setShouldersManualPatching
            )}
          </TableRow>
          <TableRow>
            <TableCell>Machine Patching</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.SHOULDERS_MACHINE_PATCHING,
              shouldersMachinePatching,
              setShouldersMachinePatching
            )}
          </TableRow>
          <TableRow>
            <TableCell>Rout and Seal Cracks</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.SHOULDERS_ROUT_AND_SEAL_CRACKS,
              shouldersRoutAndSealCracks,
              setShouldersRoutAndSealCracks
            )}
          </TableRow>
          <TableRow>
            <TableCell>Chip Seal</TableCell>
            {renderRadioButtons(
              MAINTENANCE_TREATMENTS.SHOULDERS_CHIP_SEAL,
              shouldersChipSeal,
              setShouldersChipSeal
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
