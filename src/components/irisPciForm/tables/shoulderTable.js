import React, { useState } from "react";
// import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Checkbox } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SEVERITY_OBJECT = {
  0: "",
  1: "Right: Mod",
  2: "Right: Severe",
  3: "Left: Mod",
  4: "Left: Severe",

  5: "Right: Mod, Left: Mod",
  6: "Right: Mod, Left: Severe",
  7: "Right: Severe, Left: Mod",
  8: "Right Severe, Left: Severe",
};

const DENSITY_OBJECT = {
  0: "",
  1: "Right: Mod",
  2: "Right: Severe",
  3: "Left: Mod",
  4: "Left: Severe",

  5: "Right: Mod, Left: Mod",
  6: "Right: Mod, Left: Severe",
  7: "Right: Severe, Left: Mod",
  8: "Right Severe, Left: Severe",
};

const SEVERITY = "severity";
const DENSITY = "density";
const LEFT = "left";
const RIGHT = "right";
const MOD = "mod";
const SEVERE = "severe";

const PAVE_FULL = "PAVE FULL";
const PAVE_PARTIAL = "PAVE PARTIAL";
const SURFACE_TREATED = "SURFACE THREATED";
const PRIMED = "PRIMED";
const GRAVEL = "GRAVEL";

const CRACKING = "Cracking";
const PAVEMENT_EDGE_OR_CURB = "Pavement Edge / Curb";
const DISTORTION = "Distortion";
const BREAKUP_OR_SEPARATION = "Breakup / Separation";
const EDGE_BREAK = "Edge Break";
const BREAKUP = "Breakup";

const PCI_OBJECT_TITLES = {
  CRACKING: "Cracking",
  PAVEMENT_EDGE_OR_CURB_SEPARATION: "Pavement Edge / Curb Separation",
  DISTORTION: "Distortion",
  BREAKUP_OR_SEPARATION: "Breakup / Separation",
  EDGE_BREAK: "Edge Break",
  BREAKUP: "Breakup",
};

const getPCIObject = (title, disabled) => {
  return {
    title: title,
    checkboxes: {
      [SEVERITY]: {
        [RIGHT]: {
          [MOD]: { checked: false, disabled: disabled },
          [SEVERE]: { checked: false, disabled: disabled },
        },
        [LEFT]: {
          [MOD]: { checked: false, disabled: disabled },
          [SEVERE]: { checked: false, disabled: disabled },
        },
      },
      [DENSITY]: {
        [RIGHT]: {
          [MOD]: { checked: false, disabled: disabled },
          [SEVERE]: { checked: false, disabled: disabled },
        },
        [LEFT]: {
          [MOD]: { checked: false, disabled: disabled },
          [SEVERE]: { checked: false, disabled: disabled },
        },
      },
    },
  };
};

