import React from 'react'
import styles from "./AdminPage.module.scss"
import { VscTools } from "react-icons/vsc";
import ProductItem from '../../modules/ProductItem/ProductItem';
import useModalContext from '../../../hooks/useModalContext';


function AdminPage({ products }) {
      const {modalType,openModal}=useModalContext();
      return (
            <section className={styles.containerProductManagement}>
                  {/* MANAGEMENT */}
                  <div className={styles.containerProductManagement__title}>
                        <p>

                              <VscTools />
                              <span>مدیریت کالا</span>
                        </p>
                        <div>
                              <button
                                    className={styles.containerProductManagement__createProBtn}
                                    onClick={() => openModal("addPrroduct")}
                              >
                                    افزودن محصول
                              </button>
                              <button
                                    className={styles.containerProductManagement__deleteProBtn}
                                    onClick={() => console.log("delete product")}
                              >
                                    حذف محصولات انتخاب شده
                              </button>
                        </div>
                  </div>
                  {/* LIST OF PRODUCTS */}
                  <div className={styles.containerProductManagement__list}>
                        {!products.length && <p>...loading</p>}
                        <table
                              className={styles.containerProductManagement__list__containerTable}
                        >
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>شماره</th>
                                          <th>نام کالا</th>
                                          <th>موجودی</th>
                                          <th>قیمت</th>
                                          <th>شناسه کالا</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* LIST OF PRODUCTS */}
                                    {products.map((product, index) => (
                                          <ProductItem key={product.id} product={product} index={index} />
                                    ))}



                              </tbody>
                        </table>
                  </div>
                  {/* RENDER THE MODAL */}
            </section>
      )
}

export default AdminPage