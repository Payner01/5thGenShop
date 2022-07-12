import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product';

const products = [
    {id: 1, name: 'Macbook Pro', description: 'Computer', price: '$1,000'},
    {id: 2, name: 'Macbook Air', description: 'Computer'},
    {id: 3, name: 'Keyboard', description: 'Computer Accessory'},
]

const Products = () => {
    return (
        <main>
            <Grid >
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>  
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
      );
}
 
export default Products;