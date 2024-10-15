import Footer from "../components/Footer";
import React from "react";
import NavBar from "../components/NavBar";

const layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
        <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2 mb-16">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
