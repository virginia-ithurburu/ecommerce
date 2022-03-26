import { useState } from "react"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import ButtonGroup from "react-bootstrap/esm/ButtonGroup"
import Button from "react-bootstrap/esm/Button"

  
const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState ( initial )
  
    const handleIncrease = () =>{
        if (count < stock) {
            setCount ( count + 1 )
            console.log(count)
        }
    }

    const handleDecrease = () =>{
        if (count > initial){
            setCount ( count - 1 )
            console.log(count)
        }
    }

    const add = () => {
        if (stock < 1) {
            alert('No hay stock del producto')
        }
        onAdd(count)
    }
  
    return (
        <>
        <Container>
          <Row className='justify-content-center'>
            <div className='p-1'>
              <ButtonGroup className='gap-3 py-2'>
              <button type="button" className="btn btn-sm" onClick={handleDecrease}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" className="bi bi-dash-square-fill" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
                </svg>
              </button>
              <div  className='border py-1 px-3'>
              <label>{count}</label>
              </div>
              <button type='button' className='btn btn-sm' onClick={handleIncrease}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                </svg>
              </button>
              </ButtonGroup>
              <Button variant="danger" onClick={add}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="currentColor" class="bi bi-cart-plus m-1" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                Add to cart
                </Button>
            </div>
        </Row>
        </Container>
        </>
    )
}

export default ItemCount