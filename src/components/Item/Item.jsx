import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


function Item ({ prod }) {

    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
        
            <Col className="py-2 mt-5 align-self-center">
            <Card className="border border-white" style={{ width: '18rem' }} >
                <Link style={{textDecoration: 'none', color:'black'}} to={`detail/${prod.id}`}>
                        <Card.Img variant="top" className="rounded-pill" src={prod.img} />
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>
                            {prod.price}€
                            </Card.Text>   
                        </Card.Body>
                </Link>
                <ItemCount initial={1} stock={ prod.stock } onAdd= { onAdd } />
                    </Card>
            </Col>    
        
    )
}

export default Item