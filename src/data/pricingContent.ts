export interface pricingType {
    id: number,
    name: string,
    mainColor: string,
    price: number,
    description: string,
    benefits: string[]
}

export const pricingData: pricingType[] = [
    {
        id: 0,
        name: 'Standard',
        mainColor: '#1775e1',
        price: 29.90,
        description: 'Perfeito se a sua comunidade está em ascensão.',
        benefits: [
            'Benefício Standard', 'Benefício Standard', 'Benefício Standard', 'Benefício Standard', 'Benefício Standard', 'Benefício Standard', 'Benefício Standard'
        ]
    },
    {
        id: 1,
        name: 'Pro',
        mainColor: '#3ccf91',
        price: 49.90,
        description: 'Tudo que você precisa e mais um pouco.',
        benefits: [
            'Benefício Pro', 'Benefício Pro',  'Benefício Pro',  'Benefício Pro',  'Benefício Pro',  'Benefício Pro',  'Benefício Pro', 
        ]
    },
    {
        id: 2,
        name: 'Advanced',
        mainColor: '#ff715b', 
        price: 69.90,
        description: 'O mais escolhido por comunidades de larga escala.',
        benefits: [
            'Benefício Advanced', 'Benefício Advanced', 'Benefício Advanced', 'Benefício Advanced', 'Benefício Advanced', 'Benefício Advanced', 
        ]
    }
    
]
