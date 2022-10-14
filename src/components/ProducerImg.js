import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function ProducerImg({ image, text }) {
  return (
    <div style={{ margin: "1em", overflow: "hidden" }}>
      <Card>
        <CardContent style={{ padding: 0, position: 'relative' }}>
          <Box
            style={{
              width: "100%",
              height: "300px",
              background: "white",
              //   margin: '-16px -16px -24px -16px'
            }}
          >
            <img
              src={image}
              alt={text}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          {text && text !== '' && <Box style={{width: '100%', position: 'absolute', bottom: '0', left: '0', background: 'rgba(0,0,0,.5)', padding: '0.5em 1em', color: 'white'}}>
            <Typography
              variant="h5"
              component="h5"
              style={{ fontFamily: "Lora", fontWeight: "bold", width: '92%' }}
            >
              {text}
            </Typography>
          </Box> }
        </CardContent>
      </Card>
    </div>
  );
}

export default ProducerImg;
