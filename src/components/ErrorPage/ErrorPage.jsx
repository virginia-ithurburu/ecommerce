import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

function PageNotfound () {
 return(
     <Container>
         <Row  className="justify-content-center mt-5">
             <Col>
             <img src="https://eu.gear.cdprojektred.com/static/img/error/404.svg" style={{width: '30rem'}} alt="404notFound" />
             <div className="mt-5">
             <h3 className="fw-bold">404</h3>
             <h5 className="fw-bold">MERCH NOT FOUND</h5>
             <p>Sorry my friend, even our witcher senses can't seem to track it down... </p>
             </div>
             <Link to='/'>
                <Button className="fw-bold" variant="danger">
                    FAST TRAVEL HOME
                    </Button>
            </Link>
             </Col>
         </Row>
     </Container>
 )
}

export default PageNotfound