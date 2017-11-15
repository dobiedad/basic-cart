class Cart {
  constructor(props) {
    !props ? props = {} : undefined
    this.items = props.items || {}
  }

  add(product) {
    const itemExistsInCart = this.items[product.id]

    if(itemExistsInCart){
      const itemInCartHasNoQty = !this.items[product.id].qty
      if(itemInCartHasNoQty) {
        this.resetQuantity(product)
      }
      return this.items[product.id].qty++
    }
    this.items[product.id] = product
    return this.resetQuantity(product)
  }

  remove(product) {
    const item = this.items[product.id]

    if(item && item.qty == 1){
      delete this.items[product.id]
    }
    else if (item) {
      item.qty--
    }
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

export { Cart as default }
