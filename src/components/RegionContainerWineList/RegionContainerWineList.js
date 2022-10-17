import { Grid, Typography } from '@mui/material';
import React from 'react';
import RegionContainerWineCard from '../RegionContainerWineCard/RegionContainerWineCard';
import { useStyles } from './styles';


const RegionContainerWineList = ({
  producer,
  selectedProducer,
  selectedRegion,
}) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.wineListRoot}>
      {producer.products
        .filter(item => {
          if (selectedProducer && producer.category.slug === selectedRegion) {
            if (item.category_ids.includes(selectedProducer)) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        })
        .map((product, index) => {
          const productInfo = {
            type: '',
            do: '',
            variedad: '',
            Tamaño: '',
            name: product.name,
            producer: producer.category.name,
            region: producer.category.name,
            img: product.image,
            shortDescription: product.short_description,
            description: product.description,
            stock: product.stock_quantity,
            slug: product.slug
          };

          product.meta_data.forEach(meta => {
            if (meta.key === 'type') {
              productInfo.type = meta.value;
            }
            if (meta.key === 'do') {
              productInfo.do = meta.value;
            }

            if (meta.key === 'variedad') {
              productInfo.variedad = meta.value;
            }

            if (meta.key === 'Tamaño') {
              productInfo.Tamaño = meta.value;
            }
          });

          return (
            <Grid item xs={12} md={4} lg={4} key={productInfo.name + index} container justifyContent="center">
              <RegionContainerWineCard
                wineData={productInfo}
                name={productInfo.name}
                region={productInfo.region}
                dorigen={productInfo.do}
                producer={productInfo.producer}
                type={productInfo.type}
                variedad={productInfo.variedad}
                img={productInfo.img}
                Tamaño={productInfo.Tamaño}
                shortDescription={productInfo.shortDescription}
                description={productInfo.description}
                showHeart={true}
                stock={productInfo.stock}
              />
            </Grid>
          );
        })}

      {producer.products.length === 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h6" component="h6">
            Actualmente no hay vinos para esta región.
          </Typography>
        </div>
      )}
    </Grid>
  );
};

export default RegionContainerWineList;
