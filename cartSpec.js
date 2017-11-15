import Cart from './cart'
import { expect } from 'chai'

var cart

const products = {
  apple:{name:'Apple',price:'1.99',id:'a'},
  pear:{name:'Pear',price:'2.50',id:'b'},
  carrot:{name:'Carrot',price:'0.99',id:'c'}
}

describe('Shopping Cart',() => {

  beforeEach(() => {
    cart = new Cart()
  })

  it('Adds a product to the cart',() => {
    cart.add(products.apple)
    expect(cart.items[products.apple.id]).to.eql(products.apple)
  })

  it('Adds multiple quantities of the same product',() => {
    cart.add(products.apple)
    cart.add(products.apple)
    expect(cart.items[products.apple.id].qty).to.eql(2)
  })

  it('Adds different products',() => {
    cart.add(products.apple)
    cart.add(products.pear)
    expect(cart.items[products.apple.id].qty).to.eql(1)
    expect(cart.items[products.pear.id].qty).to.eql(1)
  })

  it('Counts items in the cart',() => {
    cart.add(products.apple)
    cart.add(products.pear)
    cart.add(products.pear)
    expect(cart.count()).to.eql(3)
  })

  it('Calculates total for item',() => {
    cart.add(products.apple)
    cart.add(products.pear)
    cart.add(products.pear)
    expect(cart.totalForProduct(products.pear)).to.eql('5.00')
  })


  it('Calculates total cost for all items',() => {
    cart.add(products.apple)
    cart.add(products.pear)
    cart.add(products.pear)
    expect(cart.total()).to.eql(6.99)
  })

  it('Returns the items as an array',() => {
    cart.add(products.apple)
    cart.add(products.pear)
    expect(cart.getItems().length).to.eql(2)
  })

  it('Removes a product',() => {
    cart.add(products.apple)
    cart.add(products.pear)
    cart.remove(products.apple)
    expect(cart.count()).to.eql(1)
  })

  it('Resets',() => {
    cart.add(products.apple)
    cart.reset()
    expect(cart.count()).to.eql(0)
  })

})
