const PRODUCT_CONDITION = Object.freeze({
  NEW: 'NEW' ,
  SEMI: 'SEMI'
})

async function getProducts() {
  return [
    {
      id: 1,
      name: 'Celular',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/telefone-1.jpg',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Motorola',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'Aparelho',
    },
    {
      id: 2,
      name: 'Caquito Dançante',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/caquito.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'sony',
      condition: PRODUCT_CONDITION.NEW,
      category: 'Brinquedo',
    },
    {
      id: 3,
      name: 'Controle',
      price: 6500,
      is_free_delivery: true,
      image_url: '/assets/images/controle.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Nokia',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'jogo',
    },
    {
      id: 4,
      name: 'CPU',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/cpu.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Pandora',
      condition: PRODUCT_CONDITION.NEW,
      category: 'computador',
    },
    {
      id: 5,
      name: 'Flor',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/flor.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'xerox',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'jardim',
    },
    {
      id: 6,
      name: 'Impressora',
      price: 6500,
      is_free_delivery: true,
      image_url: '/assets/images/impressora.png',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'sony',
      condition: PRODUCT_CONDITION.NEW,
      category: 'tecnologia',
    },
    {
      id: 7,
      name: 'Mause',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/mause.webp',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Pandora',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'computador',
    },
    {
      id: 8,
      name: 'Notebbok',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/notebook.jpg',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Motorola',
      condition: PRODUCT_CONDITION.NEW,
      category: 'tecnologia',
    },
    {
      id: 9,
      name: 'Teclado',
      price: 6500,
      is_free_delivery: true,
      image_url: '/assets/images/teclado.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'xerox',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'computador',
    },
    {
      id: 10,
      name: 'Celular 2',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/telefone-2.png',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'xerox',
      condition: PRODUCT_CONDITION.NEW,
      category: 'tecnologia',
    },
    {
      id: 11,
      name: 'Tv',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/tv.jpg',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Motorola',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'tecnologia',
    },
    {
      id: 12,
      name: 'Xbox 360',
      price: 6500,
      is_free_delivery: true,
      image_url: '/assets/images/xbox-360.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'LG',
      condition: PRODUCT_CONDITION.NEW,
      category: 'jogo',
    },
    {
      id: 13,
      name: 'Batedeira',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/batedeira.jpg',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'intel',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'cozinha',
    },
    {
      id: 14,
      name: 'Jogo de Panela',
      price: 6500,
      is_free_delivery: true,
      image_url: '/assets/images/jogo_de_panela.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Motorola',
      condition: PRODUCT_CONDITION.NEW,
      category: 'cozinha',
    },
    {
      id: 15,
      name: 'Jogo de Talheres',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/jogo_de_talheres.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'LG',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'cozinha',
    },
    {
      id: 16,
      name: 'Escorredor de Louça',
      price: 6500,
      is_free_delivery: true,
      image_url: '/assets/images/escorredor_de_louça.jpg',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'intel',
      condition: PRODUCT_CONDITION.NEW,
      category: 'cozinha',
    },
    {
      id: 17,
      name: 'Porta Espeto',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/porta_espeto.jpg',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'motorola',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'cozinha',
    },
    {
      id: 18,
      name: 'Fone de Ouvido',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/fone_de_ouvido.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'intel',
      condition: PRODUCT_CONDITION.NEW,
      category: 'tecnologia',
    },
    {
      id: 19,
      name: 'Árvore de Natal',
      price: 6500,
      is_free_delivery: true,
      image_url: '/assets/images/arvore-de-natal.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'Pandora',
      condition: PRODUCT_CONDITION.SEMI,
      category: 'decoração',
    },
    {
      id: 20,
      name: 'Messa',
      original_price: 6500,
      price: 4500,
      is_free_delivery: true,
      image_url: '/assets/images/messa.jfif',
      description:  'É um fato conhecido de todos que um leitor se distrairá com...',
      brand: 'LG',
      condition: PRODUCT_CONDITION.NEW,
      category: 'cozinha',
    }
  ]
}
