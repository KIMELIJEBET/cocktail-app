// src/components/Cocktail.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container, Button } from '@mui/material';

const Cocktail = () => {
  const [cocktails, setCocktails] = useState([]);

  // Fetch cocktails from TheCocktailDB API
  useEffect(() => {
   fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(data => setCocktails(data.drinks || [])) 
      .catch(err => console.error(err));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Cocktails
      </Typography>

      <Grid container spacing={4}>
        {cocktails.map((drink) => (
          <Grid item key={drink.idDrink} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
              <CardContent>
                <Typography variant="h6">{drink.strDrink}</Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {drink.strInstructions}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="contained" fullWidth>
                  View Recipe
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cocktail;
