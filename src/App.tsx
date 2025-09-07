import { Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';

// استيراد المكونات والصفحات
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import CoursesPage from './pages/Courses'; // تم تغيير الاسم هنا ليكون أوضح
import CourseDetailPage from './pages/CourseDetail'; // 1. استيراد صفحة التفاصيل الجديدة
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

function App() {
  const { currentLanguage } = useLanguage();

  return (
    <div key={currentLanguage} className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CoursesPage />} />
          {/* 2. هذا هو المسار الديناميكي الجديد الذي أضفناه */}
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;