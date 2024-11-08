import React, { useState } from 'react'
import styles from "./AdminPage.module.scss"
import { VscTools } from "react-icons/vsc";
import ProductItem from '../../modules/ProductItem/ProductItem';
import useModalContext from '../../../hooks/useModalContext';
import ModalContainer from '../../modules/Modal/ModalContainer/ModalContainer';
import { useGetAllProduct } from '../../../hooks/queries';
import { useDeleteAllProducts } from '../../../hooks/mutation';


function AdminPage({ products }) {
      //REACT QUERY - GET DATA
      //   const { data:products, isPending, error } = useGetAllProduct();
      // Handle loading and error states
      //     if(!products) return <p>loading</p>
      //     if (isPending) {
      //       return <p>Loading products...</p>;
      //   }

      //   if (error) {
      //       return <p>Error fetching products: {error.message}</p>;
      //   }
      //CONTEXT
      const { modalType, openModal } = useModalContext();
      //STATE
      const [selectedProsIds, setSelectedProsIds] = useState([]);
      // MUTATION
      const { mutate } = useDeleteAllProducts();

      const deleteCheckedProductHandler = () => {
            // const data = { ids: selectedProsIds };        
            // // mutate(data );
            // mutate(selectedProsIds );
            const data = { ids: selectedProsIds };        
            mutate(data, {
                onSuccess: (status) => {
                  console.log(status)
                  
                    // Optionally invalidate queries or update local state
                    queryClient.invalidateQueries('/products');
                },
                onError: (error) => {
                    console.error("Error deleting products:", error);
                },
            });
          };

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
                                    onClick={() => openModal("addProduct")}
                              >
                                    افزودن محصول
                              </button>
                              <button
                                    className={styles.containerProductManagement__deleteProBtn}
                                    onClick={deleteCheckedProductHandler}
                                    disabled={selectedProsIds.length === 0}
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
                                          <ProductItem key={product.id}
                                                product={product}
                                                index={index}
                                                selectedProsIds={selectedProsIds}
                                                setSelectedProsIds={setSelectedProsIds} />
                                    ))}
                              </tbody>
                        </table>
                  </div>
                  {/* RENDER THE MODAL */}
                  {modalType && <ModalContainer />}
            </section>
      )
}

export default AdminPage