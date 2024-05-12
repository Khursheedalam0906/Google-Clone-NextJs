import React, { useState } from "react";

const Footer: React.FC = () => {
  return (
    <div className="absolute w-full bottom-0 bg-slate-100">
      <div className="border-b-2 px-5 py-2">India</div>
      <div className="flex justify-between">
        <ul className="flex px-5 py-2">
          <li>About</li>
          <li className="px-4">Advertising</li>
          <li>Business</li>
          <li className="pl-4">How serarch works</li>
        </ul>
        <ul className="flex px-5 py-2">
          <li>Privacy</li>
          <li className="px-5">Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
