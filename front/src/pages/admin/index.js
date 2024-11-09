import React, { useState } from 'react'

import AdminPage from '../../../components/templates/AdminPage/AdminPage'
import { api } from '../../../configs/api';
import SearchBox from '../../../components/modules/SearchBox/SearchBox';

function adminIndex({ products, initialSearch }) {
    // const [search, setSearch] = useState(initialSearch || "");

    // Filter products 
    // const filteredProducts = products.filter(product =>
    //     product.name.toLowerCase().includes(search.toLowerCase())
    // );

    return (
        <>
            {/* <SearchBox search={search} setSearch={setSearch} /> */}
            <AdminPage  />
            {/* <AdminPage products={filteredProducts} /> */}

        </>

    )
}
export default adminIndex


//FETCH DATA FROM API
// export async function getServerSideProps(context) {
//     const { req, query } = context;
//     const token = req.cookies.token || null; // Access token
//     const searchQuery = query.name || ""; // Get the search query from url
//     const page = query.page || 1;
//     const limit = query.limit || 10;
//     try {
//         const res = await api.get(`/products?page=${page}&limit=${limit}&name=${searchQuery}`, {
//             headers: {
//                 Authorization: token ? `Bearer ${token}` : undefined // Set Authorization header if token exists
//             },            
//             // params: {
//             //     page: page,
//             //     limit: limit,
//             //     name: searchQuery
//             // }


//         });
//         const data = res.data.data;
//         return {
//             props: { products: data, initialSearch: searchQuery },
//         };
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return {
//             props: { products: [], initialSearch: searchQuery },
//         };
//     }
// }


