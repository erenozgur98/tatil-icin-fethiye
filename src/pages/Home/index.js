import React from "react";
import { Carousel } from 'react-bootstrap';
import Whatsapp from "../../components/Whatsapp";
import 'react-calendar/dist/Calendar.css';

function Home() {
    const disabledDates = [
        new Date('July 1, 2022'),
    ];

    const carouselItems = [
        {
            src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            alt: 'villa-1',
            caption: '1st Villa Caption',
            caption2: '1st Villa 2nd Caption'
        },
        {
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            alt: 'villa-2',
            caption: '2nd Villa Caption',
            caption2: '2nd Villa 2nd Caption'
        },
        {
            src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            alt: 'villa-3',
            caption: '3rd Villa Caption',
            caption2: '3rd Villa 2nd Caption'
        }
    ]

    return (
        <>
            <div className='carousel-container'>
                <Carousel fade pause='hover'>
                    {carouselItems.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ maxHeight: '880px', objectFit: 'cover' }}
                                src={item.src}
                                alt={item.alt}
                            />
                            <Carousel.Caption>
                                <h3>{item.caption}</h3>
                                <p>{item.caption2}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <Whatsapp />
        </>
    );
}

export default Home;

