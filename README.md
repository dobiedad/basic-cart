# Basic Cart

## Install

### npm
    npm i basic-cart -S
### Usage

```JavaScript
import Cart from 'basic-cart';

const cart = new Cart()
const product = {id:'123',name:"Apple",price:'2.56'}
```

#### Add Product
```JavaScript
cart.add(product)
```
#### Remove Product
```JavaScript
cart.remove(product)
```
#### Count items
```JavaScript
cart.count()
```
#### Get items as an array
```JavaScript
cart.getItems()
```
#### Calculate Total
```JavaScript
cart.total()
```
#### Calculate Total For Product
```JavaScript
cart.totalForProduct(product)
```
#### Reset Items
```JavaScript
cart.reset()
```
