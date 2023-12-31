import React, { useState } from 'react';

const CartModal = () => {
    const [buyQuantity, setBuyQuantity] = useState(0);
    const [zakatQuantity, setZakatQuantity] = useState(0);
    const [isBuyProduct, setIsBuyProduct] = useState(false);
    const [isZakatProduct, setIsZakatProduct] = useState(false);
    console.log(isBuyProduct, isZakatProduct);

    const increaseBuyQtyHandler = () => {
        if (isBuyProduct) {
            if (buyQuantity >= 0) {
                return setBuyQuantity(buyQuantity + 1)
            } else {
                return
            }
        } else {
            return window.alert("Please select the buy checkbox")
        }
    }
    const increaseZakatQtyHandler = () => {
        if (isZakatProduct) {
            if (zakatQuantity >= 0) {
                return setZakatQuantity(zakatQuantity + 1)
            } else {
                return
            }
        } else {
            return window.alert("Please select the zakat checkbox")
        }

    }
    const decreaseBuyQtyHandler = () => {

        if (isBuyProduct) {
            if (buyQuantity > 0) {
                return setBuyQuantity(buyQuantity - 1)
            } else {
                return
            }
        } else {
            return window.alert("Please select the buy checkbox")
        }

    }
    const decreaseZakatQtyHandler = () => {
        if (isZakatProduct) {
            if (zakatQuantity > 0) {
                return setZakatQuantity(zakatQuantity - 1)
            } else {
                return
            }
        } else {
            return window.alert("Please select the zakat checkbox")
        }

    }
    return (
        <div>

            <dialog id="cart_modal" className="modal text-black">
                <div>
                    <form method="dialog" className="modal-box w-96 md:w-[600px]">
                        <button
                            onClick={() => window.cart_modal.close()}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                        <div className='flex justify-between items-start w-full  mt-8'>
                            <div className='w-1/2'>
                                <div className='m-4'>
                                    <div className='my-4'>
                                        <p className='text-xl'>Product Name</p>
                                        <p className='text-lg'>Writer name</p>
                                        <p className='text-xs'>Price: 140</p>
                                    </div>
                                    <div>
                                        <div>
                                            <img className='w-full h-full' src="https://i.pinimg.com/originals/09/83/77/098377222318e9007d396bd78b6d6033.jpg" alt="Product" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-center rounded-md border'>

                                <div className='m-4 w-full'>
                                    <div className='mb-4 flex justify-end'>
                                        <div>
                                            <p className='text-lg'>Buy Cost : 600</p>
                                            <p className='text-lg '>Zakat Cost : 400</p>
                                            <p className='text-lg font-semibold'>Total Cost :  1000</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='w-full'>
                                            <div>
                                                <input onClick={(e) => setIsBuyProduct(!isBuyProduct)} type="checkbox" name="buy" id="buy" value={isBuyProduct} />
                                                <label className='mx-2 text-xl' htmlFor="buy">Buy</label>
                                            </div>
                                            <div className='my-4 flex justify-center'>
                                                <div>
                                                    <input
                                                        onClick={() => increaseBuyQtyHandler()}
                                                        className='p-2 mx-2 text-2xl'
                                                        type="button" value="+" />

                                                    <input type="text" name="quantity" id="" className='border rounded-md w-12 py-1 text-center' value={buyQuantity} />

                                                    <input
                                                        onClick={() => decreaseBuyQtyHandler()}
                                                        className='p-2 mx-2 text-2xl'
                                                        type="button" value="-" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <div>
                                                <input onClick={() => setIsZakatProduct(!isZakatProduct)} type="checkbox" name="zakat" id="zakat" value={isZakatProduct} />
                                                <label className='mx-2 text-xl' htmlFor="zakat">Zakat</label>
                                            </div>
                                            <div className='my-4 flex justify-center'>
                                                <div>
                                                    <input
                                                        onClick={() => increaseZakatQtyHandler()}
                                                        className='p-2 mx-2 text-2xl'
                                                        type="button" value="+" />

                                                    <input type="text" name="quantity" id="" className='border rounded-md w-12 py-1 text-center' value={zakatQuantity} />

                                                    <input
                                                        onClick={() => decreaseZakatQtyHandler()}
                                                        className='p-2 mx-2 text-2xl'
                                                        type="button" value="-" />
                                                </div>
                                            </div>
                                        </div>
                                        <input type="submit" value="Add To Cart" className='w-full bg-green-500 text-white hover:green-600 hover:text-white rounded-md capitalize mt-4' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default CartModal;