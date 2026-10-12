import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  metadataBase: new URL('https://vvlearninghouse.in'),
  title: 'About Us | V V Learning House – Educational Publishing for Classes 1–8',
  description:
    'V V Learning House is an educational publishing company developing thoughtfully crafted learning resources for Classes 1–8. Led by Lalit Sharma, Director – Sales, with 30+ years of experience in educational publishing.',
  alternates: { canonical: '/About' },
  openGraph: {
    title: 'About Us | V V Learning House',
    description: 'Good Education Deserves Great Thinking. Educational publications for Classes 1–8.',
    url: '/About',
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
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-medium">
            Good Education Deserves Great Thinking.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-lg leading-relaxed mb-5">
            At V V Learning House, we believe the value of a textbook lies in what a student takes
            away from it. Every concept understood, every question explored, and every new
            perspective gained contributes to a stronger foundation for learning.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            We bring this belief to life through thoughtfully developed educational publications
            for Classes 1–8, combining academic expertise with a considered approach to content,
            illustrations, and classroom engagement.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2249]">Who We Are</h2>
          <div className="w-20 h-1 bg-[#D39B36] mx-auto mt-3 mb-6 rounded-full"></div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#D39B36] mb-8">
            A Publishing House That Understands the Classroom
          </h3>

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

      {/* LEADERSHIP */}
      <section className="py-20 bg-white border-t border-slate-200">
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
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A2249] mb-6">
                Three Decades of Experience. A Deep Understanding of School Education.
              </h3>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  With over 30 years of experience in educational publishing and sales, Lalit
                  Sharma brings extensive industry knowledge and a longstanding understanding of
                  the school education ecosystem.
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
                <p className="font-medium text-[#0A2249]">
                  His leadership reflects a straightforward principle: understand the classroom,
                  respect the educator, and ensure that every school partnership is built on
                  trust.
                </p>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {[
              { title: '30+ Years', desc: 'Experience in Educational Publishing' },
              { title: 'India & Gulf Region', desc: 'Institutional Relationships' },
              { title: 'School Partnerships', desc: 'Sales & Relationship Leadership' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition border border-slate-100 border-t-4 border-t-[#D39B36]"
              >
                <p className="text-2xl font-extrabold text-[#0A2249]">{item.title}</p>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
    
      {/* FOOTER */}

    </div>
  );
}