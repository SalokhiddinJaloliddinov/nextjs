import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { MainLayout } from '../src/components/layout/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
