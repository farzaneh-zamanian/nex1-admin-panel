import React, { useEffect, useState } from 'react'
import styles from "./AdminPage.module.scss"
import { VscTools } from "react-icons/vsc";
import ProductItem from '../../modules/ProductItem/ProductItem';
import useModalContext from '../../../hooks/useModalContext';
import ModalContainer from '../../modules/Modal/ModalContainer/ModalContainer';
import { useGetAllProduct } from '../../../hooks/queries';
import { useDeleteAllProducts } from '../../../hooks/mutation';
import SearchBar from '../../modules/SearchBox/SearchBar';
import useDebounce from '../../../hooks/useDebounce';
import { useQueryClient } from '@tanstack/react-query';
import Pagination from '../../modules/Pagination/Pagination';
import notifications from '../../../utils/toastNotifications';


function AdminPage() {
      //STATE
      const [search, setSearch] = useState("");//Ser Search value
      const [page, setPage] = useState(1);//Changable page for pagination
      const [limit] = useState(10); // Fixed limit for pagination
      const [selectedProsIds, setSelectedProsIds] = useState([]);


      // DEBOUNCE SEARCH VALUE
      const debouncedSearch = useDebounce(search, 300); // Change to 300ms

      //CONTEXT
      const { modalType, openModal } = useModalContext();

      // MUTATION
      const { mutate } = useDeleteAllProducts();

      // PARAMETER TO PASS TO THE useGetAllProduct
      const parameters = {
            // name: debouncedSearch || "",
            name: debouncedSearch || "",
            page: page,
            limit: limit
      };

      const queryClient = useQueryClient(); // Initialize queryClient


      //REACT QUERY - FETCH DATA
      const { data: products, isPending, error } = useGetAllProduct(parameters);
      // Handle loading and error states


      // Handle loading state
      useEffect(() => {
            if (isPending) {
                  notifications("info","در حال بارگذاری اطلاعات");
            }
      }, [isPending]);

      // Handle error state
      useEffect(() => {
            if (error) {
                  notifications("ERROR", error);
            }
      }, [error]);

      // if (products && products.data.length === 0) return <p>No products found for "{debouncedSearch}".</p>;
      if (products && products.data.length === 0) return <p>No products found for &quot;{debouncedSearch}&quot;.</p>;

      if (isPending) return <p>Loading products...</p>;
      if (error) return <p>Error fetching products: {error.message}</p>;



      //REACT QUERY - DELTE SELECTED PRODUCTS
      const deleteCheckedProductHandler = () => {
            const data = { ids: selectedProsIds };
            mutate(data, {
                  onSuccess: () => {

                        notifications("DELETE", "محصولات انتخاب شده با موفقیت حذف شدند");
                        queryClient.invalidateQueries('/products');
                        // Clear selected product IDs
                        setSelectedProsIds([]);

                  },
                  onError: (error) => {
                        notifications("ERROR", error);
                  },
            });
      };

      return (
            <>
                  {/* SEARCH COMPONENT */}
                  <SearchBar search={search} setSearch={setSearch} />
                  {/* MANAGEMENT PRODUCTS LIST*/}
                  <section className={styles.containerProductManagement}>
                        {/* CONTROLS ON PRODUCTS */}
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
                              {!products.data.length && <p>...loading</p>}
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
                                          {products.data.map((product, index) => (
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

                  {/* PAGINATION COMPONENT */}
                  <Pagination page={page} setPage={setPage} totalProducts={products.totalProducts} limit={limit} />
            </>

      )
}

export default AdminPage