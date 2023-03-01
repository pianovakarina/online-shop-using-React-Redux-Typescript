import {
  Link,
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="transparent">
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            React+TypeScript+Redux
          </Typography>
          <Stack direction="row">
            <Typography marginRight="15px" variant="h6">
              <Link to="/" component={RouterLink}>
                Product page
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/about" component={RouterLink}>
                About page
              </Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
