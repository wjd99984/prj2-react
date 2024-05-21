import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import React from "react";
import { Navbar } from "../componet/Navbar.jsx";

export function Home() {
  return (
    <Box>
      <Navbar />
      <Box>navbar</Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
