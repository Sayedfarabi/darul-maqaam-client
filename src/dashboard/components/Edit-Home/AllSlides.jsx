import React from 'react';
import SlideRow from './SlideRow';

const AllSlides = () => {
    return (

            <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Image</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">ID</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
             <SlideRow/>
            </tbody>
          </table>
        </div>
    );
};

export default AllSlides;