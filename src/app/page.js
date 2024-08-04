import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  Typography,
  Link,
  Stack,
  Breadcrumbs,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const HomePage = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" sx={{ fontSize: "0.875rem" }}>
      Главная
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/" sx={{ fontSize: "0.875rem" }}>
      Каталог
    </Link>,
    <Typography key="3" color="text.primary" sx={{ fontSize: "0.875rem" }}>
      Запчасти для двигателей
    </Typography>,
  ];
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Поиск</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box>
        <Typography variant="h5" component="h1">
          Каталог
        </Typography>
        <Stack spacing={2}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={8}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
