import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <div className=" text-white h-screen">
      <Header />
      <div className=" w-full h-[calc(100%-6rem)]">
        <AnimatePresence mode="popLayout">
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
