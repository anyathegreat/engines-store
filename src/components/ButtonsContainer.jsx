"use client";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonsContainerStyled = styled(Box)`
  background-color: green;
`;

const ButtonsContainer = () => {
  return (
    <ButtonsContainerStyled>
      <Button variant="contained" color="secondary" href="/store">
        Go to store
      </Button>
    </ButtonsContainerStyled>
  );
};

export default ButtonsContainer;
