import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const useStyles = makeStyles(() => ({
  formControl: {
    "& .MuiInputBase-root": {
      color: "#CCCCCC",
      borderColor: "#CCCCCC",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "4px",
      // minWidth: "120px",
      width: "100%",
      padding: "0 10px",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: "0px",
    },
  },
  select: {
    // width: "250px",
    width: "100%",
    fontSize: "12px",
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
  selectIcon: {
    position: "relative",
    color: "#CCCCCC",
    fontSize: "25px",
  },
  paper: {
    borderRadius: 12,
    marginTop: 8,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    "& li": {
      fontWeight: 200,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: "12px",
    },
    "& li.Mui-selected": {
      color: "white",
      background: "#1AB697",
    },
    "& li.Mui-selected:hover": {
      background: "#1AB697",
    },
  },
}));

const DropDown = ({ value, handleChange, items }) => {
  const classes = useStyles();

  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl className={classes.formControl} style={{ width: "100%" }}>
      <Select
        value={value}
        onChange={handleChange}
        disableUnderline
        IconComponent={ExpandMoreRoundedIcon}
        MenuProps={menuProps}
        classes={{
          select: classes.select,
          icon: classes.selectIcon,
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.key} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
