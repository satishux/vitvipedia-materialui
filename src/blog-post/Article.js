import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import { connect } from "react-redux";
import { useLocation} from 'react-router-dom';
// import Disqus from '../components/ui/Disqus';

// // -------- pictures ---------- /
// import copaTinto from '../blog-fotos/elaboracionTinto/vino-tinto-botella-copa.jpg';
// import baneraMaceracion from '../blog-fotos/elaboracionTinto/banera-maceracin-vino-tinto.jpg';
// import cubaFermentacion from '../blog-fotos/elaboracionTinto/cuba-de-fermentacion.jpg';
// import cubaVino from '../blog-fotos/elaboracionTinto/cuba-vino.jpg';
// import depositoAcero from '../blog-fotos/elaboracionTinto/depositos-acero-inoxidable.jpg';
// import despalilladora from '../blog-fotos/elaboracionTinto/despalilladora-uvas.jpg';
// import embotelladora from '../blog-fotos/elaboracionTinto/maquina-embotelladora.jpg';
// import mezclaBordelesa from '../blog-fotos/elaboracionTinto/mezcla-bordelesa-vino.jpg';
// import racimoTintas from '../blog-fotos/elaboracionTinto/racimo-uvas-tintas.jpg';
// import tolvaUvasTintas from '../blog-fotos/elaboracionTinto/tolva-uvas-tintas.jpg';
// import decantacion from '../blog-fotos/elaboracionTinto/proceso-decantacion-vino.jpg';
// import prensa from '../blog-fotos/elaboracionTinto/prensa-uvas-tintas.jpg';

import SocialMediaIcons from '../components/ui/SocialMediaIcons';

//import Pablo from '../blog-fotos/pablo.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    fontFamily: 'Lora',
    padding: '20px',
    paddingBottom: '11em',
  },
  marginPage: {
    width: '640px',
    [theme.breakpoints.up('md')]: {
      margin: '0px 64px'
    },
    [theme.breakpoints.down('lg')]: {
      margin: '0px 48px'
    },
    [theme.breakpoints.down('md')]: {
      margin: '0px 24px',
      width: '400px',
    }
  },
  titleStyle: {
    fontFamily: 'Raleway',
    fontWeight: 400,
    fontSize: '2.8em'
  },
  subtitle: {
    fontWeight: 300,
    color: '#888'
  },
  articleInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  authorContainer: {
    display: 'flex'
  },
  authorStyle: {
    marginLeft: '10px',
    fontSize: '0.9em',
    color: '#888'
  },
  iconButton: {
    color: 'white',
    background: '#333',
    padding: '0.3em',
    marginLeft: '0.5em',

    '&:hover': {
      background: '#000000'
    }
  },
  mainImgStyle: {
    width: '100%',
    height: '300px',
    objectFit: 'contain'
  },
  imgContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3em'
  },
  paragraphStyleContainer: {
    [theme.breakpoints.up('md')]: {
      fontSize: '21px'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '18px'
    },

    '& p': {
      [theme.breakpoints.up('md')]: {
        lineHeight: '32px'
      },
      [theme.breakpoints.down('md')]: {
        lineHeight: '28px'
      }
    },
    '& img': {
      [theme.breakpoints.up('md')]: {
        marginTop: '1em'
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '1em'
      }
    }
  },
  paragraphStyle: {
    [theme.breakpoints.up('md')]: {
      lineHeight: '32px'
    },
    [theme.breakpoints.down('md')]: {
      lineHeight: '28px'
    }
  },
  responsiveImgs: {
    [theme.breakpoints.up('md')]: {
      width: '60%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '60%',
      topMargin: '1em'
    }
  },
  responsiveImgBottle: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '25%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '35%',
      topMargin: '1em'
    }
  },
  responsiveImglong: {
    [theme.breakpoints.up('md')]: {
      width: '40%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '40%',
      topMargin: '1em'
    }
  }
}));

const Article = props => {
  const classes = useStyles();
  const { post } = props;
  const location = useLocation();
  const [article, setArticle] = useState({});

  useEffect(() => {
    if(post && post.title) {
      setArticle(post);
    }
  }, [post]);

  useEffect(() => {
      if(post.title) return;
      if(props.articles && props.articles.length > 0) {
        const index = props.articles.findIndex(item => item.title == location.pathname);
        if(index !== -1) {
          setArticle(props.articles[index]);
        }
      }

  }, [location.pathname])



  //const [getTitle] = useState('¿Qué es el vino tinto y cómo se elabora?');

  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>{article.title}</h1>
        <h2 className={classes.subtitle}>El proceso paso a paso.</h2>
        <div className={classes.articleInfo}>
          <div className={classes.authorContainer}>
            <div className={classes.avatarStyle}>
              <Avatar img src={article.avatar} alt={article.author} />
            </div>
            <div className={classes.authorStyle}>
              <p>{article.author}</p>
            </div>
          </div>
          <SocialMediaIcons title={article.title} />
        </div>
        <div className={classes.imgContainerStyle}>
          <img className={classes.mainImgStyle} src={article.img} alt={article.img} />
        </div>
        <div
          className={classes.paragraphStyleContainer}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* <Disqus url={window.location.href} identifier={window.location.href} /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(Article);

