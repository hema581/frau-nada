
import React from 'react';
import Header from '../components/Header';
import Courses from '../components/Courses';

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Courses />
      </main>
    </div>
  );
};

export default CoursesPage;
