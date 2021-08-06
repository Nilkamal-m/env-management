import { Button, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectProductList,
  sortProductByPrice,
  sortProductByQnt,
} from "../features/productSlice";
import ProductList from "./ProductList";

const title = [
  {
    id: 0,
    name: "Product Name",
  },
  {
    id: 1,
    name: "Product Description",
  },
  {
    id: 2,
    name: "Product Price",
  },
  {
    id: 3,
    name: "Product Quantity",
  },
  {
    id: 4,
    name: "Product Image",
  },
];

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductList);
  const sortByQnt = () => {
    dispatch(sortProductByQnt());
  };
  const sortByPrice = () => {
    dispatch(sortProductByPrice());
  };
  return (
    <>
      <Button
        component={Link}
        to="/products/create"
        color="primary"
        variant="outlined"
      >
        Add Product
      </Button>
      <Button onClick={sortByQnt}>Sort by quantity</Button>
      <Button onClick={sortByPrice}>Sort by Price</Button>
      <Card>
        <Grid container style={{ margin: "1%", padding: "2%" }}>
          {title.map((item, key) => (
            <Grid key={item.id} item xs={2} spacing={2}>
              <Typography>{item.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
      <div>
        {products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
