// src/components/About.js
import React from 'react';

function About() {
  return (
    <div className="bg-black py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-black text-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 md:p-16">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to Gadget Galaxy, your number one source for all tech gadgets. We're dedicated to giving you the very best of electronics, with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-lg mb-6">
            Founded in 2024 by Deepak , Ayush and Amit, Gadget Galaxy has come a long way from its beginnings in a home office. When Deepak and Ayush first started out, their passion for helping others be more tech-savvy, providing the best gadgets for fellow tech enthusiasts, drove them to do intense research, quit their day jobs, and gave them the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the innovative wing of the electronics industry.
          </p>
          <p className="text-lg mb-6">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="text-lg mt-6">
            Sincerely,
            <br />
            Deepak , Ayush & Amit , Founders
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
