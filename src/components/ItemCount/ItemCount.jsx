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
          <div className='border py-2'>
          <div className='p-1'>
          </div>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="currentColor" className="bi bi-cart4 m-1" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
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