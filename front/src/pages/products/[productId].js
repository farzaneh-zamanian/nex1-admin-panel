import React from 'react'
import { api } from '../../../configs/api';
import ProductDetailsPage from '../../../components/templates/ProductDetailsPage/ProductDetailsPage';

function ProductDetails({product}) {
  return (
    <ProductDetailsPage {...product}/>  
  )
}

export default ProductDetails 
export async function getServerSideProps(context) {
  const{params} = context;
  const response = await api.get(`/products/${params.productId}`);
  const data = response.data;

  return {
    props:{product:data}
  }


}