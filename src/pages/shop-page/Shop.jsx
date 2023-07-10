import React from 'react';
import Categories from '../../components/categories/Categories';
import ProductCard from '../../components/product-card/ProductCard';

const Shop = () => {
    return (
        <section>
            <div className="text-2xl flex-none md:flex justify-between py-10 md:py-16">
                <div className=" w-full md:w-1/5 min-h-fit mx-2 md:mx-4 border-2 rounded-md ">
                    <div className="py-4 md:py-8 bg-white">
                        <div>
                            <Categories></Categories>
                        </div>
                    </div>
                </div>
                <div className=" w-full bg-white ">
                    <div className="">
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
                    <div className="bg-[#edf3f6]">
                        <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;