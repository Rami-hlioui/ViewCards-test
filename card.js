import React, { useEffect, useState } from "react";
import axios from "axios";
/////////////
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import {
  Box,
  CardMedia,
  CardHeader,
  Container,
  CardContent,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function card() {
  return (
    <Container mt={5} maxWidth="sm">
      <Card mt={3}>
        <CardHeader title="Jujutsu Kaisen" />

        <CardMedia image="./jjk.jpg" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The story of Jujutsu Kaisen is set in a world where Cursed Spirits
            feed on unsuspecting humans and fragments of the legendary and
            feared demon Ryomen Sukuna have been lost and scattered about.
            Should any curse consume Sukuna's body parts, the power they gain
            could destroy the world as we know it. Fortunately, there exists a
            mysterious school of Jujutsu Sorcerers who exist to protect the
            precarious existence of the living from the supernatural !
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
