import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Typography } from "@material-ui/core";
import AddProduct from "./AddProduct";

import { Route, Switch } from "react-router-dom";
import EditProduct from "./EditProduct";
import Products from "./Products";

export default function Home() {
  const user = useSelector(selectUser);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Logout />
        </Toolbar>
      </AppBar>

      <div className="home">
        <Typography>Welcome {user.name}</Typography>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/create" component={AddProduct} />
          <Route exact path="/products/:id/edit" component={EditProduct} />
        </Switch>
      </div>
    </div>
  );
}
