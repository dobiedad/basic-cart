class Cart {
  constructor(props) {
    !props ? props = {} : undefined
    this.items = props.items || {}
  }

  add(product) {
    var cloned = cloneObject(this.items)
    var clonedProduct = cloneObject(product)

    const itemExistsInCart = cloned[clonedProduct.id]

    if(itemExistsInCart){
      const itemInCartHasNoQty = !cloned[clonedProduct.id].qty
      if(itemInCartHasNoQty) {
        this.resetQuantity(clonedProduct)
      }
      return cloned[clonedProduct.id].qty++
    }
    cloned[clonedProduct.id] = product
    this.items = cloneObject(cloned)
    return this.resetQuantity(clonedProduct)
  }

  remove(product) {
    var cloned = cloneObject(this.items)
    var clonedProduct = cloneObject(product)

    const item = cloned[clonedProduct.id]

    if(item && item.qty == 1){
      delete cloned[clonedProduct.id]
    }
    else if (item) {
      cloned[clonedProduct.id].qty--
    }
    this.items = cloneObject(cloned)
  }

  total() {
    var total = 0

    Object.keys(this.items).map((item) => {
      total += Number(this.totalForProduct(this.items[item]))
    });

    return Number(total.toFixed(2))
  }

  totalForProduct(product) {
    var total = 0
    total += (Number(product.price) * Number(product.qty))
    return Number(total).toFixed(2)
  }

  count() {
    var count = 0

    Object.keys(this.items).map((key) => {
      count += this.items[key].qty
    });

    return count
  }

  resetQuantity(product) {
    this.items[product.id].qty = 1
  }

  getItems() {
    return Object.values(this.items)
  }

  reset() {
    this.items = {}
  }
}

function cloneObject(object){
  return Object.assign({},object)
}

export { Cart as default }
