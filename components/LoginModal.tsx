import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

export interface ILoginModalProps {
    show: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = (props: ILoginModalProps): React.ReactElement => {

    const { show, handleClose } = props;
    const handleButtonClose = () => handleClose(false);

    return (
        <Modal show={show} onHide={handleButtonClose} animation>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Hesabınıza Giriş Yapın</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" placeholder="Kullanıcı adınızı giriniz" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control type="password" placeholder="Şifrenizi giriniz" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Beni Hatırla" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Giriş Yap</Button>
                    <Button variant="primary" type="submit">Şifremi Unuttum ?</Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}
export default LoginModal;