import React, { useState } from 'react';
import { Nav, Navbar, Form, FormControl, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

interface IHeaderProps { }
//https://startbootstrap.com/theme/freelancer
//https://yazilimtoplulugu.com/
//https://litmotion.net/demo/neori/
const Header = (props: IHeaderProps): React.ReactElement => {

  const [loginModalShow, setLoginModalShow] = useState(false);
  const [registerModalShow, setRegisterModalShow] = useState(false);

  const handleLoginModalClose = () => setLoginModalShow(false);
  const handleLoginModalOpen = () => setLoginModalShow(true);

  const handleRegisterModalClose = () => setRegisterModalShow(false);
  const handleRegisterModalOpen = () => setRegisterModalShow(true);

  return (
    <header>
      <Navbar bg="light" expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">Sıcak İndirim</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Ana Sayfa</Nav.Link>
              <Nav.Link href="#link">En Sıcaklar</Nav.Link>
              <Nav.Link href="#link">En Beğenilenler</Nav.Link>
              <Nav.Link href="#link">İletişim</Nav.Link>
            </Nav>
            <Form inline className="search">
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`search-tooltip`}>İstediğiniz kelimeyi yazdıktan sonra Enter tuşuna basınız.</Tooltip>
                }>
                <FormControl type="text" placeholder="Ara.." className="mr-sm-2" />
              </OverlayTrigger>
            </Form>
            <Button variant="outline-secondary" className="mr-1" onClick={handleLoginModalOpen}>Giriş Yap</Button>
            <Button variant="outline-secondary" className="mr-1" onClick={handleRegisterModalOpen}>Kayıt Ol</Button>
            

            {/* Buraya dark mode switch eklenecek. */ }

          </Navbar.Collapse>
        </Container>
      </Navbar>


      <LoginModal show={loginModalShow} handleClose={handleLoginModalClose} />
      <RegisterModal show={registerModalShow} handleClose={handleRegisterModalClose} />

    </header>
  );
}
export default Header;