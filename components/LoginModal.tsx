import React from 'react';

import { Modal, Button } from 'react-bootstrap';


export interface IPropssss {
    show: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = (props: IPropssss): React.ReactElement => {

    const { show, handleClose } = props;
    const handleButtonClose = () => handleClose(false);

    return (
        <Modal show={show} onHide={handleButtonClose} animation>
            <Modal.Header closeButton>
                <Modal.Title>Giriş</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleButtonClose}>Close</Button>
                <Button variant="primary" onClick={handleButtonClose}>Save Changes</Button>
            </Modal.Footer>
        </Modal>

    );
}
export default LoginModal;