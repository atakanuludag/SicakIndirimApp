import React from 'react';

import { Modal, Button, Form, Col } from 'react-bootstrap';

export interface IRegisterProps {
    show: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal = (props: IRegisterProps): React.ReactElement => {

    const { show, handleClose } = props;
    const handleButtonClose = () => handleClose(false);

    return (
        <Modal show={show} onHide={handleButtonClose} animation>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Hesabınızı Oluşturun</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" placeholder="Kullanıcı adınızı giriniz" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>E-Mail Adresi</Form.Label>
                        <Form.Control type="email" placeholder="E-Mail adresinizi giriniz" />
                    </Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Ad</Form.Label>
                                <Form.Control type="email" placeholder="Adınız" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Soyad</Form.Label>
                                <Form.Control type="email" placeholder="Soyadınız" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Şifreniz</Form.Label>
                        <Form.Control type="password" placeholder="Şifre oluşturun" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Kayıt Ol</Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}
export default RegisterModal;