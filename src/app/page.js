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
  Divider,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PartCard from "@/components/PartCard";

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
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" component="h2">
              Категории
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="outlined">Сбросить всё</Button>
              <Button variant="contained">Применить</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack useFlexGap direction="row" spacing={2} flexWrap="wrap">
              <PartCard />
              <PartCard />
              <PartCard />
              <PartCard />
              <PartCard />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
