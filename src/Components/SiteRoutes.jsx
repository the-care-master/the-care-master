import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollOnTop from "./ScrollOnTop";
import DotLoader from "react-spinners/DotLoader";

const Home = lazy(() => import("../Pages/Home"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const Products = lazy(() => import("../Pages/Products"));
const ProductDetails = lazy(() => import("../Pages/ProductDetails"));
const Solutions = lazy(() => import("../Pages/Solutions"));
const OurAchievements = lazy(() => import("./OurAchievements"));

export default function SiteRoutes() {
    return (
        <>
            <ScrollOnTop />

            <Suspense fallback={
                <div className="min-h-screen flex justify-center items-center">
                    <DotLoader size={45} color="#020202" />
                </div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products-details/:slug"
                        element={<ProductDetails />}
                    />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/our-achievements" element={<OurAchievements />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </Suspense>
        </>
    );
}