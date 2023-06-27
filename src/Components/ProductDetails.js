import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import Products from "../database/Products.json";

const ProductDetails=({product})=>{
    const {id}=useParams()
    
    const productId=parseInt(id)
    const OneProduct=Products.find((oneP)=>(oneP.id===productId))
    
    return(
        <div>
            <div className="container" style={{display:"flex",alignItems:"center"}} >
                <div><h1>{OneProduct.title}</h1>
                
                <img src={OneProduct.thumbnail} /></div>
                
            
            <div><h1>{OneProduct.description}</h1>
            <Link to="/">Home page</Link></div>
            </div>
        </div>
    )
}

export default ProductDetails;