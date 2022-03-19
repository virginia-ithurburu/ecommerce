import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import ItemCount from "../ItemCount/ItemCount";


function Item ({ prod }) {

    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
            <Col className="py-2">
            <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={prod.img} />
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>
                            {prod.price}€
                            </Card.Text>
                            <ItemCount initial={1} stock={ prod.stock } onAdd= { onAdd } />
                        </Card.Body>
                    </Card>
            </Col>    
        
    )
}

export default Item