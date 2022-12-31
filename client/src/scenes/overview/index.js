import React, { useState } from "react";
import Header from "components/Header";
import { Box, FormControl, MenuItem, InputLabel, Select } from "@mui/material";

import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <Box m={"1.5rem 2rem"}>
      <Header
        title={"OVERVIEW"}
        subtitle={"Overview of General revenue and Profit"}
      />
      <Box height={"75vh"}>
        <FormControl
          sx={{
            mt: "1rem",
          }}
        >
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value={"sales"}>Sales</MenuItem>
            <MenuItem value={"units"}>Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
