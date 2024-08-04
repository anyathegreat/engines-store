import NextLink from "next/link";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const TheFooter = () => {
  return (
    <footer>
      <Container maxWidth="false" sx={{ bgcolor: "grey.800", color: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md>
              <Typography variant="body1" sx={{ p: 1 }}>
                &copy; {new Date().getFullYear()} Все права защищены
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <List>
                {["Каталог", "О нас", "Доставка и оплата"].map((item) => (
                  <ListItem disableGutters key={item} sx={{ p: 0 }}>
                    <NextLink href="#" style={{ color: "white" }}>
                      {item}
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <List>
                {["Каталог", "О нас", "Доставка и оплата"].map((item) => (
                  <ListItem disableGutters key={item} sx={{ p: 0 }}>
                    <NextLink href="#" style={{ color: "white" }}>
                      {item}
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md>
              <List>
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0, mb: 1 }}>
                    <ListItemIcon>
                      <LocalPhoneIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="+7 (800) 555-35-35" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0 }}>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="example@email.com" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </footer>
  );
};

export default TheFooter;
