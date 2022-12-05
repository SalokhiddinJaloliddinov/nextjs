import Head from 'next/head';
import React from 'react';

interface MetaProps {
  title: string;
  description?: string;
}

export const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={description}></meta>
    </Head>
  );
};
