import React from 'react'
import Product from '../../components/products/Product'
import { useGetProductsQuery } from '../../context/product'
const Home = () => {
  const {data} = useGetProductsQuery()
  return (
    <>
     <div className="container">
        <Product isadmin={false} data={data}/>
     </div>
    </>
  )
}

export default Home