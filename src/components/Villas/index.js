import React from "react";
import { Card, Button } from 'react-bootstrap';
import './style.css'

function Villas() {
    const villas = [
        {

            src: 'https://via.placeholder.com/150',
            title: 'Villa A',
            text: 'Villa A',
            button: 'Villa A',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Villa B',
            text: 'Villa B',
            button: 'Villa B',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Villa C',
            text: 'Villa C',
            button: 'Villa C',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Villa D',
            text: 'Villa D',
            button: 'Villa D',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Villa E',
            text: 'Villa E',
            button: 'Villa E',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Villa F',
            text: 'Villa F',
            button: 'Villa F',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Apart A',
            text: 'Apart A',
            button: 'Apart A',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Apart B',
            text: 'Apart B',
            button: 'Apart B',
            href: '#'
        },
        {
            src: 'https://via.placeholder.com/150',
            title: 'Apart C',
            text: 'Apart C',
            button: 'Apart C',
            href: '#'
        },
    ]

    return (
        <>
            <div className='villa-container'>
                <div className='villa-cards'>
                    {villas.map(item => (
                        <Card className='villa-cards-item'>
                            <Card.Img variant="top" src={item.src} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.text}
                                </Card.Text>
                                <Button variant="primary" href={item.href}>{item.button}</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Villas;
