import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import articlesList from '../components/articlesList';

// import ElaboracionVinoTinto from '../blog-post/ElaboracionVinoTinto';
// import ElaboracionVinoBlanco from '../blog-post/ElaboracionVinoBlanco';
// import ElaboracionVinoRosado from '../blog-post/ElaboracionVinoRosado';
// import ElaboracionEspumoso from '../blog-post/ElaboracionEspumoso';
// import FermentacionCarbonica from '../blog-post/FermentacionCarbonica';
// import Pisco from '../blog-post/Pisco';
// import Tequila from '../blog-post/Tequila';
// import Mezcal from '../blog-post/Mezcal';
// import MasterSommelier from '../blog-post/MasterSommelier';
// import Wset from '../blog-post/Wset';

import ArticleComponent from '../blog-post/Article';

const useStyles = makeStyles(theme => ({
  imgStyling: {
    height: '6em'
  },
  individualGrid: {
    marginBottom: '1.5em',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: '25%',
      padding: '0em 3em'
    },
    [theme.breakpoints.down('lg')]: {
      width: '50%',
      padding: '0em 5em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0em 2.5em'
    }
  },

  linkStyle: {
    textDecoration: 'none',
    color: 'inherit',
    width: '100%'
  },
  h3Style: {
    fontWeight: 400,
    fontFamily: 'Lora',
    fontSize: '0.9em'
  },
  imgStyle: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  hrStyle: {
    width: '85%',
    marginBottom: '2.5em'
  }
}));
const Article = () => {
  const classes = useStyles();
  // const { page } = useParams();
  // const [pageName, setPageName] = useState(null);
  const [article, setArticle] = useState(null);
  const [randomArticles, setRandomArticles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const tempArray = [...articlesList]
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
      const response = await axios.get(
        'http://backend.vitivipedia.com/wp-json/vitivipedia/v1/post/' + slug
      );
      const post = response.data; // wordpress format
      setArticle(post);
      //setBlogData(posts);
    };
    if (location.pathname && location.pathname !== '') {
      const slug = location.pathname.split('/')[2];
      getPost(slug);
    }
    // switch (page) {
    //   case 'elaboracion-vino-tinto':
    //     setPageName(<ElaboracionVinoTinto />);
    //     break;
    //   case 'elaboracion-vino-blanco':
    //     setPageName(<ElaboracionVinoBlanco />);
    //     break;
    //   case 'elaboracion-vino-rosado':
    //     setPageName(<ElaboracionVinoRosado />);
    //     break;
    //   case 'elaboracion-vino-espumoso':
    //     setPageName(<ElaboracionEspumoso />);
    //     break;
    //   case 'fermentacion-carbonica':
    //     setPageName(<FermentacionCarbonica />);
    //     break;
    //   case 'elaboracion-pisco':
    //     setPageName(<Pisco />);
    //     break;
    //   case 'elaboracion-tequila':
    //     setPageName(<Tequila />);
    //     break;
    //   case 'elaboracion-mezcal':
    //     setPageName(<Mezcal />);
    //     break;
    //   case 'master-sommelier':
    //     setPageName(<MasterSommelier />);
    //     break;
    //   case 'wset-wine-spirit-education-trust':
    //     setPageName(<Wset />);
    //     break;
    //   default:
    //     setPageName(<div>Página no encontrada</div>);
    // }
  }, []);

  return (
    <div>
      {article ? <ArticleComponent post={article} /> : null}
      <h3 style={{ marginLeft: '7.5%' }}>Otros artículos</h3>
      <hr className={classes.hrStyle}></hr>
      <Grid container className={classes.mainContainer}>
        {randomArticles.map((val, idx) => (
          <Grid item lg={3} className={classes.individualGrid}>
            <Link to={val.route} className={classes.linkStyle}>
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

export default Article;
