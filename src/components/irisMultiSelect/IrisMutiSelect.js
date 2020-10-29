/**
 * IRIS R&D Group Inc. All rights reserved.
 *
 * Author: Lucien Chu
 * Create Date: Oct 04, 2020
 *
 * Description: Drop down elemet that support multiple selctions
 */
import React from "react";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Checkbox, Chip, InputLabel, ListItemText } from "@material-ui/core";
import PropTypes from "prop-types";

export function IrisMutiSelect(props) {
  const {
    label,
    allElements,
    selectedElements,
    onChange,
    exclusiveValues, // allow exclusive values(s)
  } = props;
  debugger;

  const handleChange = (event) => {
    let values = event.target.value;

    // if exclusive value(s) is (are) provided
    // check current selected value(s) again this (these) value(s)
    if (
      exclusiveValues !== null &&
      exclusiveValues !== undefined &&
      exclusiveValues.length &&
      exclusiveValues.length > 0
    ) {
      values = toggleValuesAgainstUniqueValues(values, exclusiveValues);
    }

    if (onChange) {
      onChange(values);
    }
  };

  const toggleValuesAgainstUniqueValues = (selectedValues, exclusiveValues) => {
    let values = [...selectedValues];
    const lastSelectedValue = selectedValues[selectedValues.length - 1];
    // if last selected value is one of the given unique values
    if (exclusiveValues.indexOf(lastSelectedValue) > -1) {
      // only keep this value
      values = [lastSelectedValue];
    }

    // if values contains uniuqe value (but not on last position, namely, new value has been appened to value)
    // remvoe unique value from values
    else {
      for (const uniqueValue of exclusiveValues) {
        if (values.indexOf(uniqueValue) > -1) {
          values = values.filter((v) => v !== uniqueValue);
        }
      }
    }

    return values;
  };

  return (
    <FormControl className={props.className} style={{ overflow: "hidden" }}>
      <InputLabel>{label ? label : "please provide a lable"}</InputLabel>
      <Select
        style={{ width: "100%", overflow: "hidden" }}
        multiple
        value={selectedElements}
        renderValue={(selected) => (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </div>
        )}
        onChange={handleChange}
        input={<Input id={`iris-muti-select-${label}`} />}
      >
        {allElements.map((d, index) => (
          <MenuItem key={index} value={d} style={{ padding: "0 10px" }}>
            <Checkbox
              checked={selectedElements.indexOf(d) > -1}
              style={{ width: 30, height: 30 }}
            />
            <ListItemText primary={d} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

IrisMutiSelect.propTypes = {
  label: PropTypes.string, // muti select element title
  allElements: PropTypes.array.isRequired, // all selectable elements
  selectedElements: PropTypes.array.isRequired, // all selected element
  onChange: PropTypes.func, // callback function when element is toggled
  exclusiveValues: PropTypes.array, // a list of values that could only be unique in selectedElements array
};

/**
 * Change Log:
 *
 * Change Date: Oct 04, 2020
 *
 * Description: designed and added documentation
 */
