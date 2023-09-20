import React from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout name="contact">
      <div className="w-full h-full bg-red-400 flex ">
        <div className="bg-gray-400 flex-1">1</div>
        <div className="bg-violet-400 flex-1 flex flex-col">
          <div className="flex-[0.2] sm:bg-red-600 md:bg-yellow-400">2.1</div>
          <div className="flex-[0.8] bg-orange-300">2.2</div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
