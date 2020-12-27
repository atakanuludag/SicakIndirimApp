import React from 'react';
import { Button, Row, Col, Card, Image } from 'react-bootstrap';

interface IProps {
   title: string;
   description: string; 
}

const HotDealItem = (props: IProps): React.ReactElement => {
    return (

        <Card className="hot-deal-item box" border="light">
            <Card.Body>
                <Card.Title><Card.Link href="#">{props.title}</Card.Link></Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Row>
                    <Col>
                        <Image src="http://via.placeholder.com/30" roundedCircle />
                        <Card.Link href="#">@atakanuludag</Card.Link>
                    </Col>
                    <Col><i className="bi bi-clock"></i> 2 gün önce</Col>
                    <Col md={{ offset: 5 }}></Col>
                </Row>

                
            </Card.Footer>
        </Card>

       
    );
}
export default HotDealItem;

/*
 <article className="hot-deal-item box">
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="content">
                {props.description}
            </div>

            

        </article>*/