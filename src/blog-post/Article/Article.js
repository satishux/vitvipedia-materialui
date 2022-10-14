import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { connect } from "react-redux";
import { useLocation} from 'react-router-dom';
// import Disqus from '../components/ui/Disqus';
import SocialMediaIcons from '../../components/ui/SocialMediaIcons';
import { useStyles } from './styles';

const Article = ({post, articles}) => {
  const classes = useStyles();
  const location = useLocation();
  const [article, setArticle] = useState({});

  useEffect(() => {
    if(post && post.title) {
      setArticle(post);
    }
  }, [post]);

  useEffect(() => {
      if(post.title) return;
      if(articles && articles.length > 0) {
        const index = articles.findIndex(item => item.title.toString() === location.pathname.toString());
        if(index !== -1) {
          setArticle(articles[index]);
        }
      }

  }, [location.pathname, post, articles])



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

