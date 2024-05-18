import React from 'react'
import Product from '../../../components/products/Product'
import { useGetProductsQuery } from '../../../context/product'

const MangeProduct = () => {
  const {data} = useGetProductsQuery()
  console.log(data);
  return (
   <>
   <div className="container">
    <div className='row'>
    <Product isadmin={true} data={data}/>
    </div>
   </div>
   </>
  )
}

export default MangeProduct