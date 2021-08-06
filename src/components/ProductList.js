import { Button, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  const { id, pname, description, price, quantity, image } = product;
  return (
    <>
      <Card style={{ margin: "1%", padding: "2%" }}>
        <Grid container style={{ margin: "1%", padding: "2%" }}>
          <Grid item xs={2}>
            <Typography>{pname}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{price}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{quantity}</Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={image}></img>
          </Grid>
          <Grid item xs={2}>
            <Button
              component={Link}
              to={`/products/${id}/edit`}
              variant="outlined"
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ProductList;
