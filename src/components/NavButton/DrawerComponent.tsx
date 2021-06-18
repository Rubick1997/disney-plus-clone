import React, { useState, FunctionComponent } from "react";
import { Menu, ChevronLeft } from "@material-ui/icons";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    listItemText: {
      marginLeft: 0,
      fontSize: "10px",
    },
  };
});

type NavButtonTypes = {
  name: string;
  icon: React.ReactNode;
};

const DrawerComponent: FunctionComponent<{ navItems: NavButtonTypes[] }> = ({
  navItems,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
      >
        <Menu />
      </IconButton>
      <Drawer open={open} variant="persistent" anchor="left">
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <List>
          {navItems.map((item) => (
            <ListItem role="list-item" key={item.name} button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.name}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
