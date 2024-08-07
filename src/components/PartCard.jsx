"use client";
import { Box, Button, Card, CardActions, CardContent, Divider, IconButton, TextField, Typography } from "@mui/material";
import { currencyFormatter } from "@/_helpers/formatter";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import testPic from "../../public/images/test.jpg";

const PartCard = () => {
  const [count, setCount] = useState(1);

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }
  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
  }
  function handleChangeCount(event) {
    const value = parseInt(event.target.value.replaceAll(/[^\d]/g, ""));

    if (Number.isNaN(value)) {
      setCount(1);
    } else {
      setCount(value);
    }
  }

  return (
    <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 275 }}>
      <CardContent sx={{ py: 1 }}>
        <Box maxWidth="250px" minWidth="250px">
          <Image src={testPic} alt="" width={250} />
        </Box>
        <Typography variant="body1" component="div" lineHeight="1.2rem" color="secondary.main" sx={{ mb: 1 }}>
          <b>{`Актуатор (привод управления топливом, дозатор)`}</b>
        </Typography>
        <Typography
          variant="body1"
          componet="div"
          color="text.secondary"
          sx={{ lineHeight: "1rem", fontSize: "0.725rem", mb: 2 }}
        >
          Артикулы: {["1234567890", "1234567890", "1234567890"].join(", ")}
        </Typography>
        <Typography variant="body2">{`В наличии: ${"10"} шт.`}</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2" color="secondary.main" sx={{ fontSize: "1.1rem" }}>
          Цена: <b>{currencyFormatter(1000)}</b>
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, justifyContent: "space-between" }}>
        <Box>
          <IconButton sx={{ p: "8px" }} onClick={handleMinus}>
            <RemoveIcon fontSize="small" />
          </IconButton>
          <TextField
            size="small"
            value={count}
            onChange={handleChangeCount}
            inputProps={{ style: { textAlign: "center", paddingLeft: 0, paddingRight: 0 } }}
            sx={{ width: "40px" }}
          />
          <IconButton sx={{ p: "8px" }} onClick={handlePlus}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
        <Button size="medium" variant="contained">
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
};

export default PartCard;
