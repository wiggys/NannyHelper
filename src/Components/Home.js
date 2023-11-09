import Holding from './holding.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

export const HomePage = () => {
  return (
    <div class="flex flex-col h-screen justify-between bg-white">
      <Header />
        <section class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img class="object-cover object-center rounded" src={Holding} alt="Caregiver holding up child" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">The New Standard in
              <br class="hidden lg:inline-block" /> Nanny Management
            </h1>
            <p class="mb-8 leading-relaxed text-gray-900">It's never been easier to be a caregiver. 
            Get started!</p>
            <div class="flex justify-center">
              <a href="/parent">
                <button
                  className="text-white bg-purple-500 py-2 px-6 focus:outline-none hover:shadow-md hover:shadow-purple-600 hover:bg-purple-600 rounded text-lg"
                >
                  I'm a Parent
                </button>
              </ a>
              <a href="/nanny">
                <button
                  className="ml-4 text-gray-700 bg-purple-50 text-center py-2 px-6 hover:shadow-md hover:shadow-purple-100 hover:bg-purple-100 rounded text-lg">
                  I'm a Nanny
                </button>
              </ a>
            </div>
          </div>

      </section>
      <Footer />
    </div>
  );
}