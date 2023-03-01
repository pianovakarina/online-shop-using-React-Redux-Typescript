import { Button, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import ModalWindow from "../components/ModalWindow";
import Product from "../components/Product";
import {
  errorLoadingSelector,
  fetchProducts,
  isLoadingSelector,
  productSelector,
} from "../redux/products/productSlice";
import { AppDispatch } from "../redux/store";

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  const closeModalWindow = () => {
    setIsOpen(false);
  };

  const products = useSelector(productSelector);
  const error = useSelector(errorLoadingSelector);
  const loading = useSelector(isLoadingSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Stack marginTop={7}>
        {loading && <Loading />}
        {error && <ErrorMessage error={error} />}
      </Stack>
      <Stack marginTop={4} width="300px">
        <Button variant="contained" onClick={handleOpenModal}>
          Open Modal Window
        </Button>
      </Stack>
      <ModalWindow openModal={isOpen} closeModal={closeModalWindow} />
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        marginTop={4}
      >
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </Stack>
    </Container>
  );
};

export default ProductPage;
