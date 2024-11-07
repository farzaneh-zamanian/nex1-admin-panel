import React from 'react'

import AdminPage from '../../../components/templates/AdminPage/AdminPage'
import { api } from '../../../configs/api';

function adminIndex({products}) {
  return (
    <AdminPage products={products} />
  )
}



//FETCH DATA FROM API
// Fetch initial data on server-side
export async function getServerSideProps() {
  try {
    const res = await api.get('/products');
    const data = res.data.data;
    return {
      props: {products: data },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] },
    };
  }
}
export default adminIndex


