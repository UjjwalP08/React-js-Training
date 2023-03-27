import { useParams } from "react-router-dom";
const ProductDetail = ()=>{
    const params = useParams()
    return(
        <>
        <h1>Product Detail</h1>
        <p>Your Product id is {params.productId} </p>
        </>
    );
};

export default ProductDetail;