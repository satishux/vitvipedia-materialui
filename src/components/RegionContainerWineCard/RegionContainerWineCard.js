import React, { useState } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import { useHistory } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import actions from '../../store/actions';
import WineModal from '../WineModal/WineModal';
import { useStyles } from './styles';


const RegionContainerWineCard = ({
  wineData,
  name,
  img,
  showHeart,
  fevoriteWineList,
  saveFavWines,
  clickable
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      localStorage.removeItem(name);
      const newList = fevoriteWineList.filter(
        item => item.name !== wineData.name
      );

      setIsFavorite(false);
      saveFavWines(newList);
    } else {
      localStorage.setItem(name, true);
      const newList = [...fevoriteWineList];
      newList.push(wineData);
      saveFavWines(newList);
      setIsFavorite(true);
    }
  };

  return <>
    <a
      href="_"
      className={classes.cardLink}
      onClick={e => {
        e.preventDefault();
        if(clickable) {
          history.push(`/vino/${wineData.slug}`)
        } else {
          setModalOpen(true);
        }
      }}
    >
      <Card className={classes.cardComponentroot}>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="subtitle1"
            style={{ padding: '10px', fontWeight: 'bold', color: '#666' }}
          >
            {name}
          </Typography>
          {showHeart && (
            <IconButton
              aria-label="add to favorites"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                toggleFavorite();
              }}
              size="large">
              <FavoriteIcon style={{ color: isFavorite ? 'red' : 'gray' }} />
            </IconButton>
          )}
        </Box>
        <Box className={classes.imgStyle}>
          <img className={classes.media} src={img} alt={name} />
        </Box>
      </Card>
    </a>
    {modalOpen && (
      <WineModal
        slug={wineData.slug}
        open={modalOpen}
        onClose={setModalOpen}
      />
    )}
  </>;
};

const mapStateToProps = state => {
  return {
    fevoriteWineList: state.fevoriteWineList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFavWines: data => dispatch(actions.saveFevoriteWines(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegionContainerWineCard);
