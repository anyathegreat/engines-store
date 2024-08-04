import { AppBar, Container, Toolbar } from "@mui/material";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const pages = [
  { title: "Каталог", to: "/" },
  { title: "Контакты", to: "/contacts" },
];

const TheHeader = () => {
  return (
    <header>
      <AppBar position="static" color="default" sx={{ mb: 2 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters variant="dense">
            <HeaderMobile pages={pages} />
            <HeaderDesktop pages={pages} />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default TheHeader;
