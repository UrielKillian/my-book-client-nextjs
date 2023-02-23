import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomeLayoutComponent from '@/shared/layouts/home-layout.component'
import QuillComponent from '@/shared/components/quill-editor/quill.component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        Creando la pagina princial
      </div>
    </>
  )
}
