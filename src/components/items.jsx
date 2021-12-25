import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import getFruits from "../fakeProductsProvider";
import { Box } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from "@mui/material/TextField";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/shoppingCartSlice";
import Pagination, { paginate } from "./pagination";

let fruits = [];
fruits = getFruits();

function Items() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  let filteredFruits = [];
  if (search.length > 1) {
    filteredFruits = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  const handleAdd = (item) => {
    dispatch(increment({ item }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let paginated = paginate(fruits, currentPage, pageSize);

  return (
    <div>
      <Box textAlign="center">
        <TextField
          id="outlined-basic"
          label="🔎 Search"
          variant="outlined"
          sx={{ ml: "15px", width: "50%" }}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <Grid container mt={3}>
          {(filteredFruits.length > 0 ? filteredFruits : paginated).map(
            (fruit) => (
              <Grid key={fruit.name} item ml={2} mb={3} xs={5} sm={4} lg={1.8}>
                <Card>
                  <CardContent>
                    <img style={{ width: "60%" }} src={fruit.image}></img>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="p" fontWeight="bold">
                          {fruit.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="p">
                          {fruit.minAmount < 1
                            ? `${fruit.minAmount * 1000}gm`
                            : `${fruit.minAmount}kg`}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} mb={3}>
                        <Typography fontWeight="bold" color="green" variant="p">
                          ${fruit.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          onClick={() => handleAdd(fruit)}
                          sx={{ fontSize: "10px" }}
                        >
                          Add to Cart
                          <AddShoppingCartIcon sx={{ ml: "10px" }} />
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
        <Pagination
          totalItems={fruits.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        ></Pagination>
      </Box>
    </div>
  );
}

export default Items;
