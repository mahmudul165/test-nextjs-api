import Image from "next/image";
import Logo from "../images/logo.png";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { ReactElement } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const navbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Image
              src={Logo}
              alt="Picture of the author"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>
            <Nav>
              {/* <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}

              <NavDropdown title="Home" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/home/about">
                    <a>About Us</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/home//blog">
                    <a>Blog</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/home/contact">
                    <a>Contact</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/home/home_extend">
                    <a>Home Extend</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* pages nav */}
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/info/service">
                    <a>Service</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/info/team">
                    <a>Team</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/info/testimonial">
                    <a>Testimonial</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/info/price">
                    <a>Price</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* portfolio */}
              <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/portfolio/mahmud1">
                    <a>mahmud-1</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/portfolio/mahmud2">
                    <a>mahmud-2</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Journal" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link href="journal">
                    <a>BlogList</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* new */}
              <Nav.Link>
                <Link href="contact" style={{ textDecoration: "none" }}>
                  <a>Contact</a>
                </Link>{" "}
              </Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">
                  <FontAwesomeIcon icon={faSearch} />{" "}
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
          {/* new code */}
          {/* <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas> */}
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
