import React from 'react';
import image1 from '../../assets/images/images/image01.png';
import image2 from '../../assets/images/images/image02.png';
import image3 from '../../assets/images/images/image03.png';
import Card from '../card/Card';
import { useTranslation } from 'react-i18next';

const MakeThemSmile = () => {
    const { t } = useTranslation()
    const data = [
        {
            _id: "data0001",
            image: image1,
            title: "Darul Maqaam Foundation",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act,Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh."
        },
        {
            _id: "data0002",
            image: image2,
            title: "Darul Maqaam Foundation",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act,Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh."
        },
        {
            _id: "data0003",
            image: image3,
            title: "Darul Maqaam Foundation",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act,Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh."
        },
        {
            _id: "data0004",
            image: image1,
            title: "Darul Maqaam Foundation",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act,Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh."
        },
        {
            _id: "data0005",
            image: image2,
            title: "Darul Maqaam Foundation",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act,Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh."
        },
        {
            _id: "data0006",
            image: image3,
            title: "Darul Maqaam Foundation",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act,Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh."
        }
    ]
    return (
        <section className='py-4 md:py-8 mx-6 md:mx-12'>
            <div>
                <h4 className='text-5xl text-green-600 text-center mb-4 md:mb-6'>
                    {t('shareTitle')}
                </h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5'>
                {
                    (data.length > 0) &&
                    data.map(data => {
                        return <Card
                            key={data?._id}
                            data={data}></Card>
                    })
                }
            </div>
        </section>
    );
};
export default MakeThemSmile;