import React, { useEffect, useState } from "react";
import axios from "axios";
/////////////
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import "./App.css";

import {
  Box,
  CardMedia,
  CardHeader,
  Container,
  CardContent,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
////////////

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  style: { width: "31.5rem", height: "20rem" },
};

function App() {
  const [data, setmanga] = useState([]);
  const [refetch, setRefetch] = useState(true);

  useEffect(async () => {
    const result = await axios.get("http://localhost:8000/products");

    setmanga(result.data);
  }, [refetch]);

  return (
    <div className="background">
      <div>
        <Container mt={3} maxWidth="sm">
          <Card color="gray">
            <Box m={2} display="flex" justifyContent="center">
              <TextField
                fullWidth
                label="Product"
                variant="outlined"
              ></TextField>{" "}
              <Button
                variant="contained"
                color="primary"
                onClick={() => setRefetch(!refetch)}
              >
                refetch
              </Button>
            </Box>

            <Box m={2} mt={4}>
              <Typography ml={1} variant="h6">
                Description
              </Typography>

              <Box
                borderRadius="borderRadius"
                borderColor="grey.500"
                {...defaultProps}
              >
                {data.map((element) => (
                  <h6>{element.Description}</h6>
                ))}
              </Box>
            </Box>
          </Card>
        </Container>
      </div>
      <div>
        <Box mt={5}>
          <Container mt={5} maxWidth="sm">
            <Card mt={3}>
              <CardHeader title="Jusutsu Kaisen" />
              <CardMedia image="./jujutsu-kaisen.jpg" title="jujustu kaisen" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  The story of Jujutsu Kaisen is set in a world where Cursed
                  Spirits feed on unsuspecting humans and fragments of the
                  legendary and feared demon Ryomen Sukuna have been lost and
                  scattered about. Should any curse consume Sukuna's body parts,
                  the power they gain could destroy the world as we know it.
                  Fortunately, there exists a mysterious school of Jujutsu
                  Sorcerers who exist to protect the precarious existence of the
                  living from the supernatural !
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default App;
