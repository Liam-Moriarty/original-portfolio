import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    // overflow-x-clip rather than overflow-hidden: `hidden` would turn this into a
    // scroll container and silently break the sticky rail on a project page.
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-x-clip bg-purple-bg px-5 text-text-white sm:px-10">
      <div className="w-full max-w-7xl">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;
