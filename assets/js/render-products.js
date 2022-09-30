// criar uma classe que vai ser responsavel
// pegar os produtos que estão bo outro arquivo
// renderizar estes produtos na tela

class RenderProducts {
  constructor() {
    this.target = document.getElementById('products-list')
  }

  render(products) {
    const elements = products.map(product => {
      const element = createElement('div', {
        class: 'p-4 bg-white rounded-md houver:shadow-x1 cursor-pointer',
      })

      const figure = createElement(
        'figure',
        null,
        createElement('img', {
          src: product.image_url,
          alt: product.name,
        })
      )

      element.append(figure)

      const originalPrice = !product.original_price
        ? ''
        : createElement(
            'div',
            { class: 'text-xs' },
            createElement(
              'span',
              { class: 'text-slate-600 line-through' },
              format(product.original_price)
            ),
            ' ',
            createElement(
              'span',
              { class: 'text-green-600' },
              porcentBetween(product.original_price, product.price) + '%'
            )
          )

const freeDelivery = !product.is_free_delivery
? ''
: createElement(
  'div',
  null,
  createElement(
    'span',
    { class: 'text-sm text-green-600'},
    'Entrega grátis',
    createElement (
      'span',
      { class: 'ml-2' },
      createElement('i', { class: 'fa-solid fa-truck-fest'})
    )
  )
)

      const content = createElement(
        'div',
        { class: 'py-2 flex flex-col' },
        createElement('strong', null, product.name),
        createElement(
          'div',
          { class: 'py-2' },
          originalPrice,
          createElement(
            'span',
            { class: 'text-2x1 text-green-600' },
            format(product.price)
          )
        ),
        freeDelivery
      )

      element.append(content)

      const footer = createElement(
        'footer',
        null,
        createElement('p', null, product.description)
      )
      element.append(footer)

element.onclick = () => {
  this.events.onclick(product)
}

      return element
    })

    this.target.innerHTML = ''
    this.target.append(...elements)
  }
}
