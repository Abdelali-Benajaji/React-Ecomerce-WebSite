import {Link} from "react-router-dom";
import Products from "../database/Products.json";

const ProductList=({product,handleAddToCart })=>{

    return(
        <div className="container" style={{display:"flex",flexWrap:"wrap"}} > 
            {product.map((product)=>(
                <div key={product.id} className="card" style={{width:18 +"rem",padding:14+'px',margin:14+'px'}}>
                    <img src={product.thumbnail} style={{width:96+"%",height:80+"%"}} className="card-img-top"/>
                    <div class="card-title">{product.title}</div>
                    <div className="d-flex">
                    <button onClick={() => handleAddToCart(product)} className="btn btn-success">Add to Cart</button>
                    <Link to={`/productDetails/${product.id}`}><button className="btn btn-primary">View more</button></Link>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList;