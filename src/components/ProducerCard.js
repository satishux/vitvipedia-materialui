import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../store/actions';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  cardImage: {
    height: 'auto',
    width: 200,
    [theme.breakpoints.down('md')]: {
      height: '200px',
      width: '100%',
      objectFit: 'cover'
    }
  }
}));

const ProducerCard = ({
  item,
  producer,
  showSpecificWines,
  selectedProducer,
  setSelectedProducer
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
        <Card
          style={{
            // display: 'flex',
            cursor: 'pointer',
            marginBottom: '1em',
            border:
              selectedProducer === item.term_id
                ? '1px solid #004874'
                : '1px solid transparent'
          }}
          onClick={() => {
            if (showSpecificWines) {
              showSpecificWines(item.term_id, producer.category.slug);
              setSelectedProducer(item.term_id);
            }
          }}
        >
          <Box className={classes.cardContainer}>
            {item.image && (
              <CardMedia
                component="img"
                className={classes.cardImage}
                image={item.image}
                alt={item.name}
              />
            )}
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <Typography variant="h6" component="h6" style={{ flex: 1 }}>
                  {item.name}
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  style={{
                    fontFamily: 'Roboto',
                    margin: '1em 0'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.description
                  }}
                />

                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '1em'
                  }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/productores/${item.slug}`}
                    onClick={e => {
                      e.stopPropagation();
                    }}
                    style={{ textTransform: 'initial' }}
                  >
                    Más detalles
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    selectedProducer: state.selectedProducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedProducer: id => dispatch(actions.setSelectedProducer(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProducerCard);
