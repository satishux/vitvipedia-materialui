import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ArticleComponent from '../../blog-post/Article/Article';
import { useStyles } from './styles';


const Articles = ({articles}) => {
  const classes = useStyles();
  const [article, setArticle] = useState(null);
  const [randomArticles, setRandomArticles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const tempArray = [...articles]
      .sort(function () {
        return Math.random() - 0.5;
      })
      .slice(0, 8);

    setRandomArticles(tempArray);
  }, []);

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = '#fff';
    window.scrollTo(0, 0, 'smooth'); // article was showing on the midle, this fixed it.
    return () => {
      document.querySelector('body').style.backgroundColor = '#EEEEEE';
    };
  }, [article]);

  useEffect(() => {
    
    const getPost = async slug => {
      const url = `http://backend.vitivipedia.com/wp-json/vitivipedia/v1/post/${slug}`;
      const response = await axios.get(url);
      const post = response.data; // wordpress format
      setArticle(post);
    };

    if (location.pathname && location.pathname !== '') {
      const slug = location.pathname.split('/')[2];
      getPost(slug);
    }
  }, [location]);

  return (
    <div>
      {article ? <ArticleComponent post={article} /> : null}
      <h3 style={{ marginLeft: '7.5%' }}>Otros artículos</h3>
      <hr className={classes.hrStyle}></hr>
      <Grid container className={classes.mainContainer}>
        {randomArticles.map((val, idx) => (
          <Grid item lg={3} className={classes.individualGrid}>
            <Link to={{ pathname: val.route, state: val}} className={classes.linkStyle}>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(Articles);
