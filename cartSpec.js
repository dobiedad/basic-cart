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
    return cart.add(products.apple)
      .then(() => {
        expect(cart.items[products.apple.id]).to.eql(products.apple)
      })
  })

  it('Adds multiple quantities of the same product',() => {
    return Promise.all([cart.add(products.apple),cart.add(products.apple)])
      .then(() => {
        expect(cart.items[products.apple.id].qty).to.eql(2)
      })
  })

  it('Adds different products',() => {
    return Promise.all([cart.add(products.apple),cart.add(products.pear)])
      .then(() => {
        expect(cart.items[products.apple.id].qty).to.eql(1)
        expect(cart.items[products.pear.id].qty).to.eql(1)
      })
  })

  it('Calculates total items in the cart',() => {
    return Promise.all([cart.add(products.apple),cart.add(products.pear),cart.add(products.pear)])
      .then(() => {
        expect(cart.count()).to.eql(3)
      })
  })

  it('Calculates total cost for the items in the cart',() => {
    return Promise.all([cart.add(products.apple),cart.add(products.pear),cart.add(products.pear)])
      .then(() => {
        expect(cart.total()).to.eql(6.99)
      })
  })

  it('Returns the items as an array',() => {
    return Promise.all([cart.add(products.apple),cart.add(products.pear)])
      .then(() => {
        expect(cart.getItems().length).to.eql(2)
      })
  })

  it('Removes a product',() => {
    return Promise.all([cart.add(products.apple),cart.add(products.pear),cart.remove(products.apple)])
      .then(() => {
        expect(cart.count()).to.eql(1)
      })
  })

  it('Resets',() => {
    return Promise.all([cart.add(products.apple)])
      .then(() => {
        cart.reset()
        expect(cart.count()).to.eql(0)
      })
  })

})
