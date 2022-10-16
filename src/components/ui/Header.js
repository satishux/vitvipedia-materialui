import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import FavoriteIcon from '@mui/icons-material/Favorite';

import logo from '../../assets/logo.svg';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import actions from '../../store/actions';
import UserDropdown from './UserDropdown';
import { Avatar } from '@mui/material';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  //this push the content underneath the header
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.25em'
    }
  },
  logo: {
    height: '6em',
    margin: '0 auto',
    //marginLeft: '1em',
    [theme.breakpoints.down('lg')]: {
      height: '4.5em'
    },
    [theme.breakpoints.down('sm')]: {
      height: '3.5em'
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '25px'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 100,
    marginLeft: '35px',
    '&.Mui-selected': {
      color: 'black'
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },

  drawerIconContainer: {
    marginLeft: 'auto',

    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.blue,
    opacity: 0.7
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  ctaButton: {
    color: '#c72121'
  },
  mapHeaderIcon: {
    marginLeft: '0.3em',
    fontSize: '2em'
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      width: '100%'
      //height: '4.5em'
    }
  },
  comunidadesStyleBtn: {
    color: 'black',
    borderRadius: '50%',
    cursor: 'pointer',
    padding: '0.5em',
    backgroundColor: '#F2F2F2',

    '&:hover': {
      backgroundColor: '#004874'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0em 1em 0em 1em'
    }
  },
  userAvatar: {
    backgroundColor: '#c72121'
  }
}));


const Header = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { setIsLogoClicked } = props;
  // const iOS = process && process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iOS = false;
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const [userDropdownEl, setUserDropdownEl] = React.useState(null);
  const { headerMapToggleVal, toggleDrawer } = props;

  useEffect(() => {
    toggleDrawer(openDrawer)
  }, [openDrawer, toggleDrawer])

  useEffect(() => {
    if(headerMapToggleVal) {
      setOpenDrawer(false);
    }
  }, [headerMapToggleVal])

  const handleClick = event => {
    setUserDropdownEl(event.currentTarget);
  };

  const handleUserDropdownClose = () => {
    setUserDropdownEl(null);
  };

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const [menuOptions] = useState([
    { name: 'Aprende', link: '/aprende', activeIndex: 1, selectedIndex: 0 },
    { name: 'Vino', link: '/vino', activeIndex: 1, selectedIndex: 1 },
    // {
    //   name: 'Destilados',
    //   link: '/destilados',
    //   activeIndex: 1,
    //   selectedIndex: 2
    // },
    { name: 'café', link: '/cafe', activeIndex: 1, selectedIndex: 3 }
  ]);

  const [routes] = useState([
    { name: 'Inicio', link: '/', activeIndex: 0 },
    { name: 'Blog', link: '/blog', activeIndex: 1 },
    { name: 'Sobre', link: '/sobre', activeIndex: 2 },
    // { name: 'Aprende', link: '/aprende', activeIndex: 3 },
    { name: 'Contacto', link: '/contacto', activeIndex: 3 },
    { name: 'Productores', link: '/productores', activeIndex: 4 }
  ]);

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      const loc = '/' + window.location.pathname.split('/')[1];
      switch (loc) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={
              route.activeIndex === 4
                ? [classes.tab, classes.ctaButton].join(' ')
                : classes.tab
            }
            component={Link}
            to={route.link}
            label={route.name}
          />
        ))}
        {/* /> */}
        {props.favWines.length > 0 && (
          <Tab
            className={classes.tab}
            component={Link}
            onClick={() => props.toggleFavWines()}
            style={{ marginLeft: '10px', minWidth: '60px' }}
            label={<FavoriteIcon style={{ color: '#9e1e1e' }} />}
          />
        )}
        {props.user && (
          <Tab
            className={classes.tab}
            component={Link}
            onClick={e => {
              handleClick(e);
            }}
            style={{ marginLeft: '10px', minWidth: '60px' }}
            label={
              <Avatar className={classes.userAvatar}>
                {props.user.firstName?.substring(0, 1).toUpperCase()}
              </Avatar>
            }
          />
        )}
        {/* {!props.user && (
          <Tab
            className={classes.tab}
            component={Link}
            onClick={() => history.push('/login')}
            style={{ marginLeft: '10px', minWidth: '60px' }}
            label="login"
          />
        )} */}
      </Tabs>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={event => {
              handleMenuItemClick(event, i);
              props.setValue(3);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 3}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(route => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          {props.favWines.length > 0 && (
            <ListItem divider button onClick={() => props.toggleFavWines()}>
              <ListItemText
                className={classes.drawerItem}
                disableTypography
                style={{ display: 'flex' }}
              >
                <FavoriteIcon style={{ color: '#9e1e1e' }} /> &nbsp; Vinos
                favoritos
              </ListItemText>
            </ListItem>
          )}
          {/* {props.user && (
            <ListItem
              divider
              button
              onClick={() => {
                history.push('/carrito');
              }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
                style={{ display: 'flex' }}
              >
                <ShoppingCartBadge
                  badgeContent={props.cart.length}
                  color="secondary"
                >
                  <ShoppingCartIcon
                    style={{ color: '#9e1e1e', fontSize: '30px' }}
                  />
                </ShoppingCartBadge>{' '}
                &nbsp;&nbsp;&nbsp; Carrito
              </ListItemText>
            </ListItem>
          )} */}
          {/* {!props.user && (
            <ListItem divider button onClick={() => history.push('/login')}>
              <ListItemText
                className={classes.drawerItem}
                disableTypography
                style={{ display: 'flex' }}
              >
                Login
              </ListItemText>
            </ListItem>
          )} */}
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        size="large">
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <div className={classes.headerContainer}>
              {location.pathname === '/' && (
                <MapOutlinedIcon
                  size="large"
                  className={`${classes.mapHeaderIcon} ${classes.comunidadesStyleBtn}`}
                  onClick={() => props.headerMapToggle()}
                >
                  <MenuIcon fontSize="inherit" />
                </MapOutlinedIcon>
              )}

              <Button
                component={Link}
                to="/"
                disableRipple
                onClick={() =>
                  props.value === 0 ? setIsLogoClicked(true) : props.setValue(0)
                }
                className={classes.logoContainer}
                style={{ width: location.pathname === '/' ? '100%' : null }}
              >
                <img
                  className={classes.logo}
                  alt="vitivipedia logo"
                  src={logo}
                />
              </Button>
            </div>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <UserDropdown
        anchorEl={userDropdownEl}
        handleClose={handleUserDropdownClose}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    favWines: state.fevoriteWineList,
    cart: state.cart,
    user: state.user,
    headerMapToggleVal: state.headerMapToggle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: (value) => dispatch(actions.toggleDrawer(value)),
    toggleFavWines: () => dispatch(actions.toggleFavWines()),
    headerMapToggle: () => dispatch(actions.headerMapToggle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
