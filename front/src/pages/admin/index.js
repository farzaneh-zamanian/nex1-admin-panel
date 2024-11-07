import React from 'react'
import AdminPage from '../../../components/templates/AdminPage/AdminPage'
import { api } from '../../../configs/api';

function adminIndex({ products }) {
  return (
    <AdminPage products={products} />
  )
}

export default adminIndex


//FETCH DATA FROM API

export async function getServerSideProps() {
  try {
    const res = await api.get('/products');
    const data = res.data;
    return {
      props: { products: data.data },
 
    };
  } catch (error) {
    console.error('Error fetching products:', error.message);

    return {
      props: { products: [] },
    };
  }
}


