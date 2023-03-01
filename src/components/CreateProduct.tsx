import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IProduct } from "../model";
import { fetchCreateProduct } from "../redux/products/productSlice";
import { AppDispatch } from "../redux/store";
interface ICreateModalProps {
  closeModal: () => void;
}

const CreateProduct: React.FC<ICreateModalProps> = ({ closeModal }) => {
  const formErrorText: Record<string, string> = {
    required: "This field must be filled",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "https://i.pravatar.cc",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const newCloseModal = () => {
    closeModal();
    reset();
  };
  const onSubmit: SubmitHandler<IProduct> = (data) => {
    console.log(data);
    dispatch(fetchCreateProduct(data));
    newCloseModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant="h5" textAlign="center" color="lightblue">
          Create new product
        </Typography>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl error={!!errors.title}>
              <InputLabel shrink sx={{ position: "static" }} required>
                Enter title of the product
              </InputLabel>
              <OutlinedInput
                {...field}
                fullWidth
                placeholder="_title product_"
              />
              {errors.title && (
                <FormHelperText>
                  {formErrorText[errors.title.type]}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl error={!!errors.price}>
              <InputLabel shrink sx={{ position: "static" }} required>
                Enter price of the product
              </InputLabel>
              <OutlinedInput {...field} fullWidth />
              {errors.price && (
                <FormHelperText>
                  {formErrorText[errors.price.type]}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl error={!!errors.description}>
              <InputLabel shrink sx={{ position: "static" }} required>
                Enter despription of the product
              </InputLabel>
              <OutlinedInput {...field} fullWidth />
              {errors.description && (
                <FormHelperText>
                  {formErrorText[errors.description.type]}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl error={!!errors.category}>
              <InputLabel shrink sx={{ position: "static" }} required>
                Enter category of the product
              </InputLabel>
              <OutlinedInput {...field} fullWidth autoComplete="off" />
              {errors.category && (
                <FormHelperText>
                  {formErrorText[errors.category.type]}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Button variant="outlined" type="submit">
          Create
        </Button>
      </Stack>
    </form>
  );
};

export default CreateProduct;
