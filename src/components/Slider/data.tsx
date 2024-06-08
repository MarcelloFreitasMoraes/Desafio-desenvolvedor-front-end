'use client'

import { Image } from './type'

const imagesData: string[] = ['Banana', 'Maçã', 'Abacaxi', 'Manga', 'Pêra']

export const Images: Image[] = imagesData.map((fruit, index) => ({
    url: `/bg${index + 1}.jpg`,
    alt: fruit,
}))
