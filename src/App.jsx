// import routes and route
import { Routes, Route } from "react-router-dom";

// import components
import { Header, Footer } from "./components";

// import pages
import { Home, PropertyDetails } from "./pages";

export const App = () => {
  return (
    <main className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </main>
  );
};
