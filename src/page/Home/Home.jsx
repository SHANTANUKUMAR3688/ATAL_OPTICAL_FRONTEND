import React, { lazy, Suspense } from "react";
const Loader = lazy(() => import("../../components/Loader"));
const Banner = lazy(() => import("../../layout/Home/Banner"));
const About = lazy(() => import("../../layout/Home/About"));
const Frames = lazy(() => import("../../layout/Home/Frames"));
const Video = lazy(() => import("../../layout/Home/Video"));
const ProductGrid = lazy(() => import("../../layout/Home/ProductGrid"));
const Services = lazy(() => import("../../layout/Home/Services"));
const ModelViewer = lazy(() => import("../../layout/Home/ModelViewer"));
const EyewearTips = lazy(() => import("../../layout/Home/EyewearTips"));
const Frameshape = lazy(() => import("../../layout/Home/Frameshape"));
const Eyecheck = lazy(() => import("../../layout/Home/Eyecheck"));
const Promotion = lazy(() => import("../../layout/Home/Promotion"));
const Review = lazy(() => import("../../layout/Home/Review"));
const Faq = lazy(() => import("../../layout/Home/Faq"));
const TestimonialsSlider = lazy(() => import("../../layout/Home/Testimonials"));
const Eyewearsection = lazy(() => import("../../layout/Home/Eyewearsection"));

function Home() {
  return (
    <>
      
      <Suspense fallback={<Loader />}>
        <Banner />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Frames />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Video />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ProductGrid />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<div className="h-[500px]" />}>
        <ModelViewer />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <EyewearTips />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Frameshape />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Eyecheck />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Promotion />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Review />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Faq />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <TestimonialsSlider />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Eyewearsection />
      </Suspense>
    </>
  );
}

export default Home;