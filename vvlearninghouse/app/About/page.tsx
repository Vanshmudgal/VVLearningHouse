import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  metadataBase: new URL('https://vvlearninghouse.in'),
  title: 'About Us | V V Learning House – Education Solutions Company',
  description:
    'V V Learning House is an educational publishing company creating curriculum-aligned textbooks for Classes 1–8, led by Lalit Sharma, Director – Sales, with 30+ years of experience.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | V V Learning House',
    description: 'Curriculum-aligned educational publications for Classes 1–8, backed by 30+ years of industry experience.',
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
        {/* Soft decorative glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D39B36]/10 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 md:pb-48 relative z-10 flex flex-col items-center text-center">
          <span className="inline-block text-xs font-semibold text-[#D39B36] uppercase tracking-[0.2em] border border-[#D39B36]/40 rounded-full px-4 py-1.5 mb-8">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            Good Education Deserves{' '}
            <span className="text-[#D39B36]">Great Thinking.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-5">
            At V V Learning House, we believe the value of a textbook lies in what a student takes
            away from it. Every concept understood, every question explored, and every new
            perspective gained contributes to a stronger foundation for learning.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl">
            We bring this belief to life through thoughtfully developed educational publications for
            Classes 1–8, combining academic expertise with a considered approach to content,
            illustrations, and classroom engagement.
          </p>
        </div>

        {/* Wave divider */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-16 md:h-24 block"
          aria-hidden="true"
        >
          <path d="M0,50 C260,115 520,0 760,40 C1000,80 1230,110 1440,30 L1440,120 L0,120 Z" fill="#D39B36" />
          <path d="M0,72 C260,125 520,28 760,62 C1000,96 1230,118 1440,58 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* WHO WE ARE */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#D39B36] uppercase tracking-[0.15em] mb-3">Who We Are</p>
          <h2 className="text-3xl font-bold text-[#0A2249]">
            A Publishing House That Understands the Classroom
          </h2>
          <div className="w-20 h-1 bg-[#D39B36] mx-auto mt-3 mb-8 rounded-full"></div>

          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              V V Learning House is an educational publishing company committed to developing
              learning resources that serve the evolving needs of schools, educators, and students.
            </p>
            <p>
              Our publications are developed by experienced educators and subject-matter experts,
              with careful attention to curriculum requirements, conceptual clarity, and
              age-appropriate learning experiences.
            </p>
            <p>
              We recognise that a textbook has two equally important responsibilities: to support
              the teacher delivering the lesson and to help the student understand it. This
              understanding informs our approach to content development, from the way concepts are
              introduced to the illustrations and activities that reinforce them.
            </p>
            <p>
              Our focus remains on creating books that educators can confidently bring into their
              classrooms and students can meaningfully engage with, both at school and at home.
            </p>
          </div>
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
            {/* PHOTO: public/director3.png */}
            <div className="md:col-span-2 flex justify-center">
              <figure className="w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Gold accent bar */}
                <div className="h-1.5 bg-[#D39B36]"></div>

                {/* Photo with matte border */}
                <div className="p-3 bg-white">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200">
                    <Image
                      src="/director3.png"
                      alt="Lalit Sharma, Director – Sales at V V Learning House"
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
                    Director – Sales
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
                Three Decades of Experience. A Deep Understanding of School Education.
              </h3>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  With over 30 years of experience in educational publishing and sales, Lalit Sharma
                  brings extensive industry knowledge and a longstanding understanding of the school
                  education ecosystem.
                </p>
                <p>
                  Throughout his career, he has worked closely with schools, teachers, and
                  education professionals, developing a practical understanding of curriculum
                  expectations, classroom requirements, and the factors that influence the
                  selection of educational resources.
                </p>
                <p>
                  As Director – Sales at V V Learning House, he leads the company&apos;s sales
                  strategy and institutional relationships across India and the Gulf region. His
                  experience informs the company&apos;s approach to school partnerships, ensuring
                  that conversations are grounded in the academic and operational priorities of
                  educational institutions.
                </p>
                <p>
                  He believes that meaningful partnerships are built through a thorough
                  understanding of the institutions they serve, consistent engagement, and a
                  commitment to delivering long-term value.
                </p>
              </div>

              {/* Guiding principle */}
              <blockquote className="mt-6 border-l-4 border-[#D39B36] pl-5 py-1 text-[#0A2249] text-lg font-semibold italic leading-relaxed">
                Understand the classroom, respect the educator, and ensure that every school
                partnership is built on trust.
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { title: '30+ Years', desc: 'Experience in Educational Publishing' },
                  { title: 'India & Gulf Region', desc: 'Institutional Relationships' },
                  { title: 'School Partnerships', desc: 'Sales & Relationship Leadership' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition border border-slate-100 border-t-4 border-t-[#D39B36]"
                  >
                    <p className="text-lg font-extrabold text-[#0A2249]">{item.title}</p>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
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