import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-[100vh] flex items-center justify-center">
          <p className="text-gray-700 text-4xl font-semibold text-center initialize">
            Initializing
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>
      ) : (
        <>
          <Navbar />
          <Footer />
        </>
      )}
    </>
  );
}
