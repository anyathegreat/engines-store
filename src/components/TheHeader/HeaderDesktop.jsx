import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderDesktop = (props) => {
  const { pages } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Stack direction={"row"}>
        {pages.map(({ title, to }) => (
          <Button key={`desktop-link-${title}`} sx={{ my: 2, display: "block", color: "#323232" }} href={to}>
            {title}
          </Button>
        ))}
      </Stack>
      <Button href="/cart" size="small" variant="contained" startIcon={<ShoppingCartIcon />}>
        Корзина
      </Button>
    </Box>
  );
};

export default HeaderDesktop;
