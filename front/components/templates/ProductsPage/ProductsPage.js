import React from 'react'
import styles from "./ProductsPage.module.scss"
import Card from '../../modules/Card/Card'
import Loading from '../../modules/Loading/Loading'

function ProductsPage({ products }) {

      return (

            <section className={styles.productsContainer}>
                         <h2 className={styles.productsContainer__title}>ليست محصولات</h2>
                  <div className={styles.productsContainer__sub}>
                 
                  {!products.length && <Loading />}
                        {
                              products.map(product => (
                                    <Card key={product.id} {...product} />
                              ))
                        }
                  </div>
                     




            </section>

      )
}

export default ProductsPage