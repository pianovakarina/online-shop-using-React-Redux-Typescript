import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { IProduct } from "../model";

interface IProductProps {
  product: IProduct;
}
const Product: React.FC<IProductProps> = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Stack
      marginBottom="30px"
      border="1px solid grey"
      borderRadius="15px"
      boxShadow="5px 5px rgba(0,0,0,0.1)"
      flex="0 1 50%"
      alignContent="center"
      padding="20px"
    >
      <Stack alignItems="center">
        <img src={product.image} alt={product.title} width="100px"></img>
      </Stack>
      <Typography textAlign="center" variant="h6" margin="10px">
        {product.title}
      </Typography>
      <Typography
        textAlign="center"
        variant="h5"
        marginBottom="10px"
        fontWeight="600"
      >
        {product.price}
      </Typography>
      {isVisible ? (
        <Button variant="contained" onClick={changeVisible}>
          Hide Details
        </Button>
      ) : (
        <Button variant="outlined" onClick={changeVisible}>
          Show Details
        </Button>
      )}
      {isVisible && (
        <Typography variant="caption" display="block">
          {product.description}
        </Typography>
      )}
    </Stack>
  );
};

export default Product;
