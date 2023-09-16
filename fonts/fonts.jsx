import { Bebas_Neue, Inter, Roboto_Condensed } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const robotoCondensed = Roboto_Condensed({
  subsets: ['cyrillic', 'cyrillic-ext'],
  weight: ['300','400','700'],
  style: ['normal']
})

export const bebasNeue = Bebas_Neue({
  subsets: ['latin','latin-ext'],
  weight: ['400'],
  style: ['normal']
})