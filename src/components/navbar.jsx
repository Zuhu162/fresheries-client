import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { checkOut, decrement } from "../redux/shoppingCartSlice";
import { Button } from "@mui/material";

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const dispatch = useDispatch();

  let totalCost = 0;
  const items = useSelector((state) => state.shoppingCart.items);
  items.forEach((item) => (totalCost += item.price));

  const [checkout, setCheckout] = useState(false);

  const handleDecrement = (item) => {
    dispatch(decrement({ item }));
  };

  const handleCheckout = () => {
    setCheckout(true);
    dispatch(checkOut());
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        {checkout && (
          <Alert severity="success">
            Thank you for your purchase your items have been shipped!
          </Alert>
        )}
      </Toolbar>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText>Total Items: {items.length}</ListItemText>
        </ListItem>
        <ListItem button onClick={handleCheckout} sx={{ bgcolor: "#13AD4C" }}>
          <ListItemIcon>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }}>
            Proceed to Checkout: ${totalCost}
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      {items.map((item) => (
        <List>
          <ListItem>
            <img src={item.image} style={{ height: "20px" }}></img>
            <ListItemText sx={{ ml: 2 }}>{`${item.minAmount}${
              item.minAmount < 1 ? "gm" : "kg"
            } - ${item.name} - $${item.price}`}</ListItemText>
            <ListItemIcon>
              <Button>
                <RemoveCircleIcon onClick={() => handleDecrement(item)} />
              </Button>
            </ListItemIcon>
            <Badge badgeContent={item.count} color="success"></Badge>
          </ListItem>
        </List>
      ))}
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
          width: { sm: `calc(100%)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: "none" } }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Fresheries
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
            display: { xs: "none", lg: "block" },
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
    </Box>
  );
}
export default ResponsiveDrawer;
