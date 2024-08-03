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
      <AppBar position="static" color="default">
        <Container maxWidth="xl">
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
