import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
// import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "../pciTable.module.scss";
import { Box, Checkbox } from "@material-ui/core";

const SEVERITY = "severity";
const DENSITY = "density";
const LEFT = "left";
const RIGHT = "right";
const MOD = "mod";
const SEVERE = "severe";

const PCI_OBJECT_TITLES = {
  CRACKING: "Cracking",
  PAVEMENT_EDGE_OR_CURB_SEPARATION: "Pavement Edge / Curb Separation",
  DISTORTION: "Distortion",
  BREAKUP_OR_SEPARATION: "Breakup / Separation",
  EDGE_BREAK: "Edge Break",
  BREAKUP: "Breakup",
};

const getPCIObject = (title) => {
  return {
    title: title,
    checkboxes: {
      [SEVERITY]: {
        [RIGHT]: {
          [MOD]: { checked: false, disabled: false },
          [SEVERE]: { checked: false, disabled: false },
        },
        [LEFT]: {
          [MOD]: { checked: false, disabled: false },
          [SEVERE]: { checked: false, disabled: false },
        },
      },
      [DENSITY]: {
        [RIGHT]: {
          [MOD]: { checked: false, disabled: false },
          [SEVERE]: { checked: false, disabled: false },
        },
        [LEFT]: {
          [MOD]: { checked: false, disabled: false },
          [SEVERE]: { checked: false, disabled: false },
        },
      },
    },
  };
};

