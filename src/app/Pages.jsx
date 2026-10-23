import Header from "./header/Header";
import About from "../features/about/About";
import Home from "../features/home/Home";
import Skills from "../features/skills/Skills";
import Services from "../features/services/Services";
import Portfolio from "../features/portfolio/Portfolio";
import Contact from "../features/contact/Contact";
import BlogHeader from "../features/blog/BlogHeader";
import Blog from "../features/blog/Blog";
import BlogPost from "../features/blog/BlogPost";
import { useRoute } from "./RouteContext";
import useDocumentMeta from "./useDocumentMeta";

const Pages = () => {
  const { page } = useRoute();
  useDocumentMeta();

  if (page === "blog" || page === "post") {
    return (
      <>
        <BlogHeader />
        <main className="main">{page === "blog" ? <Blog /> : <BlogPost />}</main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Pages;
