import React from 'react'
import AdminPage from '../../../components/templates/AdminPage/AdminPage'

function adminIndex({ products }) {
  return (
    <AdminPage products={products} />
  )
}

export default adminIndex


//FETCH DATA FROM API

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();
  return {
    props: { products: data.data },
    revalidate: 10 //seconds
  }

}


