import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";



import AfficheAerticleTable from './AfficheAerticleTable';
import { getArticles } from '../../../features/articleSlice';

const ProductsAppAdmin = () => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getArticles());
},[])

return (
<div>

<AfficheAerticleTable/>
</div>
)
}
export default ProductsAppAdmin