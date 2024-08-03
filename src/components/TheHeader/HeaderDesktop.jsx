import { Button } from "@mui/material";
import { Box } from "@mui/system";

const HeaderDesktop = (props) => {
  const { pages } = props;

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}>
      {pages.map(({ title, to }) => (
        <Button key={`desktop-link-${title}`} sx={{ my: 2, display: "block", color: "#323232" }} href={to}>
          {title}
        </Button>
      ))}
    </Box>
  );
};

export default HeaderDesktop;
