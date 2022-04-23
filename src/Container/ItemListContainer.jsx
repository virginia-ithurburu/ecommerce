import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import ItemList from '../components/ItemList/ItemList';
import Spinner from 'react-bootstrap/esm/Spinner'
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore'

function ItemListContainer ( { saludar } ) {
  const [ loading, setLoading ] = useState(true)
  const [prods, setProds ] = useState([])
  const { id } = useParams()


useEffect (() => {
  const dataBase = getFirestore()



  const queryCollection = !id
              ?
      collection (dataBase, 'items')

              :
      query(collection(dataBase, 'items'),
        where ('category', '==', id))

  getDocs(queryCollection)
  .then(resp => setProds( resp.docs.map(product =>( { id: product.id, ... product. data()}))))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false)) 

}, [id])


 return (
   <>
   <div>{saludar}</div>
   {       loading ? <Spinner animation="grow" /> 
                    :
                        <ItemList prods={prods} />
                }
                
            </>

 )
}

export default ItemListContainer