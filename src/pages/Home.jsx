import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-14 w-screen ">
      <h1 className="text-[3rem] font-bold m-auto w-full tex-shadow flex text-center justify-center mb-7 text-red-400">
        Welcome to my website.
      </h1>
      <div className="w-11/12 flex m-auto mb-5 border-gray-200  shadow-xl cursor-pointer rounded-md overflow-hidden hover:bg-blue-100 bg-slate-100">
        <div className="w-60 h-auto flex justify-center items-center text-center bg-red-100">
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-extrabold">
            HTML
          </h1>
        </div>
        <div className="flex flex-col w-full justify-start px-5 py-3">
          <Link to="html" className="text-xl font-bold mb-5">
            What is HTML ?
          </Link>
          <p>
            HTML stands for HyperText Markup Language. It is the standard markup
            language used to create and design documents on the World Wide Web.
            HTML elements are the building blocks of web pages, which are used
            to structure content, such as text, images, links, and other media.
          </p>
        </div>
      </div>
      <div className="w-11/12 flex m-auto mb-5 border-gray-200  shadow-xl cursor-pointer rounded-md overflow-hidden hover:bg-blue-100 bg-slate-100">
        <div className="w-60 h-auto flex justify-center items-center text-center bg-red-100">
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-extrabold">
            CSS
          </h1>
        </div>
        <div className="flex flex-col w-full justify-start px-5 py-3">
          <Link to="html" className="text-xl font-bold mb-5">
            What is CSS ?
          </Link>
          <p>
            CSS stands for Cascading Style Sheets. It is a stylesheet language
            used for describing the presentation of a document written in HTML
            or XML. CSS controls the layout and appearance of web pages,
            allowing you to style and design them in various ways.
          </p>
        </div>
      </div>
      <div className="w-11/12 flex m-auto mb-5 border-gray-200  shadow-xl cursor-pointer rounded-md overflow-hidden hover:bg-blue-100 bg-slate-100">
        <div className="w-60 h-auto flex justify-center items-center text-center bg-red-100">
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-extrabold">
            Javascript
          </h1>
        </div>
        <div className="flex flex-col w-full justify-start px-5 py-3">
          <Link to="html" className="text-xl font-bold mb-5">
            What is JavaScript ?
          </Link>
          <p>
            JavaScript is a versatile, high-level programming language primarily
            used for adding interactivity and dynamic behavior to web pages. It
            is an essential part of web development, along with HTML and CSS.
          </p>
        </div>
      </div>
      <div className="w-11/12 flex m-auto mb-5 border-gray-200  shadow-xl cursor-pointer rounded-md overflow-hidden hover:bg-blue-100 bg-slate-100">
        <div className="w-60 h-auto flex justify-center items-center text-center bg-red-100">
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-extrabold">
            ReactJS
          </h1>
        </div>
        <div className="flex flex-col w-full justify-start px-5 py-3">
          <Link to="reactjs" className="text-xl font-bold mb-5">
            What is ReactJS ?
          </Link>
          <p>
            React.js, often referred to simply as React, is a popular
            open-source JavaScript library for building user interfaces,
            particularly single-page applications where data changes frequently
            over time. It was developed and is maintained by Facebook, along
            with a community of individual developers and companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
