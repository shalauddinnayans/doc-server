import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Drawer, useTheme } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const [state, setState] = React.useState(false);

  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    navItemBox: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    logo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
    logout: {
      color: "#fff",
    },
  });
  const { navItem, navIcon, navItemBox, logo, logout } = useStyle();

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                onClick={() => setState(true)}
                className={navIcon}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <>
                <Typography
                  className={logo}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  BuyBuy
                </Typography>
              </>
              <Box className={navItemBox}>
                <Link className={navItem} to="/">
                  <Button color="inherit">Home</Button>
                </Link>
                <Link className={navItem} to="/topsales">
                  <Button color="inherit">Top Sales</Button>
                </Link>
                <Link className={navItem} to="/contact">
                  <Button color="inherit">Contact us</Button>
                </Link>
                <Link className={navItem} to="/about">
                  <Button color="inherit">About</Button>
                </Link>
                {user?.email ? (
                  <>
                    <Link className={navItem} to="/dashboard">
                      <Button color="inherit">Dashboard</Button>
                    </Link>
                    <Button onClick={logOut} color="inherit">
                      Log Out
                    </Button>
                  </>
                ) : (
                  <Link className={navItem} to="/login">
                    <Button color="inherit">Login</Button>
                  </Link>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemText>
                    <Link to="/">Home</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link to="/login">Login</Link>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
