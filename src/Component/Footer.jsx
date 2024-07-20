import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="inherit" href="https://www.flipkart.com/" target="_blank">
        www.e_commerce.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm" >
          <Typography variant="h2" component="h1" gutterBottom>
            E-Commerce
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom  >
            <img src="/linkedin.svg" alt="linkedin logo" width={"50px"} />
            <img src="/twitter-logo-svg-1.png" alt="Twitter logo" width={"50px"} />
            <img src="/OIP.jpg" alt="youtube logo"  width={"50px"}/>
            <img src="/facebook-logo-png--impending-10.png" alt="facebook logo"  width={"50px"}/>

          </Typography>
          <Typography variant="body1"></Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: "gray",
            color: "white",
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
