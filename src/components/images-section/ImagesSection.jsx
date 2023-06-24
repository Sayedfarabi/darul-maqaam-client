import React from 'react';
import image1 from '../../assets/images/images/image01.png';
import image2 from '../../assets/images/images/image02.png';
import image3 from '../../assets/images/images/image03.png';
import image4 from '../../assets/images/images/student.png';
import image5 from '../../assets/images/images/zakat.png';
import image6 from '../../assets/images/images/03ed9da8-2bd5-4eee-87a0-908e79597dfa.png';
import image7 from '../../assets/images/images/86cc4b29-325d-4871-9209-d00b0fe08a33.png';
import image8 from '../../assets/images/images/cc25bc9f-1302-4789-8294-6f80035c9352.png';
import image9 from '../../assets/images/images/image04.png';
import image10 from '../../assets/images/images/image05.png';
import image11 from '../../assets/images/images/image06.png';

const ImagesSection = () => {
    const images = [
        {
            _id: "image00001",
            image: image1
        },
        {
            _id: "image00002",
            image: image2
        },
        {
            _id: "image00003",
            image: image3
        },
        {
            _id: "image00004",
            image: image4
        },
        {
            _id: "image00005",
            image: image5
        },
        {
            _id: "image00006",
            image: image6
        },
        {
            _id: "image00007",
            image: image7
        },
        {
            _id: "image00008",
            image: image8
        }
    ]
    return (
        <section className='py-8 md:py-12'>
            <div className='px-8 md:px-12'>
                <div className='py-6 grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        images.map(img => {
                            return <div key={img._id}>
                                <img src={img?.image} className='w-full h-60 mx-auto' alt="" />
                            </div>
                        })
                    }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-6'>
                    <div className='w-full mx-auto'>
                        <img src={image9} className='w-full h-80 mx-auto' alt="" />
                    </div>
                    <div className='w-full mx-auto'>
                        <img src={image10} className='w-full h-80 mx-auto' alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
                    <div className='w-full mx-auto'>
                        <img src={image11} className='w-full h-60 mx-auto' alt="" />
                    </div>
                    <div className='w-full mx-auto'>
                        <img src={image4} className='w-full h-60 mx-auto' alt="" />
                    </div>
                    <div className='w-full mx-auto'>
                        <img src={image6} className='w-full h-60 mx-auto' alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImagesSection;