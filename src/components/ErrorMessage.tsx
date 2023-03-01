import { Box, Typography } from "@mui/material";
import React from "react";

interface ErrorMessageProps {
  error: string;
}
const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Typography textAlign="center" variant="h3" gutterBottom>
      {error}
    </Typography>
  );
};

export default ErrorMessage;
