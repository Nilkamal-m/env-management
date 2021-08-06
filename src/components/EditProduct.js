import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import {
  clearProduct,
  getProduct,
  saveProduct,
  selectProduct,
  updateProduct,
} from "../features/productSlice";

const EditProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: {
      pname: "",
      description: "",
      price: "",
      quantity: "",
    },
  });

  const product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProduct(params.id));
    return () => {
      dispatch(clearProduct());
    };
  }, []);

  useEffect(() => {
    reset(product);
  }, [product]);

  const onSubmit = (data) => {
    dispatch(updateProduct(data));
    history.push("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Update Product</DialogTitle>

        <TextField
          inputProps={{ type: "hidden" }}
          margin="normal"
          {...register("id")}
        />
        <Controller
          control={control}
          name="pname"
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="dense"
              label="Name"
              placeholder="Name"
              id="pname"
              required
              fullWidth
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="dense"
              label="Description"
              placeholder="Description"
              id="description"
              fullWidth
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="dense"
              label="Price"
              placeholder="Price"
              type="number"
              id="price"
              required
              fullWidth
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="quantity"
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="dense"
              label="Quantity"
              placeholder="Quantity"
              type="number"
              id="quantity"
              required
              fullWidth
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="image"
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="dense"
              placeholder="Image"
              id="image"
              type="file"
              accept="image/*"
              fullWidth
              {...field}
            />
          )}
        />

        <Button
          variant="outlined"
          margin="dense"
          fullWidth
          color="primary"
          type="submit"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
