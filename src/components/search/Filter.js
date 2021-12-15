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
import ClearIcon from "@mui/icons-material/Clear";

export default function Filter({
  continentQuery,
  setContinentQuery,
  categoryQuery,
  setCateoryQuery,
}) {
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

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        endIcon={<FilterListIcon />}
        onClick={handleClick}
        color="secondary"
        size="small"
        style={{ marginLeft: "1vw" }}
      >
        Filter ({continentQuery.length + categoryQuery.length})
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{ backdropFilter: "blur(2px)" }}
        anchorPosition={{ top: 200, left: 1400 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ display: "flex", borderRadius: "50%" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <Grid container spacing={1}>
              <Grid item xs={10} lg={11}>
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
            <Grid
              container
              spacing={0}
              style={{
                marginBottom: "4%",
                borderBottom: "1px solid grey",
              }}
            >
              <Grid item xs={12}>
                <FormLabel
                  component="legend"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  UN Sustainable Goals
                </FormLabel>
              </Grid>
              <Grid item xs={8}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Knowledge"
                      onChange={(e) =>
                        handleChange(
                          setCateoryQuery,
                          categoryQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="knowledge"
                      color="secondary"
                      checked={categoryQuery.includes("Knowledge")}
                    />
                  }
                  label="Knowledge"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Water"
                      onChange={(e) =>
                        handleChange(
                          setCateoryQuery,
                          categoryQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="water"
                      color="secondary"
                      checked={categoryQuery.includes("Water")}
                    />
                  }
                  label="Water"
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              style={{
                marginBottom: "4%",
                borderBottom: "1px solid grey",
              }}
            >
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
                      value="Africa"
                      onChange={(e) =>
                        handleChange(
                          setContinentQuery,
                          continentQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="africa"
                      color="secondary"
                      checked={continentQuery.includes("Africa")}
                    />
                  }
                  label="Africa"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Asia"
                      onChange={(e) =>
                        handleChange(
                          setContinentQuery,
                          continentQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="asia"
                      color="secondary"
                      checked={continentQuery.includes("Asia")}
                    />
                  }
                  label="Asia"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Europe"
                      onChange={(e) =>
                        handleChange(
                          setContinentQuery,
                          continentQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="europe"
                      color="secondary"
                      checked={continentQuery.includes("Europe")}
                    />
                  }
                  label="Europe"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="North-America"
                      onChange={(e) =>
                        handleChange(
                          setContinentQuery,
                          continentQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="northAmerica"
                      color="secondary"
                      checked={continentQuery.includes("North-America")}
                    />
                  }
                  label="North America"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="South-America"
                      onChange={(e) =>
                        handleChange(
                          setContinentQuery,
                          continentQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="southAmerica"
                      color="secondary"
                      checked={continentQuery.includes("South-America")}
                    />
                  }
                  label="South America"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Australia"
                      onChange={(e) =>
                        handleChange(
                          setContinentQuery,
                          continentQuery,
                          e.target.checked,
                          e.target.value
                        )
                      }
                      name="Australia"
                      color="secondary"
                      checked={continentQuery.includes("Australia")}
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

function handleChange(setState, state, checked, value) {
  if (checked === false) {
    const temp = state.filter((element) => element !== value);
    setState([...temp]);
  }
  if (checked === true) {
    setState([...state, value]);
  }
}
