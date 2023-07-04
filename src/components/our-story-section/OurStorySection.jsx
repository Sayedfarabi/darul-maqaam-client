import React from 'react';

const OurStorySection = () => {

    const items = [
        {
            _id: "item00001",
            item: "Who We Are"
        },
        {
            _id: "item00002",
            item: "Founder"
        },
        {
            _id: "item00003",
            item: "Chairman Message"
        },
        {
            _id: "item00004",
            item: "Principles and Norms"
        },
        {
            _id: "item00005",
            item: "Goals and Objectives"
        },
        {
            _id: "item00006",
            item: "Activities"
        },
        {
            _id: "item00007",
            item: "Source of funds and income"
        },
        {
            _id: "item00008",
            item: "Expenditure policy"
        },
        {
            _id: "item00009",
            item: "Achievements"
        }
    ]
    return (
        <section>
            <div className='py-4 text-center bg-green-600 text-2xl md:text-4xl text-white'>
                <h1>OUR STORY</h1>
            </div>
            <div className='flex justify-center items-center py-4 bg-green-50'>
                <div className='w-1/5 mx-8'>
                    <ul>
                        {
                            items.map(i => {
                                return <li
                                    className='leading-8'
                                    key={i._id}>
                                    {i?.item}
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='w-4/5 bg-white p-12 mx-8 h-full'>
                    <h4 className='text-green-600 text-xl font-bold'>Who We Are</h4>
                    <p><span className='text-xl text-green-600 font-bold'>D</span>
                        arul Maqaam Foundation is a renowned law firm in Dhaka, Bangladesh. We are providing and dealing with
                        all sorts of legal and professional services and matters to operate and run in connection with the Compa
                        nies Act, Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax,
                        Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act,
                        Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any
                        other Acts which are prevailing and operative in Bangladesh. e Adviser is a renowned law firm in Dhaka, B
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;