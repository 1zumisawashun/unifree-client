const cartDetails = {
  id_GBJ2Ep8246qeeT: {
    name: 'Bananas',
    id: 'id_GBJ2Ep8246qeeT',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    currency: 'USD',
    quantity: 14,
    value: 5600,
    price_data: {
      type: 'fruit'
    },
    product_data: {
      id: 1,
      description: 'A banana'
    },
    formattedValue: '$56.00',
    formattedPrice: '$4.00'
  }
}

export type CartDetails = typeof cartDetails

const cartItem = {
  name: 'Bananas',
  id: 'id_GBJ2Ep8246qeeT',
  price: 400,
  image:
    'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  currency: 'USD',
  quantity: 14,
  value: 5600,
  price_data: {
    type: 'fruit'
  },
  product_data: {
    id: 1,
    description: 'A banana'
  },
  formattedValue: '$56.00',
  formattedPrice: '$4.00'
}

export type CartItem = typeof cartItem
