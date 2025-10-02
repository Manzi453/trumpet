import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./main/Layout";
import { ThemeProvider } from "./main/ThemeContext";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Services = lazy(() => import("./pages/services"));
const ContactForm = lazy(() => import("./pages/contact"));
const Rwanda = lazy(() => import("./pages/destination"));
const Uganda = lazy(() => import("./pages/uganda"));
const UgaItineraries = lazy(() => import("./pages/ugandaiten"));
const RwaItineraries = lazy(() => import("./pages/rwandaItern"));
const Itineraries = lazy(() => import("./pages/iternature"));
const Plan = lazy(() => import("./pages/plan"));
const Packages = lazy(() => import("./pages/packages"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactForm />
              </Layout>
            }
          />
          <Route
            path="/Rwanda"
            element={
              <Layout>
                <Rwanda />
              </Layout>
            }
          />
          <Route
            path="/Uganda"
            element={
              <Layout>
                <Uganda />
              </Layout>
            }
          />
          <Route
            path="/Uganda-Itineraries"
            element={
              <Layout>
                <UgaItineraries />
              </Layout>
            }
          />
          <Route
            path="/Rwanda-Itineraries"
            element={
              <Layout>
                <RwaItineraries />
              </Layout>
            }
          />
          <Route
            path="/Itineraries/:id"
            element={
              <Layout>
                <Itineraries />
              </Layout>
            }
          />
          <Route
            path="/Plan"
            element={
              <Layout>
                <Plan />
              </Layout>
            }
          />
          <Route
            path="/Packages"
            element={
              <Layout>
                <Packages />
              </Layout>
            }
          />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
