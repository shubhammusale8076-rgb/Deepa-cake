"use client"

import useInView from '@/hooks/useInView';
import { useRouter } from 'next/navigation';
import React from 'react';


const categories = [
  { id: 1, name: 'Cakes', image: '/images/Cake_Image.png' },
  { id: 2, name: 'Cookies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop' },
];

export default function CategoryList() {

  const [ref, visible] = useInView(150);

  const router = useRouter();

  const handleRedirect = (category) => {
    router.push(`/collection?category=${category}`);
  };

  return (
    <section ref={ref} className={`category-section section-padding ${visible ? "show" : ""}`}>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-item"
            onClick={() => handleRedirect(cat.name)}
            style={{ cursor: "pointer" }}
          >
            <div className="category-image-wrap">
              <img src={cat.image} alt={cat.name} className="category-image" />
              <div className="category-overlay"></div>
            </div>
            <h3 className="category-name">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
