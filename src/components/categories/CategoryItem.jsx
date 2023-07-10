import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ icon, title, selected, setSelected }) => {
    return (
        <li onClick={() => setSelected(title)} className={`${(selected === title) && "bg-green-600 text-white w-full rounded-sm"} md:pl-2`} >
            <Link to={""}>
                <button className="hover:text-green-600">
                    <div className="flex justify-start items-center">
                        {/* <div className="mx-1">
                            <img src={icon} alt={icon} className="w-4 h-4" />
                        </div> */}
                        <div className="flex text-sm">
                            <p className="text-left">
                                {title.length < 30 ? title : title.slice(0, 19)}
                                {
                                    title.length < 30 ? "" : "..."
                                }
                            </p>

                        </div>
                    </div>
                </button>
            </Link>
        </li>
    );
};

export default CategoryItem;