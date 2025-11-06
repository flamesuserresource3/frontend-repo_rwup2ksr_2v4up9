import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-28 lg:py-32">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 drop-shadow-xl">
              We save your bookmarks for your ease.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-700 text-lg">
              Keep your favorite websites organized with beautiful cards, tags, and quick search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
