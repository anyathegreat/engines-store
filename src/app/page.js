import NextLink from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import ButtonsContainer from "@/components/ButtonsContainer";

const HomePage = () => {
  return (
    <Container sx={{ bgcolor: "red" }}>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link href="/about" color="secondary" component={NextLink}>
              Go to the about page
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1">
              Engines Store
            </Typography>
            <Box>
              <ButtonsContainer />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
