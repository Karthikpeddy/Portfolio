import React from "react";
import logo from "../assets/webdev.gif";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#4831D4] text-white">
      <h1 className="text-3xl font-bold underline">
        Home <br />
      </h1>
      <div className="flex flex-row justify-between">
        <div>
          <h2>
            hii I am Reethika, <br />
            Aspire to a Web Developer
          </h2>
        </div>
        <div>
          <img src={logo} alt=" Web Development gif" />
        </div>
      </div>
    </div>
  );
}
export default Home;
