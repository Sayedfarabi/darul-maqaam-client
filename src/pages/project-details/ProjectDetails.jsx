import React, { useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import useTitle from '../../hooks/useTitle';

const ProjectDetails = () => {
    useTitle("Project Details");
    const [selectAmount, setSelectAmount] = useState();
    const [otherAmount, setOtherAmount] = useState(false);
    const [anyValueChecked, setAnyValueChecked] = useState(false);
    // console.log(anyValueChecked);
    return (
        <section className='bg-slate-100 min-h-screen'>
            <div className='py-4 text-center bg-green-600 text-2xl md:text-4xl text-white'>
                <h1>Project Found</h1>
            </div>
            <div className='py-4 md:py-8 mx-6 md:mx-12 flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/2 mx-4 mb-6 md:mb-0'>

                    <iframe className='w-full h-80 rounded-md' src="https://www.youtube.com/embed/TEEjg43HRBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div className='w-full md:w-1/2 mx-4 p-4 bg-white rounded-md'>
                    <div>
                        <h5 className='text-xl font-semibold py-2'>Project Found</h5>
                        <p className='py-2'>Your Zakat has the power to transform lives, from sheltering those who have no home, to feeding families who have endured hunger for days on end. Please, donate your Zakat where the need is greatest.</p>
                    </div>
                    <div className='my-4'>
                        <div className='mb-4'>
                            <h5 className='text-lg font-medium py-2'>Darul Maaqam Foundation Project Bank Account</h5>
                            <p>Account Name : As sunnah Foundation Zakat Fund</p>
                            <p>Account Number : 07511100103026</p>
                            <p>Bank : Exim Bank Ltd.</p>
                            <p>Branch : Shatarkul Branch, Dhaka.</p>
                        </div>
                        <div className='my-2'>
                            Or
                        </div>
                        <div className='my-2 mb-4'>
                            <p>Account Name : As sunnah Foundation Zakat Fund</p>
                            <p>Account Number : 20503100100160806</p>
                            <p>Bank : Islami Bank Bangladesh ltd</p>
                            <p>Branch : Badda, Dhaka.</p>
                            <p>Routing Number : 125260341</p>
                            <p>Swift Code : IBBLBDDH</p>
                        </div>
                        <div className='my-2'>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mx-auto mb-2'>
                                <div >
                                    <button onClick={() => {
                                        setSelectAmount(100)
                                        setOtherAmount(false)
                                    }} className={`py-4 w-full text-lg text-center rounded-md border ${(selectAmount === 100) && 'bg-green-500 text-white'}`}>
                                        100 <TbCurrencyTaka className='inline mb-1' />
                                    </button>
                                </div>
                                <div >
                                    <button onClick={() => {
                                        setSelectAmount(500)
                                        setOtherAmount(false)
                                    }} className={`py-4 w-full text-lg text-center rounded-md border ${(selectAmount === 500) && 'bg-green-500 text-white'}`}>
                                        500 <TbCurrencyTaka className='inline mb-1' />
                                    </button>
                                </div>
                                <div >
                                    <button onClick={() => {
                                        setSelectAmount(1000)
                                        setOtherAmount(false)
                                    }} className={`py-4 w-full text-lg text-center rounded-md border ${(selectAmount === 1000) && 'bg-green-500 text-white'}`}>
                                        1000 <TbCurrencyTaka className='inline mb-1' />
                                    </button>
                                </div>
                                <div >
                                    <button onClick={() => {
                                        setSelectAmount(10000)
                                        setOtherAmount(false)
                                    }} className={`py-4 w-full text-lg text-center rounded-md border ${(selectAmount === 10000) && 'bg-green-500 text-white'}`}>
                                        10000 <TbCurrencyTaka className='inline mb-1' />
                                    </button>
                                </div>
                                <div >
                                    <button onClick={() => {
                                        setSelectAmount(50000)
                                        setOtherAmount(false)
                                    }} className={`py-4 w-full text-lg text-center rounded-md border ${(selectAmount === 50000) && 'bg-green-500 text-white'}`}>
                                        50000 <TbCurrencyTaka className='inline mb-1' />
                                    </button>
                                </div>
                                <div >
                                    <button onClick={() => {
                                        setOtherAmount(true)
                                        setSelectAmount()
                                    }} className={`py-4 w-full text-lg text-center rounded-md border ${(otherAmount === true || anyValueChecked === true) && 'bg-green-500 text-white'}`}>
                                        Other
                                    </button>
                                </div>
                            </div>
                            <div className='py-2'>
                                <div className='mb-4'>
                                    <input onClick={() => setAnyValueChecked(!anyValueChecked)} type="checkbox" value={anyValueChecked} name="other" id="other" className='p-4 mr-2 text-gray-100' />
                                    <label htmlFor="other" name="other">Any Donation Amount</label>
                                </div>
                                <div>
                                    <div className='flex justify-between items-center mb-2 md:mb-4'>
                                        <label htmlFor="amount" className='w-1/2 md:w-1/3 text-right mr-2'><span className='text-red-500 text-2xl font-semibold'>*</span> Donation Amount : </label>
                                        <input className='w-full border-2 rounded-md w-1/2 md:w-2/3 py-1 bg-gray-100 text-center' type="number" min={10} name="amount" id="amount" defaultValue={selectAmount && selectAmount}
                                            readOnly={(selectAmount || anyValueChecked === false) ? true : false} />
                                    </div>
                                    <div className='flex justify-between items-center mb-2 md:mb-4'>
                                        <label htmlFor="donarName" className='w-1/2 md:w-1/3 text-right mr-2'> Donar Name : </label>
                                        <input className='w-full bg-white border-2 rounded-md w-1/2 md:w-2/3 py-1 text-center' type="text" name="donarName" id="donarName" />
                                    </div>
                                    <div className='flex justify-between items-center mb-2 md:mb-4'>
                                        <label htmlFor="phone" className='w-1/2 md:w-1/3 text-right mr-2'><span className='text-red-500 text-2xl font-semibold'>*</span> Phone : </label>
                                        <input className='w-full bg-white border-2 rounded-md w-1/2 md:w-2/3 py-1 text-center' type="number" name="phone" id="phone" />
                                    </div>
                                    <div className='flex justify-between items-center mb-2 md:mb-4'>
                                        <label htmlFor="paymentMethod" className='w-1/2 md:w-1/3 text-right mr-2'><span className='text-red-500 text-2xl font-semibold'>*</span> Payment Gateway : </label>
                                        <select onChange={(e) => console.log(e.target.value)} name="paymentMethod" id="paymentMethod" className='w-full bg-white border-2 rounded-md w-1/2 md:w-2/3 py-1'>
                                            <option value="">Select One</option>
                                            <option value="Bkash">Bkash</option>
                                            <option value="Nagad">Nagad</option>
                                            <option value="Bank">Bank</option>
                                        </select>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;