import HomeLayoutComponent from '@/shared/layouts/home-layout.component'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeLayoutComponent>
      <Component {...pageProps} />
    </HomeLayoutComponent>
  )
}
