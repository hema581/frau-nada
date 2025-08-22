
import React from 'react';
import Header from '../components/Header';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <FAQ />
      </main>
    </div>
  );
};

export default FAQPage;
