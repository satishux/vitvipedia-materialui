import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import makeStyles from '@mui/styles/makeStyles';
import {
 
  Container,
  Grid,
  Typography,
} from "@mui/material";
import WineCard from "../components/WineCard";
import ProducerImg from "../components/ProducerImg";

const useStyles = makeStyles((theme) => ({
  heroStyling: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundSize: "",
    height: "600px",
    backgroundPosition: "center",
  },
  sectionContainer: {
    // paddingTop: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
  },
  contentContainer: {
    background: "white",
    padding: theme.spacing(3),
  },
  content: {
    columnWidth: "600px",
  },
}));

const Producer = () => {
  const { name } = useParams();
  const [producerData, setProducerData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const getProducerData = async () => {
      const response = await axios.get(
        `https://backend.vitivipedia.com/wp-json/vitivipedia/v1/category/${name.toLowerCase()}`
      );
      const data = response.data; // wordpress format
      setProducerData(data);
    };

    getProducerData();
  }, [name]);

  return (
    <div style={{ marginTop: "-2em" }}>
      {producerData && (
        <>
          <Grid container>
            <Grid
              item
              xs={12}
              className={classes.heroStyling}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${producerData.image}) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <Typography variant="h3" component="h3">
                {producerData.name}
              </Typography>
              <Typography variant="body1" component="p">
                {producerData.description}
              </Typography>
            </Grid>
          </Grid>

          <Container maxWidth="lg" className={classes.sectionContainer}>
            <Grid container className={classes.contentContainer}>
              <Grid item xs={12}>
                <div
                  className={classes.content}
                  style={{
                    fontFamily: "Roboto",
                    margin: "1em 0",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: producerData.content,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={4}>
                {producerData.products.map((prod, index) => (
                  <WineCard key={`wine-card-${index}`} wine={prod} />
                ))}
                {producerData.products.length === 0 && (
                  <Typography variant="h4" component="h4">
                    Este elaborador no tiene productos disponibles en este
                    momento.
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container>
                  { producerData.meta1_img && producerData.meta1_img !== '' &&  <Grid item xs={6}>
                    <ProducerImg
                      image={producerData.meta1_img}
                      text={producerData.meta1}
                    />
                  </Grid> }
                  { producerData.meta2_img && producerData.meta2_img !== '' &&  <Grid item xs={6}>
                    <ProducerImg
                      image={producerData.meta2_img}
                      text={producerData.meta2}
                    />
                  </Grid> }
                  { producerData.meta3_img && producerData.meta3_img !== '' &&  <Grid item xs={6}>
                    <ProducerImg
                      image={producerData.meta3_img}
                      text={producerData.meta3}
                    />
                  </Grid> }
                  { producerData.meta4_img && producerData.meta4_img !== '' &&  <Grid item xs={6}>
                    <ProducerImg
                      image={producerData.meta4_img}
                      text={producerData.meta4}
                    />
                  </Grid> }
                  { producerData.meta5_img && producerData.meta5_img !== '' &&  <Grid item xs={6}>
                    <ProducerImg
                      image={producerData.meta5_img}
                      text={producerData.meta5}
                    />
                  </Grid> }
                  { producerData.meta6_img && producerData.meta6_img !== '' &&  <Grid item xs={6}>
                    <ProducerImg
                      image={producerData.meta6_img}
                      text={producerData.meta6}
                    />
                  </Grid> }
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Producer;
