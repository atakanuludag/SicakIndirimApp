import React from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import FullLayout from '../components/FullLayout';

type NotFoundComponent = React.FC & { layout: typeof FullLayout }

const NotFound: NotFoundComponent = () => {

  return (
    <div className="box box-padding">

      <div className="not-found">
        <h1>Sayfa bulunamadı</h1>
        <p>Aradığınız sayfa bulunamadı. İsterseniz tekrar arama yapabilirsiniz.</p>
        <Form>
          <Row>
            <Col md={9}>
              <FormControl type="text" size="lg" placeholder="Sitede ara..." className="mb-2" />
            </Col>
            <Col md={3}>
              <Button variant="primary" size="lg"><i className="fas fa-search"></i></Button>
            </Col>
          </Row>
        </Form>
      </div>
      

    </div>
  )
}

NotFound.layout = FullLayout;
export default NotFound;