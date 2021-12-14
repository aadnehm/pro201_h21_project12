import React from "react";
// MUI
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";

export default function Filter() {
  // Open/close popover to show filter options
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  //Use state to keep track of checkboxes under UN-category

  const [goals, setGoals] = React.useState({
    knowledge: false,
    water: false,
  });

  const handleChange = (event) => {
    setGoals(
      {
        ...goals,
        [event.target.name]: event.target.checked,
      },
      console.log(event.target.name)
    );
  };

  const { knowledge, water } = goals;

  //Use state to keep track of checkboxes under continents-category
  const [continents, setContinents] = React.useState({
    africa: false,
    asia: false,
    europe: false,
    northAmerica: false,
    southAmerica: false,
    australia: false,
  });

  const handleChecked = (event) => {
    setContinents(
      {
        ...goals,
        [event.target.name]: event.target.checked,
      },
      console.log(event.target.name)
    );
  };

  const { africa, asia, europe, northAmerica, southAmerica, australia } =
    continents;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        endIcon={<FilterListIcon />}
        onClick={handleClick}
        color="secondary"
      >
        Filter
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box sx={{ display: "flex", borderRadius: "20%" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <Grid container spacing={1}>
              <Grid item xs={11}>
                <FormLabel
                  component="legend"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Filter
                </FormLabel>
              </Grid>
              <Grid item xs={1}>
                <Button style={{ marginbottom: "10%" }} onClick={handleClose}>
                  <CloseIcon color="secondary" />
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormLabel
                  component="legend"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  UN Sustainable Goals
                </FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={knowledge}
                      onChange={handleChange}
                      name="knowledge"
                      color="secondary"
                    />
                  }
                  label="Knowledge"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={water}
                      onChange={handleChange}
                      name="water"
                      color="secondary"
                    />
                  }
                  label="Water"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormLabel
                  component="legend"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Continents
                </FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={africa}
                      onChange={handleChecked}
                      name="africa"
                      color="secondary"
                    />
                  }
                  label="Africa"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={asia}
                      onChange={handleChecked}
                      name="asia"
                      color="secondary"
                    />
                  }
                  label="Asia"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={europe}
                      onChange={handleChecked}
                      name="europe"
                      color="secondary"
                    />
                  }
                  label="Europe"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={northAmerica}
                      onChange={handleChecked}
                      name="northAmerica"
                      color="secondary"
                    />
                  }
                  label="North America"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={southAmerica}
                      onChange={handleChecked}
                      name="southAmerica"
                      color="secondary"
                    />
                  }
                  label="South America"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={australia}
                      onChange={handleChecked}
                      name="Australia"
                      color="secondary"
                    />
                  }
                  label="Australia"
                />
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: "2%" }}
              variant="contained"
              color="secondary"
              onClick={handleClose}
            >
              See non-profits
            </Button>
          </FormControl>
        </Box>
      </Popover>
    </div>
  );
}
