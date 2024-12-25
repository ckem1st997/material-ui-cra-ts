import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://hacom.vn">
        Hacom
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container>
      <Box sx={{ my: 10 }}>
        <img
          src="/20945385.jpg"
          width={"500px"}
          height={"500px"}
          loading="lazy"
        />
        <Typography
          justifyContent={"center"}
          justifyItems={"center"}
          justifySelf={"center"}
          variant="h4"
          component="h1"
          sx={{ mb: 2 }}
        >
          Trang web đang bảo trì, xin vui lòng quay lại sau !
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
