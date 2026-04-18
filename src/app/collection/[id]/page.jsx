import React from 'react';
import ProductDetail from '@/app/collection/[id]/ui/ProductDetail';
import FooterCta from '@/app/home/ui/FooterCta';
import './ProductPage.css';
import { productsData } from '@/data/products';

export default async function ProductPage({ params }) {
  const { id } = await params;
  const productInfo = productsData.find(p => p.id === parseInt(id)) || productsData[0];

  return (
    <main className="detail-page">
      <section className="detail-section">
        <div className="detail-container">
          <ProductDetail
            title={productInfo.title}
            subtitle={productInfo.subtitle}
            description={productInfo.description}
            price={productInfo.price}
            image={productInfo.image}
          />
        </div>
      </section>

      <FooterCta />
    </main>
  );
}
