import React from "react";
import AddProduct from "./AddProduct";
import { Flex } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import Product from "./Product";

import styles from "./styles.module.css"
const Products = () => {

  return (

    <Flex >

           <AddProduct/>
 
           <Grid><Product/></Grid>
           
    </Flex>
 
   
  );
};

export default Products;
