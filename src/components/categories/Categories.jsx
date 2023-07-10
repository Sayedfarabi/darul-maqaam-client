import React, { useState } from 'react';
import CategoryItem from './CategoryItem';

const Categories = () => {
    const [selected, setSelected] = useState();
    const categories = [
        {
            _id: "category001",
            title: "Item 1"
        },
        {
            _id: "category002",
            title: "Item 2"
        },
        {
            _id: "category003",
            title: "Item 3"
        },
        {
            _id: "category004",
            title: "Item 4"
        },
        {
            _id: "category005",
            title: "Item 5"
        },
        {
            _id: "category006",
            title: "Item 6"
        },
        {
            _id: "category007",
            title: "Item 7"
        },
        {
            _id: "category008",
            title: "Item 8"
        },
        {
            _id: "category009",
            title: "Item 9"
        },
        {
            _id: "category0010",
            title: "Item 10"
        },
        {
            _id: "category0011",
            title: "Item 11"
        },
        {
            _id: "category0012",
            title: "Item 12"
        },
        {
            _id: "category0013",
            title: "Item 13"
        },
        {
            _id: "category0014",
            title: "Item 14"
        },
        {
            _id: "category0015",
            title: "Item 15"
        },
        {
            _id: "category0016",
            title: "Item 16"
        },
        {
            _id: "category0017",
            title: "Item 17"
        }
    ]
    return (
        <section className="mx-2 md:mx-4">
            <div className="h-1 rounded-sm bg-green-600 hidden md:block"></div>
            <div>
                <div className='ml-2 font-semibold text-center md:text-start mt-4'>
                    <h3 className='underline md:no-underline'>CATEGORIES</h3>
                </div>
                <div className='mt-2'>
                    <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 md:text-start'>

                        {categories?.length &&
                            categories?.map((category) => {
                                return <CategoryItem
                                    key={category?._id}
                                    title={category?.title}
                                    selected={selected}
                                    setSelected={setSelected}>

                                </CategoryItem>
                            })}



                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Categories;