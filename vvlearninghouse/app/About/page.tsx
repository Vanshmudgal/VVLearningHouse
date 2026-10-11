import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  metadataBase: new URL('https://vvlearninghouse.in'),
  title: 'About Us | V V Learning House – Education Solutions Company',
  description:
    'V V Learning House is an education solutions company creating curriculum-based learning material for Class 1 to Class 8, led by Lalit Sharma, Director Sales, with 30+ years of experience.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | V V Learning House',
    description: 'An education solutions company backed by 30+ years of industry experience.',
    url: '/about',
    siteName: 'V V Learning House',
    images: ['/director.jpeg'],
    type: 'website',
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* HERO */}
      <section className="relative bg-[#0A2249] overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-[#D39B36]"
          style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-36 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            About <span className="text-[#D39B36]">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl">
            An education solutions company dedicated to creating engaging, educational and
            inspiring learning material for school children.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2249]">Who We Are</h2>
          <div className="w-20 h-1 bg-[#D39B36] mx-auto mt-3 mb-8 rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            V V Learning House is an education solutions company creating quality learning
            material for K-8. Our offerings are designed to align with school
            curriculums and educational standards, with engaging illustrations and activities that
            make learning enjoyable for children of all ages.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our content is created by experienced educators and subject matter experts, so that
            everything we offer is useful for teachers in the classroom and for students at home.
          </p>
        </div>
      </section>

      {/* DIRECTOR SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2249]">Leadership</h2>
            <div className="w-20 h-1 bg-[#D39B36] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* PHOTO: public/director.jpeg */}
            <div className="md:col-span-2 flex justify-center">
              <figure className="w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Gold accent bar */}
                <div className="h-1.5 bg-[#D39B36]"></div>

                {/* Photo with matte border */}
                <div className="p-3 bg-white">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200">
                    <Image
                      src="/director.jpeg"
                      alt="Lalit Sharma, Director Sales at V V Learning House"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Name plate */}
                <figcaption className="bg-[#0A2249] px-6 py-5 text-center border-t-4 border-[#D39B36]">
                  <p className="text-xl font-bold text-white tracking-wide">Lalit Sharma</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D39B36] mt-1">
                    Director Sales
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* CONTENT */}
            <div className="md:col-span-3 mt-8 md:mt-0">
              <span className="inline-block bg-[#0A2249] text-[#D39B36] text-sm font-bold px-4 py-1 rounded-full mb-4">
                30+ Years of Experience
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A2249] mb-5">
                Lalit Sharma, Director Sales
              </h3>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Lalit Sharma brings over three decades of hands-on experience in school
                  education publishing and sales. Having spent his career working closely with
                  schools, teachers and educators, he understands first-hand what classrooms need
                  and what makes a learning resource truly useful for a child.
                </p>
                <p>
                  As Director Sales at V V Learning House, he leads the company's sales and its
                  relationships with schools across the country. His deep understanding of the
                  education industry and the school ecosystem helps ensure that our solutions
                  reach the right classrooms and meet the real needs of students and teachers.
                </p>
                <p>
                  His focus is simple: build lasting partnerships with schools, deliver quality
                  resources that support the curriculum, and help more children enjoy learning.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { title: '30+ Years', desc: 'Industry experience' },
                  { title: 'Publishing', desc: 'School education' },
                  { title: 'Sales', desc: 'School partnerships' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition border border-slate-100 border-t-4 border-t-[#D39B36]"
                  >
                    <p className="text-xl font-extrabold text-[#0A2249]">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      

      {/* FOOTER */}
      <footer className="bg-[#051329] py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} V V Learning House. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">A BioFuture Life Sciences Brand</p>
        </div>
      </footer>
    </div>
  );
}