export default function ShoulderBTL() {
  console.log("calledcalled");
  const [selectedDominantType, setSelectedDominantType] = useState("");
  const [crackingObject, setCrackingObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.CRACKING, true)
  );

  const [pavementObject, setPavementObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.PAVEMENT_EDGE_OR_CURB_SEPARATION, true)
  );

  const [distortionObject, setDistortionObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.DISTORTION, true)
  );

  const [breakupOrSeparationObject, setBreakupOrSeparationObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.BREAKUP_OR_SEPARATION, true)
  );

  const [edgeBreakObject, setEdgeBreakObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.EDGE_BREAK, true)
  );

  const [breakupObject, seTbreakupObject] = useState(
    getPCIObject(PCI_OBJECT_TITLES.BREAKUP, true)
  );

  let toggledShoulderObject = {
    dominantType: "",
    toggledShoulderValues: [],
  };

  const dominantType = {
    PAVE_FULL: {
      title: PAVE_FULL,
      subTitles: [CRACKING, PAVEMENT_EDGE_OR_CURB],
    },
    PAVE_PARTIAL: { title: PAVE_PARTIAL, subTitles: [DISTORTION] },
    SURFACE_TREATED: {
      title: SURFACE_TREATED,
      subTitles: [BREAKUP_OR_SEPARATION, EDGE_BREAK],
    },
    PRIMED: { title: PRIMED, subTitles: [BREAKUP] },
    GRAVEL: { title: GRAVEL, subTitles: [] },
  };

  const handleDominantTypeChange = (event) => {
    const value = event.target.value;
    console.log("object", toggledShoulderObject);
    // debugger;
    toggleCheckboxes(selectedDominantType, true);
    if (value !== selectedDominantType) {
      toggleCheckboxes(value, false);
    }
    setSelectedDominantType(value === selectedDominantType ? "" : value);
  };

  const toggleCheckboxes = (dominantTypeValue, disabled) => {
    switch (dominantTypeValue) {
      case dominantType.PAVE_FULL.title:
        setCrackingObject(getPCIObject(PCI_OBJECT_TITLES.CRACKING, disabled));
        setPavementObject(
          getPCIObject(
            PCI_OBJECT_TITLES.PAVEMENT_EDGE_OR_CURB_SEPARATION,
            disabled
          )
        );
        break;
      case dominantType.PAVE_PARTIAL.title:
        setDistortionObject(
          getPCIObject(PCI_OBJECT_TITLES.DISTORTION, disabled)
        );
        break;
      case dominantType.SURFACE_TREATED.title:
        setBreakupOrSeparationObject(
          getPCIObject(PCI_OBJECT_TITLES.BREAKUP_OR_SEPARATION, disabled)
        );
        setEdgeBreakObject(
          getPCIObject(PCI_OBJECT_TITLES.EDGE_BREAK, disabled)
        );
        break;
      case dominantType.PRIMED.title:
        seTbreakupObject(getPCIObject(PCI_OBJECT_TITLES.BREAKUP, disabled));
        break;
      default:
        break;
    }
  };

  const DominateTypeCheckbox = ({ rowSpan, value, activeDominantType }) => {
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

  const handleSelectorValueChange = (event, title, type) => {
    console.log("dominantType", selectedDominantType);
    console.log("value", event.target.value);
    console.log("title", title);
    console.log("type", type);

    let updatedObject = null;
    // debugger;
    console.log(
      "toggledShoulderObject.dominantType === selectedDominantType",
      toggledShoulderObject.dominantType === selectedDominantType
    );
    if (toggledShoulderObject.dominantType === selectedDominantType) {
      updatedObject = { ...toggledShoulderObject };
      const toggledShoulderValues = updatedObject.toggledShoulderValues;
      const index = toggledShoulderValues.findIndex(
        (object) => object.title === title
      );
      if (index > -1) {
        toggledShoulderValues[index][type] = event.target.value;
      } else {
        toggledShoulderValues.push({
          title: title,
          [type]: event.target.value,
        });
      }
    } else {
      updatedObject = {
        dominantType: selectedDominantType,
        toggledShoulderValues: [{ title: title, [type]: event.target.value }],
      };
    }
    toggledShoulderObject = updatedObject;
    console.log("updatedObject", updatedObject);
  };

  const Selectors = ({ title, disabled }) => {
    return (
      <>
        <TableCell style={{ padding: "0.5rem" }}>{title}</TableCell>
        <TableCell style={{ padding: "0.5rem" }}>
          <FormControl fullWidth>
            <Select
              disabled={disabled}
              native
              id={`severity-selector-${title}`}
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
              disabled={disabled}
              native
              id={`density-selector-${title}`}
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
      </>
    );
  };

  return (
    <TableContainer component="div">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Shoulders</TableCell>
            <TableCell>Select one</TableCell>
            <TableCell>Distress</TableCell>
            <TableCell>Severity of Distress</TableCell>
            <TableCell>Density of Distress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* PAVE FULL */}
          <TableRow>
            <TableCell rowSpan={2}>{dominantType.PAVE_FULL.title}</TableCell>
            <DominateTypeCheckbox
              rowSpan={2}
              value={dominantType.PAVE_FULL.title}
              activeDominantType={selectedDominantType}
            />

            <Selectors
              disabled={dominantType.PAVE_FULL.title !== selectedDominantType}
              title={dominantType.PAVE_FULL.subTitles[0]}
            />
          </TableRow>

          <TableRow>
            <Selectors
              disabled={dominantType.PAVE_FULL.title !== selectedDominantType}
              title={dominantType.PAVE_FULL.subTitles[1]}
            />
          </TableRow>

          {/* PAVE PARTIAL */}
          <TableRow>
            <TableCell>{dominantType.PAVE_PARTIAL.title}</TableCell>
            <DominateTypeCheckbox
              rowSpan={1}
              value={dominantType.PAVE_PARTIAL.title}
              activeDominantType={selectedDominantType}
            />
            <Selectors
              disabled={
                dominantType.PAVE_PARTIAL.title !== selectedDominantType
              }
              title={dominantType.PAVE_PARTIAL.subTitles[0]}
            />
          </TableRow>

          {/* SURFACE THREATED */}
          <TableRow>
            <TableCell rowSpan={2}>
              {dominantType.SURFACE_TREATED.title}
            </TableCell>
            <DominateTypeCheckbox
              rowSpan={2}
              value={dominantType.SURFACE_TREATED.title}
              activeDominantType={selectedDominantType}
            />

            <Selectors
              disabled={
                dominantType.SURFACE_TREATED.title !== selectedDominantType
              }
              title={dominantType.SURFACE_TREATED.subTitles[0]}
            />
          </TableRow>

          <TableRow>
            <Selectors
              disabled={
                dominantType.SURFACE_TREATED.title !== selectedDominantType
              }
              title={dominantType.SURFACE_TREATED.subTitles[1]}
            />
          </TableRow>

          {/* PRIMED */}
          <TableRow>
            <TableCell>{dominantType.PRIMED.title}</TableCell>
            <DominateTypeCheckbox
              rowSpan={1}
              value={dominantType.PRIMED.title}
              activeDominantType={selectedDominantType}
            />
            <Selectors
              disabled={dominantType.PRIMED.title !== selectedDominantType}
              title={dominantType.PRIMED.subTitles[0]}
            />
          </TableRow>

          {/* GRAVEL */}
          <TableRow>
            <TableCell>{dominantType.GRAVEL.title}</TableCell>
            <DominateTypeCheckbox
              rowSpan={1}
              value={dominantType.GRAVEL.title}
              activeDominantType={selectedDominantType}
            />
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
