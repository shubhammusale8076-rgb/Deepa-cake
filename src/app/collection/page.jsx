"use client";

import React, { useState } from 'react';
import CollectionCard from '@/app/collection/ui/CollectionCard';
import FooterCta from '@/app/home/ui/FooterCta';
import './Collection.css';
import HeroSection from '@/components/HeroSection';
import { productsData } from '@/data/products';

const filterButton = ["All", "Cakes", "Biscuits", "Cookies"];

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = activeFilter === "All"
    ? productsData
    : productsData.filter(item => item.category === activeFilter);

  return (
    <main className="collection-page">

      <HeroSection
        title="Our"
        highlight="Collection"
        subtitle="Crafted delights for every occasion"
        backgroundImage="/images/hero_cake.png"
      />

      <div className="collection-filter-wrapper">
        <div className="collection-filter-container">
          {filterButton.map((item) => (
            <button key={item} className={`btn-filter ${activeFilter === item ? "active" : ""}`} onClick={() => setActiveFilter(item)}>{item}</button>
          ))}
        </div>
      </div>

      <section className="collection-grid-section">
        <div className="collection-grid-container">
          {filteredData.map((item) => (
            <CollectionCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      </section>

      <FooterCta />
    </main>
  );
}
