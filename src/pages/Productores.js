import React, { useEffect, useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "center",
    flex: 1,
  },
  producersContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  cardContainer: {
    display: "flex",
    height: "200px",
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
  },
  cardImage: {
    height: "auto",
    width: 200,
    [theme.breakpoints.down('md')]: {
      height: "200px",
      width: "100%",
      objectFit: "cover",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  resetButton: {
    color: 'black',
    backgroundColor: '#ccc'
  }
  // imgStyling: {
  //   height: "100%",
  //   width: "100%",
  //   objectFit: "cover",
  // },
  // cardLayout: {
  //   display: "flex",
  //   margin: "-16px -16px -24px -16px",
  //   height: "170px",
  // },
  // cardStyling: {
  //   // marginTop: "2em",
  // },
  // imgContainer: {
  //   flex: "1 0 30%",
  //   display: "flex",
  //   justifyContent: "stretch",
  //   alignItems: "stretch",
  // },
  // cardContent: {
  //   flex: "1 0 70%",
  //   padding: "10px",
  //   boxSizing: "border-box",
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // contentDescription: {
  //   flex: 1,
  // },
}));

const Productores = () => {
  const [producers, setProducers] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);

  // category => region => parent = 0
  // sub category => producer => parent = some number

  useEffect(() => {
    let isMounted = true;
    const getProducers = async () => {
      setLoading(true);
      // const response = await axios.get(
      //   "https://backend.vitivipedia.com/wp-json/wc/v3/products/categories?per_page=100&consumer_key=ck_1dba763719cb378e99ec68def39b18b16e9cb3c7&consumer_secret=cs_fac9c617b03b9dc71562585a46772f4103585c48"
      // );

      const response = await axios.get(
        "https://backend.vitivipedia.com/wp-json/vitivipedia/v1/producers"
      );
      const producersData = response.data; // wordpress format

      if (isMounted) {
        const regions = [];
        producersData.forEach((item) => {
          const index = regions.findIndex((i) => i.value === item.region_slug);
          if (index === -1) {
            regions.push({ name: item.region_name, value: item.region_slug });
          }
        });

        setRegions(regions);

        setProducers(producersData);
      }

      setLoading(false);
    };

    getProducers();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={classes.root}>
      {loading && <Loader />}
      <div className={classes.producersContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1em",
                alignItems: 'center'
              }}
            >
              <FormControl className={classes.formControl}>
                <InputLabel id="region-select">Region</InputLabel>
                <Select
                  labelId="region-select"
                  id="region-select"
                  value={region}
                  onChange={(val) => {
                    setRegion(val.target.value);
                  }}
                >
                  {regions.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <IconButton className={classes.resetButton} size="large">
                <RotateLeftIcon
                  onClick={(e) => {
                    setRegion('');
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
          {!loading &&
            producers
              .filter((item) => item.parent > 0)
              .filter(item => {
                if(region !== '') {
                  if(region === item.region_slug) {
                    return true;
                  } else {
                    return false;
                  }
                } else {
                  return true;
                }
              })
              .map((producer) =>  (
                <Grid item xs={6} key={producer.slug}>
                  <Link to={`/productores/${producer.slug}`}>
                    <Card
                      style={{
                        // display: 'flex',
                        marginBottom: "1em",
                      }}
                    >
                      <Box className={classes.cardContainer}>
                        {producer.image && (
                          <CardMedia
                            component="img"
                            className={classes.cardImage}
                            image={producer.image}
                            alt={producer.name}
                          />
                        )}
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                          }}
                        >
                          <CardContent
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                            }}
                          >
                            <Typography
                              variant="h6"
                              component="h6"
                              style={{ flex: 1 }}
                            >
                              {producer.name}
                            </Typography>
                            <Typography
                              variant="p"
                              component="p"
                              style={{
                                fontFamily: "Roboto",
                                margin: "1em 0",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: producer.description,
                              }}
                            />

                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "1em",
                              }}
                            >
                              <Button
                                color="secondary"
                                component={Link}
                                to={`/`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  console.log("called");
                                }}
                              >
                                {producer.region_name}
                              </Button>
                              <Button
                                variant="contained"
                                component={Link}
                                to={`/productores/${producer.slug}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  console.log("called");
                                }}
                                style={{ textTransform: "initial" }}
                              >
                                Más detalles
                              </Button>
                            </Box>
                          </CardContent>
                        </Box>
                      </Box>
                    </Card>
                  </Link>

                  {/* <Card className={classes.cardStyling}>
                    <CardContent>
                      <div className={classes.cardLayout}>
                        {producer.image && (
                          <div className={classes.imgContainer}>
                            <img
                              className={classes.imgStyling}
                              src={producer.image}
                              alt={producer.title}
                            />
                          </div>
                        )}
                        <div className={classes.cardContent}>
                          <Typography variant="h4">{producer.name}</Typography>
                          <div className={classes.contentDescription}>
                            <Typography variant="body1" component="p">
                              {producer.description}
                            </Typography>
                          </div>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              marginTop: "1em",
                            }}
                          >
                            <Button
                              variant="contained"
                              component={Link}
                              to={`/productores/${producer.slug}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("called");
                              }}
                              style={{ textTransform: "initial" }}
                            >
                              Más detalles
                            </Button>
                          </Box>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}
                </Grid>
              ))}
        </Grid>
      </div>
    </div>
  );
};

export default Productores;