export default function ShoulderTable() {
  const [crackingObject, setCrackingObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.CRACKING)
  );

  const [pavementObject, setPavementObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.PAVEMENT_EDGE_OR_CURB_SEPARATION)
  );

  const [distortionObject, setDistortionObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.DISTORTION)
  );

  const [breakupOrSeparationObject, setBreakupOrSeparationObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.BREAKUP_OR_SEPARATION)
  );

  const [edgeBreakObject, setEdgeBreakObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.EDGE_BREAK)
  );

  const [breakupObject, seTbreakupObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.BREAKUP)
  );
  const [dominationType, setDominationType] = useState({
    PAVED_FULL: { title: "PAVE FULL", checked: false },
    PAVED_PARTIAL: { title: "PAVE PARTIAL", checked: false },
    SURFACE_TREATED: { title: "SURFACE THREATED", checked: false },
    PRIMED: { title: "PRIMED", checked: false },
    GRAVEL: { title: "GRAVEL", checked: false },
  });

  const [selectedDominantType, setSelectedDominantType] = useState("");
  const renderCheckboxes = (
    pciObject,
    checkBoxGroup,
    severityLevel,
    pciObjectSetter
  ) => {
    const boxGroup = pciObject.checkboxes[checkBoxGroup][severityLevel];
    return Object.keys(boxGroup).map((key) => {
      const element = boxGroup[key];
      return (
        <TableCell align="center" key={key}>
          <FormControlLabel
            style={{ margin: 0 }}
            checked={element.checked}
            disabled={element.disabled}
            value={`${pciObject.title}-${boxGroup}-${key}`}
            control={<Checkbox />}
            label=""
            onClick={(event) => {
              const isChecked = boxGroup[key].checked;
              if (isChecked) {
                debugger;
                const updatedCheckboxGroup = { ...boxGroup };
                updatedCheckboxGroup[key].checked = false;
                const updatedPCIObject = { ...pciObject };

                updatedPCIObject.checkboxes[checkBoxGroup][
                  severityLevel
                ] = updatedCheckboxGroup;
                console.log(
                  "updatedPCIObject",
                  updatedPCIObject.checkboxes[checkBoxGroup][severityLevel]
                );
                pciObjectSetter(updatedPCIObject);
              }
            }}
            onChange={(event) => {
              const isChecked = event.target.checked;
              const updatedCheckboxGroup = { ...boxGroup };
              updatedCheckboxGroup[key].checked = isChecked;
              if (isChecked) {
                updatedCheckboxGroup[
                  key === MOD ? SEVERE : MOD
                ].checked = !isChecked;
              }
              const updatedPCIObject = { ...pciObject };

              updatedPCIObject.checkboxes[checkBoxGroup][
                severityLevel
              ] = updatedCheckboxGroup;
              pciObjectSetter(updatedPCIObject);
            }}
          />
        </TableCell>
      );
    });
  };

  const handleDominantTypeChange = (event) => {
    const value = event.target.value;
    setSelectedDominantType(value === selectedDominantType ? "" : value);
  };

  const renderDominateTypeCheckbox = (rowSpan, value, activeDominantType) => {
    return (
      <TableCell rowSpan={rowSpan}>
        <Checkbox
          checked={activeDominantType === value}
          value={value}
          onChange={handleDominantTypeChange}
        />
      </TableCell>
    );
  };

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
            <TableCell rowSpan={2}>{dominationType.PAVED_FULL.title}</TableCell>
            {renderDominateTypeCheckbox(
              2,
              dominationType.PAVED_FULL.title,
              selectedDominantType
            )}
            <TableCell>{crackingObject.title}</TableCell>
            {renderCheckboxes(
              crackingObject,
              SEVERITY,
              RIGHT,
              setCrackingObject
            )}
            {renderCheckboxes(
              crackingObject,
              SEVERITY,
              LEFT,
              setCrackingObject
            )}
            {renderCheckboxes(
              crackingObject,
              DENSITY,
              RIGHT,
              setCrackingObject
            )}
            {renderCheckboxes(crackingObject, DENSITY, LEFT, setCrackingObject)}
          </TableRow>
          <TableRow>
            <TableCell>{pavementObject.title}</TableCell>
            {renderCheckboxes(
              pavementObject,
              SEVERITY,
              RIGHT,
              setPavementObject
            )}
            {renderCheckboxes(
              pavementObject,
              SEVERITY,
              LEFT,
              setPavementObject
            )}
            {renderCheckboxes(
              pavementObject,
              DENSITY,
              RIGHT,
              setPavementObject
            )}
            {renderCheckboxes(pavementObject, DENSITY, LEFT, setPavementObject)}
          </TableRow>

          <TableRow>
            <TableCell>{dominationType.PAVED_PARTIAL.title}</TableCell>
            {renderDominateTypeCheckbox(
              null,
              dominationType.PAVED_PARTIAL.title,
              selectedDominantType
            )}
            <TableCell>{distortionObject.title}</TableCell>
            {renderCheckboxes(
              distortionObject,
              SEVERITY,
              RIGHT,
              setDistortionObject
            )}
            {renderCheckboxes(
              distortionObject,
              SEVERITY,
              LEFT,
              setDistortionObject
            )}
            {renderCheckboxes(
              distortionObject,
              DENSITY,
              RIGHT,
              setDistortionObject
            )}
            {renderCheckboxes(
              distortionObject,
              DENSITY,
              LEFT,
              setDistortionObject
            )}
          </TableRow>

          <TableRow>
            <TableCell rowSpan={3}>
              {dominationType.SURFACE_TREATED.title}
            </TableCell>
            {renderDominateTypeCheckbox(
              3,
              dominationType.SURFACE_TREATED.title,
              selectedDominantType
            )}
          </TableRow>
          <TableRow>
            <TableCell>{breakupOrSeparationObject.title}</TableCell>
            {renderCheckboxes(
              breakupOrSeparationObject,
              SEVERITY,
              RIGHT,
              setBreakupOrSeparationObject
            )}
            {renderCheckboxes(
              breakupOrSeparationObject,
              SEVERITY,
              LEFT,
              setBreakupOrSeparationObject
            )}
            {renderCheckboxes(
              breakupOrSeparationObject,
              DENSITY,
              RIGHT,
              setBreakupOrSeparationObject
            )}
            {renderCheckboxes(
              breakupOrSeparationObject,
              DENSITY,
              LEFT,
              setBreakupOrSeparationObject
            )}
          </TableRow>
          <TableRow>
            <TableCell>{edgeBreakObject.title}</TableCell>
            {renderCheckboxes(
              edgeBreakObject,
              SEVERITY,
              RIGHT,
              setEdgeBreakObject
            )}
            {renderCheckboxes(
              edgeBreakObject,
              SEVERITY,
              LEFT,
              setEdgeBreakObject
            )}
            {renderCheckboxes(
              edgeBreakObject,
              DENSITY,
              RIGHT,
              setEdgeBreakObject
            )}
            {renderCheckboxes(
              edgeBreakObject,
              DENSITY,
              LEFT,
              setEdgeBreakObject
            )}
          </TableRow>

          <TableRow>
            <TableCell> {dominationType.PRIMED.title}</TableCell>
            {renderDominateTypeCheckbox(
              null,
              dominationType.PRIMED.title,
              selectedDominantType
            )}

            <TableCell>{breakupObject.title}</TableCell>
            {renderCheckboxes(breakupObject, SEVERITY, RIGHT, seTbreakupObject)}
            {renderCheckboxes(breakupObject, SEVERITY, LEFT, seTbreakupObject)}
            {renderCheckboxes(breakupObject, DENSITY, RIGHT, seTbreakupObject)}
            {renderCheckboxes(breakupObject, DENSITY, LEFT, seTbreakupObject)}
          </TableRow>
          <TableRow>
            <TableCell>{dominationType.GRAVEL.title}</TableCell>
            {renderDominateTypeCheckbox(
              null,
              dominationType.GRAVEL.title,
              selectedDominantType
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
