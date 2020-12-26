import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap';



interface IProps { }
//https://startbootstrap.com/theme/freelancer
//https://yazilimtoplulugu.com/
const Header = (props: IProps): React.ReactElement => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">Sıcak İndirim</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Ana Sayfa</Nav.Link>
              <Nav.Link href="#link">Test Link</Nav.Link>
              <NavDropdown title="İletişim" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Ara.." className="mr-sm-2" />
            </Form>
            <Button variant="outline-info" className="mr-1">Giriş Yap</Button>
            <Button variant="outline-success">Kayıt Ol</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;