import React, { useState } from 'react';
import Categories from '../../components/categories/Categories';
import ProductCard from '../../components/product-card/ProductCard';
import useTitle from '../../hooks/useTitle';
import CartModal from '../../components/cart-modal/CartModal';

const Shop = () => {
    useTitle("Shop Page")
    const [modalData, setModalData] = useState(false);
    return (
        <section>
            <div className="text-2xl flex-none md:flex justify-between py-10 md:py-16">
                <div className=" w-full md:w-1/5 min-h-fit mx-2 md:mx-4 border-2 rounded-md ">
                    <div className="py-4 md:py-8 bg-white max-h-screen overflow-auto">
                        <div>
                            <Categories></Categories>
                        </div>
                    </div>
                </div>
                <div className=" w-full bg-white ">
                    <div>
                        <div className=""></div>
                        <div className=" py-2">
                            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                                This Products of The Categories
                            </h1>
                            <p className="text-gray-500">
                                Page 1 | 16 Products
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#edf3f6] max-h-screen overflow-auto">
                        <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>
                            <ProductCard
                                setModalData={setModalData}
                            >
                            </ProductCard>

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <CartModal></CartModal>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Shop;