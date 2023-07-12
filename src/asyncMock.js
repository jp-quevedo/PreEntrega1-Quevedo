const products = [
    {
        id: 1,
        name: 'Candelero Blanco',
        price: 9990,
        category: 'candeleros',
        img: './assets/candelero-blanco.avif',
        stock: 5,
        description: 'Medidas 30x30cm',
    },
    {
        id: 2,
        name: 'Candelero Negro',
        price: 13990,
        category: 'candeleros',
        img: './assets/candelero-negro.avif',
        stock: 2,
        description: 'Medidas 25x25cm',
    },
    {
        id: 3,
        name: 'Espejo Cuadrado',
        price: 80990,
        category: 'espejos',
        img: './assets/espejo-cuadrado.avif',
        stock: 8,
        description: 'Medidas 40x80cm',
    },
    {
        id: 4,
        name: 'Espejo Redondo',
        price: 65990,
        category: 'espejos',
        img: './assets/espejo-redondo.avif',
        stock: '6',
        description: 'Medidas 40x40cm',
    },
    {
        id: 5,
        name: 'Marco Grande',
        price: 9990,
        category: 'marcos',
        img: './assets/marco-grande.avif',
        stock: 7,
        description: 'Tamaño A4',
    },
    {
        id: 6,
        name: 'Marco Pequeño',
        price: 7990,
        category: 'marcos',
        img: './assets/marco-pequeño.avif',
        stock: 9,
        description: 'Tamaño Retrato',
    },
    {
        id: 7,
        name: 'Planta Colgante',
        price: 4990,
        category: 'plantas',
        img: './assets/planta-colgante.avif',
        stock: 3,
        description: 'Kokedama Artificial',
    },
    {
        id: 8,
        name: 'Planta de Macetero',
        price: 6990,
        category: 'plantas',
        img: './assets/planta-macetero.avif',
        stock: 4,
        description: 'Macetero de Acrílico',
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}