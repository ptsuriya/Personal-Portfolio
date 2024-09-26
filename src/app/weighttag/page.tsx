'use client'

import Navbars from "@/components/Navbars/Navbars";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Cardtitle } from 'react-bootstrap';

interface FoodData {
    day: string;
    weight: number;
    meal1: string;
    snack: string;
    meal2: string;
    id: number;
}

const YourComponent = () => {
    const [data, setData] = useState<FoodData[]>([]); // State to hold the fetched data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.sheety.co/de48f7dec34169d15a3e2e7e4ae8cdd7/foodRec/1Stpage');
                setData(response.data['1Stpage']); // Store the fetched data in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbars />
            <Container>
                {data.length > 0 ? (
                    <Row>
                    
                        {data.map((item) => (
                            <Col className="mb-3" xs={12} md={6} lg={4} xl={3} key={item.id}>
                            <Card className="py-3 px-4 h-100">
                                <CardTitle className="text-center">Day: {item.day}</CardTitle>
                                <CardText>
                                <p>Weight: {item.weight}</p>
                                <p>Meal 1: {item.meal1}</p>
                                <img className="w-100" src={item.img1} alt="" />
                                <p>Snack: {item.snack}</p>
                                <p>Meal 2: {item.meal2}</p>
                                <img className="w-100" src={item.img2} alt="" />
                                </CardText>
                            </Card>
                            </Col>
                        ))}                    
                    </Row>
                ) : (
                    <p>Loading...</p> // Placeholder while data is being fetched
                )}
            </Container>
        </>
    );
};

export default YourComponent;
