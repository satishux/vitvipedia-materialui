import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Pagination from '@mui/material/Pagination';
import SubsPanel from '../components/ui/SubsPanel';
import actions from "../store/actions";

// --------- images

import Poster from '../blog-fotos/poster-viti.jpg';

const useStyles = makeStyles(theme => ({
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  hero: {
    width: '100%',
    height: '100%'
  },
  imgPoster: {
    width: '100%',
    marginTop: '-1.7em'
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    color: '#000'
  },
  card: {
    maxWidth: '100%'
  },
  mediaContainer: {
    margin: '-1rem -1rem 0rem -1rem'
  },

  media: {
    height: 240,
    width: '100%',
    objectFit: 'contain'
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between'
  },
  author: {
    display: 'flex',
    alignItems: 'center'
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  styleCard: {
    textDecoration: 'none',
    color: 'inherit',
    textDecorationColor: 'inherit'
  },
  titleSubsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  avatar: {
    borderRadius: '50%',
    height: '40px'
  }
}));

const Blog = ({articles}) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const search = location.search;

  let pageVal = 1;

  // ?page=1 || ''
  if (search.length > 0) {
    //?page=20&test=20
    const query = search.substr(1, search.length);
    const queryArr = query.split('&').map(item => {
      return {
        prop: item.split('=')[0],
        val: parseInt(item.split('=')[1])
      };
    });
    const pageProp = queryArr.find(item => item.prop === 'page');
    pageVal = pageProp.val;
  }

  // http://localhost:3000/blog?page=1

  // const [blogData, setBlogData] = useState([...articlesList].reverse());
  const [blogData, setBlogData] = useState([]);
  const [page, setPage] = useState(pageVal);
  const [articlePerPage] = useState(6);

  const getTotalPages = () => {
    let totalPages = blogData.length / articlePerPage; // 1
    let remainder = blogData.length % articlePerPage; // 1

    if (remainder > 0) {
      return Math.floor(totalPages) + 1;
    }
    return Math.floor(totalPages);
  };

  useEffect(() => {

      setBlogData(articles);
  }, [articles]);

  // useEffect(() => {
  //   let isMounted = true;
  //   const getPosts = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://backend.vitivipedia.com/wp-json/vitivipedia/v1/posts'
  //       );
  //       const posts = response.data; // wordpress format
  //       if (isMounted) {
  //         saveArticles(posts);
  //         setBlogData(posts);
  //       }

  //     } catch(err) {
  //       console.log(err);

  //     }
      
  //   };

  //   getPosts();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  useEffect(() => {
    if (location.search.length > 0) {
      //?page=20&test=20
      const query = location.search.substr(1, location.search.length);
      const queryArr = query.split('&').map(item => {
        return {
          prop: item.split('=')[0],
          val: parseInt(item.split('=')[1])
        };
      });
      const pageProp = queryArr.find(item => item.prop === 'page');
      setPage(pageProp.val);
    }
  }, [location]);

  const getPageArticles = articles => {
    const start = (page - 1) * articlePerPage + 1; // 1
    let end = start + articlePerPage;
    const updatedArticles = [...articles];

    const pageArticles = updatedArticles.slice(start - 1, end - 1);
    return pageArticles;
  };

  const reorgenizeArticles = articles => {
    // we need to separate bookmarked and not bookmarked

    const bookmarkedArticles = articles.filter(
      (item, index) => item.bookmarked
    );

    const notBookmarkedArticles = articles.filter(
      (item, index) => !item.bookmarked
    );

    if (bookmarkedArticles.length === 0) {
      return [...blogData].reverse();
    } else {
      return [...bookmarkedArticles, ...notBookmarkedArticles];
    }
  };

  // useEffect(() => {
  //   let updatedBlogData = blogData.map(item => {
  //     if (localStorage.getItem(item.title)) {
  //       return {
  //         ...item,
  //         bookmarked: true
  //       };
  //     }
  //     return item;
  //   });
  //   const updatedData = reorgenizeArticles(updatedBlogData);
  //   setBlogData(updatedData);
  // }, []);

  const toggleBookMarked = item => {
    // toogle bookmark
    // 1 - either add or remove item from local storage
    // 2 - update blogData state and set item bookmarked true or false
    if (item.bookmarked) {
      localStorage.removeItem(item.title);
    } else {
      localStorage.setItem(item.title, true);
    }

    let updatedBlogData = [...blogData];

    const index = updatedBlogData.findIndex(i => i.title === item.title);

    console.log(index);
    updatedBlogData[index].bookmarked = !item.bookmarked ? true : false;
    const updatedData = reorgenizeArticles(updatedBlogData);
    setBlogData(updatedData);
  };

  return (
    <div>
      <Box className={classes.hero}>
        <img
          className={classes.imgPoster}
          src={Poster.toString()}
          alt="poster"
        />
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid item className={classes.titleSubsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Artículos
          </Typography>
          <SubsPanel />
        </Grid>

        <Grid container spacing={3}>
          {blogData.length > 0 && getPageArticles(blogData).map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={item.title + idx}>
              <Link
                to={{ pathname: item.route, state: { data: item } }}
                style={{ textDecoration: 'none' }}
              >
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className={classes.mediaContainer}>
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.img}
                            className={classes.media}
                          />
                        )}
                      </div>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        dangerouslySetInnerHTML={{ __html: item.excerpt }}
                      />
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      {item.avatar && (
                        <img
                          src={item.avatar}
                          alt={item.avatar}
                          className={classes.avatar}
                        />
                      )}
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          {item.author}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon
                        style={{ color: item.bookmarked ? 'red' : 'gray' }}
                        onClick={e => {
                          toggleBookMarked(item);
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      />
                    </Box>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination
            count={getTotalPages()}
            page={page}
            shape="rounded"
            variant="outlined"
            onChange={(e, value) => {
              history.push(location.pathname + '?page=' + value);
            }}
          />
        </Box>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(Blog);
