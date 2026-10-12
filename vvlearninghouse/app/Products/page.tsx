import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://vvlearninghouse.in'),
  title: 'School Books for Class 1 to 8 | V V Learning House',
  description:
    'Curriculum-based school books for Class 1 to Class 8 by V V Learning House. Request samples and bulk orders for your school.',
  keywords: [
    'V V Learning House',
    'school books',
    'Class 1 to 8 books',
    'school book publisher',
    'curriculum based books',
  ],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Our Products | V V Learning House',
    description: 'Quality school books for Class 1 to Class 8.',
    url: '/products',
    siteName: 'V V Learning House',
    images: ['/class1.jpeg'],
    type: 'website',
  },
};

// Images should be placed in the /public folder: public/class1.jpeg ... public/class8.jpeg
const products = [
  { id: 1, title: 'Class 1', image: '/class1.jpeg' },
  { id: 2, title: 'Class 2', image: '/class2.jpeg' },
  { id: 3, title: 'Class 3', image: '/class3.jpeg' },
  { id: 4, title: 'Class 4', image: '/class4.jpeg' },
  { id: 5, title: 'Class 5', image: '/class5.jpeg' },
  { id: 6, title: 'Class 6', image: '/class6.jpeg' },
  { id: 7, title: 'Class 7', image: '/class7.jpeg' },
  { id: 8, title: 'Class 8', image: '/class8.jpeg' },
];

// Structured data so Google understands this page lists books
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'School Books by V V Learning House',
  itemListElement: products.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Book',
      name: `V V Learning House ${item.title} Book`,
      image: `https://vvlearninghouse.in${item.image}`,
      publisher: { '@type': 'Organization', name: 'V V Learning House' },
    },
  })),
};

export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="relative bg-[#0A2249] overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-[#D39B36]"
          style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50"
          style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-36 relative z-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#D39B36] rounded-full flex items-center justify-center mb-5 shadow-lg">
            <BookOpen className="text-[#0A2249]" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Our <span className="text-[#D39B36]">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl">
            Quality school books for Class 1 to Class 8, crafted to make learning engaging and joyful.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 -mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2249]">Our Book Collection</h2>
            <div className="w-20 h-1 bg-[#D39B36] mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 max-w-3xl mx-auto mt-6 text-lg">
              V V Learning House publishes curriculum-based school books for Class 1 to Class 8,
              written by experienced educators with engaging illustrations and activities. Browse
              our collection and contact us for samples or bulk orders for your school.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Book cover */}
                <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`V V Learning House ${item.title} school book cover`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0A2249] text-[#D39B36] text-xs font-bold px-3 py-1 rounded-full shadow">
                    {item.title}
                  </span>
                </div>

                {/* Card footer */}
                <div className="p-5 text-center border-t-4 border-[#D39B36]">
                  <h3 className="text-lg font-bold text-[#0A2249]">{item.title}</h3>
                  <p className="text-sm text-slate-500">V V Learning House</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-[#0A2249] mb-6">
            Want samples or bulk orders for your school?
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Get in touch with us and we will be happy to help you choose the right books.
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-[#D39B36] hover:bg-[#b8852d] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* FOOTER */}
     
    </div>
  );
}