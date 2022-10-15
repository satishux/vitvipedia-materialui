import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import ArticleComponent from '../../blog-post/Article/Article';
import { useStyles } from './styles';


const Articles = ({ articles }) => {
  const classes = useStyles();
  const [randomArticles, setRandomArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if(!articles) return;
    const tempArray = [...articles]
      .sort(function () {
        return Math.random() - 0.5;
      })
      .slice(0, 8);

    setRandomArticles(tempArray);
  }, [articles]);

  return (
    <>
      <ArticleComponent onLoaded={() => setLoaded(true)} />
      {loaded && <>
        <h3 style={{ marginLeft: '7.5%' }}>Otros artículos</h3>
        <hr className={classes.hrStyle}></hr>
        <Grid container className={classes.mainContainer}>
          {randomArticles.map((val, idx) => (
            <Grid key={idx} item lg={3} className={classes.individualGrid}>
              <Link to={{ pathname: val.route, state: val }} className={classes.linkStyle}>
                <Grid container>
                  <Grid item lg={6} xs={6}>
                    <h3 className={classes.h3Style}>{val.title}</h3>
                  </Grid>
                  <Grid item lg={6} xs={6} className={classes.imgStyle}>
                    <img
                      className={classes.imgStyling}
                      src={val.img}
                      alt={val.title}
                    />
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          ))}
        </Grid>
      </>}

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(Articles);
