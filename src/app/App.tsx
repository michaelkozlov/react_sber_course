import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import { withProviders } from "./providers";

export const App = withProviders(() => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
});