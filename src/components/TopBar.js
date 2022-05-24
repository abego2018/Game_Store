import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap'
import Card from "react-bootstrap/Card"

export default function header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                <Card style={{ width: '100%', backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/1200px-NES-Console-Set.jpg)", height: "70px", backgroundRepeat: "no-repeat", color:'red', backgroundPosition: "right", backgroundColor: "black", backgroundSize: "80px 50px" }}>
                <Card.Title style={{ textAlign: "middle", width: "100px", marginLeft: "1300px", marginTop: "20px" }}>Game Cart
                                {/* <Card.Subtitle className="mb-2 text-muted">Delivery • Pickup</Card.Subtitle> */}
                                <Nav.Link>
                        <Button variant="light">Log in</Button>
                        <Button variant="success">Sign up</Button>
                    </Nav.Link></Card.Title>
                            </Card>
                </Navbar.Brand>
                
                
            </Container>
        </Navbar>
    )
}