import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Stack,Text,Image,Tag,TagLabel,Heading,Box } from '@chakra-ui/react'
import Pagination from "./Pagination";
const Product = () => {
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(3)
  const [lists,setlists] = useState([])
  const [totalcount,setTotalcount]= useState(0)
     useEffect(()=>{
         const getData =async () =>{
        let res = await fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
        let data = await res.json()
        setlists(data)
        setTotalcount(Number(res.headers["x-total-count"]))
         console.log(data)
      }
      getData()
     },[page,limit])
    
  return (
    
    <Stack data-cy="product">
      {lists.map((to)=>(
        <>
           <Image data-cy="product-image" src={to.imageSrc} />
          <Text data-cy="product-category">{to.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{to.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{to.title}</Heading>
          <Box data-cy="product-price">{to.price}</Box>
          
          </>
        ))}
        <Pagination page={page} limit={limit} setPage={setPage}  setLimit={setLimit} totalcount={totalcount}  />
    </Stack>
  );
};

export default Product;