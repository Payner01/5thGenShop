import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Splitter', description: 'Front-Lip', price: '$1,000', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    
    {id: 3, name: 'Diffuser', description: 'Rear Part', price: '$1,000', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>  
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
      );
}
 
export default Products;