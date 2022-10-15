import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import EspanaMapa from '../mapas/España.js';

import FavoriteWines from '../components/ui/FavoriteWines.js';

import actions from '../store/actions';

// --------- icons ---------- //
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import SideCcaaNavigation from '../components/ui/SideCcaaNavigation';

import inicialMapList from '../components/mapList';

import useStyles from './Inicio.styles';
import IconButton from '@mui/material/IconButton';
import RegionContainer from '../components/RegionContainer.js';

const Inicio = ({
  isLogoClicked,
  setIsLogoClicked,
  headerMapToggle,
  mapToggleHandler,
  region,
}) => {
  const [mapsList, toogleMapsList] = useState(inicialMapList);
  const [currentRegion, setCurrentRegion] = useState('Espana');
  const [regionTitle, setRegionTitle] = useState('España');
  const [mapHeight, setMapHeight] = useState(null);
  const [showRedWineList, setShowRedWineList] = useState(false);
  const [showWhiteWineList, setShowWhiteWineList] = useState(false);
  const [regionSelected, setRegionSelected] = useState(false);
  const [clickedRegion, setClickedRegion] = useState('Espana');
  const [size, setSize] = useState(0);

  const classes = useStyles();
  const mapRef = useRef();

  const toggleMapas = (mapName, isClicked) => {
    const updatedMapsList = [...mapsList];

    updatedMapsList.forEach(map => {
      if (map.name === mapName) {
        setRegionTitle(map.correctTitle);
        map.isVisible = true;
      } else {
        map.isVisible = false;
      }
    });
    toogleMapsList(updatedMapsList);

    setCurrentRegion(mapName);

    if (headerMapToggle) mapToggleHandler();

    if (mapName === 'Espana') {
      setRegionSelected(false);
    } else {
      setRegionSelected(true);
    }

    if (isClicked) {
      setClickedRegion(mapName);
    } else {
      setClickedRegion('Espana');
    }
  };

  //function to swap the list of wines

  const showRedWines = e => {
    // First we target parent button
    const button = e.target.closest('button');

    if (showRedWineList) {
      setShowRedWineList(false);
      // Here we remove css class
      button.classList.remove('wineBtnActive');
    } else {
      setShowRedWineList(true);
      button.classList.add('wineBtnActive');
    }
  };

  const showWhiteWines = e => {
    const button = e.target.closest('button');

    if (showWhiteWineList) {
      setShowWhiteWineList(false);
      button.classList.remove('wineBtnActive');
    } else {
      setShowWhiteWineList(true);
      button.classList.add('wineBtnActive');
    }
  };

  const toggleM = toggleMapas;

  useEffect(() => {
    if (isLogoClicked) {
      toggleM('Espana');
      setIsLogoClicked(false);
    }
  }, [isLogoClicked, setIsLogoClicked, toggleM]);

  // useEffect to get real time size of map component
  useEffect(() => {
    const resize = () => {
      setSize(window.outerWidth);

      if (window.outerWidth < 960) {
        setMapHeight(null);
        return;
      }
      if (mapRef.current) {
        const height = mapRef.current.clientHeight;
        setMapHeight(height);
      }
    };

    setTimeout(() => {
      resize();
    }, 100);
    window.addEventListener('resize', () => {
      resize();
    });
  }, []);


  return (
    <Container>
      <div className={classes.mapRoot}>
        <Grid container>
          <SwipeableDrawer
            open={headerMapToggle}
            onClose={() => mapToggleHandler()}
            onOpen={() => mapToggleHandler()}
            classes={{ paper: classes.drawer }}
          >
            <div className={classes.toolbarMargin} />
            <SideCcaaNavigation
              toggleMapas={toggleMapas}
              currentRegion={currentRegion}
              setCurrentRegion={setCurrentRegion}
              mapHeight={mapHeight}
              regionSelected={regionSelected}
            />
          </SwipeableDrawer>
          <Grid item xs={12} style={{ position: 'relative' }}>
            <Box
              color="text.primary"
              className={`${classes.mapContainer} ${classes.mapBorderRadius}`}
              ref={mapRef}
            >
              {mapsList.map((map, index) => {
                if (!map.isVisible) {
                  return null;
                }

                //'Doble' return 'cos Espana map is the only one getting those props
                if (map.component === EspanaMapa) {
                  return (
                    <map.component
                      className={classes.width}
                      src={map.component}
                      onRegionSelected={setCurrentRegion}
                      currentRegion={currentRegion}
                      key={index}
                      toggleMapas={toggleMapas}
                    />
                  );
                }

                let svgMap = (
                  <map.component
                    className={classes.width}
                    src={map.component}
                    key={index}
                  />
                );
                if (size <= 768) {
                  svgMap = (
                    <TransformWrapper>
                      <TransformComponent>
                        <map.component
                          className={[classes.width, classes.mapHeight].join(
                            ' '
                          )}
                          src={map.component}
                          key={index}
                        />
                      </TransformComponent>
                    </TransformWrapper>
                  );
                }
                return svgMap;
              })}
            </Box>

            <Box className={classes.containerButtons}>
              <IconButton
                variant="contained"
                className={`${classes.arrowBackStyle} ${classes.notShowArrowBiggerScreens}`}
                onClick={() => toggleMapas('Espana')}
                size="large">
                <ArrowBackIosIcon
                  style={{ position: 'relative', left: '4px' }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Grid container className={classes.bestWineContainer}>
          <RegionContainer region={clickedRegion} regionTitle={regionTitle} />
        </Grid>

        {/* <SwipeableDrawer
          anchor="right"
          open={showFav}
          onClose={() => toggleFavWines()}
          onOpen={() => toggleFavWines()}
        >
          <FavoriteWines />
        </SwipeableDrawer> */}
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    // showFav: state.showFav,
    headerMapToggle: state.headerMapToggle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // toggleFavWines: () => dispatch(actions.toggleFavWines()),
    mapToggleHandler: () => dispatch(actions.headerMapToggle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
