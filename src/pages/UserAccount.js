import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserProfile from '../components/ui/UserProfile';
import UserAddresses from '../components/ui/UserAddresses';
import UserDelete from '../components/ui/UserDelete';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    zIndex: 999
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '6em'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  dropdownBtn: {
    backgroundColor: '#c72121',
    marginBottom: '1em',
    width: '100%',
    color: 'white'
  }
}));

const UserAccount = ({ user, loading }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const listArray = [
    {
      id: 1,
      text: 'Mis datos personales'
    },
    {
      id: 2,
      text: 'Mis direcciones'
    },
    {
      id: 3,
      text: 'Cancelar cuenta'
    }
  ];

  const [selectedItem, setSelectedItem] = useState(1);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <Divider />
      <List>
        {listArray.map((item, index) => (
          <ListItem
            button
            key={item.text}
            onClick={() => setSelectedItem(item.id)}
            selected={item.id === selectedItem}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  const dropdown = (
    <Button onClick={e => handleClick(e)} className={classes.dropdownBtn}>
      {listArray.filter(item => item.id === selectedItem)[0].text} &nbsp;{' '}
      <KeyboardArrowDownIcon />
    </Button>
  );

  const menu = (
    <Menu
      id="options-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      style={{ zIndex: 1350 }}
    >
      {listArray.map(item => (
        <MenuItem
          onClick={() => {
            setSelectedItem(item.id);
            handleClose();
          }}
        >
          {item.text}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      {!matches && drawer}
      <Container maxWidth="md">
        <main className={classes.content}>
          {matches && dropdown}
          {selectedItem === 1 && <UserProfile />}

          {selectedItem === 2 && <UserAddresses />}

          {selectedItem === 3 && <UserDelete />}
        </main>
      </Container>
      {menu}
    </div>
  );
};

export default UserAccount;
