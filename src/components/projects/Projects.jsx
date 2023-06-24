import React from 'react';
import image1 from '../../assets/images/images/student.png';
import image2 from '../../assets/images/images/zakat.png';
import image3 from '../../assets/images/images/general.png';
import image4 from '../../assets/images/images/image03.png';
import image5 from '../../assets/images/images/image01.png';
import image6 from '../../assets/images/images/image02.png';
import image8 from '../../assets/images/images/maqaam-foundation.png';
import ProjectCard from '../project-card/ProjectCard';

const Projects = () => {
    const data = [
        {
            _id: "project00001",
            image: image1,
            title: "Darul Maqaam found action Masjid Complex",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        },
        {
            _id: "project00002",
            image: image2,
            title: "Zakat Found",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        },
        {
            _id: "project00003",
            image: image3,
            title: "General Found",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        },
        {
            _id: "project00004",
            image: image4,
            title: "Self Reliant Fund",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        },
        {
            _id: "project00005",
            image: image5,
            title: "Natural Emergency fund",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        },
        {
            _id: "project00006",
            image: image6,
            title: "Orphan Fund",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        },
        {
            _id: "project00007",
            image: image4,
            title: "Ramadan Iftar Fund",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        },
        {
            _id: "project00008",
            image: image8,
            title: "Darul Maqaam Foundation",
            body: "We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with.We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with."
        }
    ]
    return (
        <section className='py-4 md:py-8 mx-12'>
            <div className='grid gird-cols-1 md:grid-cols-4 gap-4'>
                {
                    data.map(data => {
                        return <ProjectCard
                            key={data?._id}
                            data={data}>

                        </ProjectCard>
                    })
                }
            </div>
        </section>
    );
};

export default Projects;