import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AdminRoute from "../Login/AdminRoute/AdminRoute";

import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import MyOrder from "./MyOrder/MyOrder";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import PrivateRoute from "../Login/PrivateRoute/PrivateRoute";
import AddReview from "./AddReview/AddReview";
import Pay from "./Pay/Pay";
import AddProduct from "./AddProduct/AddProduct";
import ManageProduct from "./ManageProduct/ManageProduct";
import ManageOrders from "./ManageOrders/ManageOrders";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/appointment">
        <Button color="inherit">appointment</Button>
      </Link>
      <Link to={`${url}/addreview`}>
        <Button color="inherit">Dashboard</Button>
      </Link>
      <Link to={`${url}/addreview`}>
        <Button color="inherit">Dashboard</Button>
      </Link>
      <Link to={`${url}/pay`}>
        <Button color="inherit">Pay</Button>
      </Link>
      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/addproduct`}>
            <Button color="inherit">Add Product</Button>
          </Link>
        </Box>
      )}
      {/* <Link to="/">Add Review</Link>

        <Link to="/">Manage Orders</Link>

        <ListItem button>
          <ListItemText>
            <Link to={`${url}/pay`}>Pay</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/">Make Admin</Link>
          </ListItemText>
        </ListItem> */}

      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrder />
          </Route>
          <PrivateRoute path={`${path}/addreview`}>
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path={`${path}/pay`}>
            <Pay />
          </PrivateRoute>
          <PrivateRoute path={path}>
            <MyOrder />
          </PrivateRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageproduct`}>
            <ManageProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageorder`}>
            <ManageOrders />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
