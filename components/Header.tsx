import React, { useState } from 'react';
import { Nav, Navbar, Form, FormControl, Container, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';



interface IProps { }
//https://startbootstrap.com/theme/freelancer
//https://yazilimtoplulugu.com/
//https://litmotion.net/demo/neori/
const Header = (props: IProps): React.ReactElement => {

  const [loginModalShow, setLoginModalShow] = useState(false);

  const handleClose = () => setLoginModalShow(false);
  const handleOpen = () => setLoginModalShow(true);
  

 
  
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
            <Form inline>
              <FormControl type="text" placeholder="Ara.." className="mr-sm-2" />
            </Form>
            <Button variant="outline-info" className="mr-1" onClick={handleOpen}>Giriş Yap</Button>
            <Button variant="outline-success">Kayıt Ol</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <LoginModal show={loginModalShow} handleClose={handleClose} />

    </header>
  );
}
export default Header;