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
// export async function getServerSideProps() {
//   try {
//     const res = await api.get('/products');
//     const data = res.data.data;
//     return {
//       props: {products: data },
//     };
//   } catch (error) {
//     console.error('Error fetching products:', error);
    
//     return {
//       props: { products: [] },
//     };
//   }
// }
export default adminIndex



export async function getServerSideProps(context) {
    const { req } = context;
    const token = req.cookies.token || null; // Access token from request cookies

    try {
        const res = await api.get('/products', {
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined // Set Authorization header if token exists
            }
        });
        const data = res.data.data;
        return {
            props: { products: data },
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            props: { products: [] },
        };
    }
}


