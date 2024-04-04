import React from "react";

const Footer = () => {
  const footerLinks = ["About", "Terms", "Privacy", "Help"];

  return (
    <footer className="bg-white w-full flex justify-center items-center">
      <div className="w-11/12 flex justify-between items-center py-4 flex-wrap">
        <div className="text-3xl font-bold font-serif">Medium</div>
        <div className="text-xl lg:pl-32">Every idea needs a Medium</div>
        <div className="flex list-none gap-3 underline">
          {footerLinks.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
