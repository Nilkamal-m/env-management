import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { saveProduct } from "../features/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: {
      id: uuidv4(),
      pname: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(saveProduct(data));
    reset({
      pname: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
    });

    history.push("/");
  };
  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography>Add Product</Typography>
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
            ADD
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default AddProduct;
