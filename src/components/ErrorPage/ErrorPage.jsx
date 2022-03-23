import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function PageNotfound () {
 return(
     <Container>
         <Row>
             <Col>
             <img src="https://eu.gear.cdprojektred.com/static/img/error/404.svg" alt="404notFound" />
             <h3>404</h3>
             <h5>MERCH NOT FOUND</h5>
             <p>Sorry my friend, even our witcher senses can't seem to track it down... </p>
             </Col>
         </Row>
     </Container>
 )
}

export default PageNotfound