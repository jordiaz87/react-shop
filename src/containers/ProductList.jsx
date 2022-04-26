import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products?limit=5&offset=1'

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async() => {
		const response = await axios(API);
		setProducts(response.data);
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
				
			</div>
		</section>
	);
}

export default ProductList;