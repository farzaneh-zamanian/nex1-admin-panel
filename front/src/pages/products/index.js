import React from 'react'
import ProductsPage from '../../../components/templates/ProductsPage/ProductsPage'
import { api } from '../../../configs/api'

function ProductIndex({products}) {
      return (
            <ProductsPage products={products} />
      )
}

export default ProductIndex



export async function getServerSideProps() {
      const response = await api.get("/products");
      const data = response.data.data;
      return {
            props: { products: data },
         //seconds
      }

}