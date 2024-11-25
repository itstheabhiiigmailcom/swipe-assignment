import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-6">About Software Engineering</h1>
        
        <p className="text-gray-600 text-lg leading-relaxed">
          Software engineering is a systematic, disciplined, and measurable approach to the design, development, operation, and maintenance of software. It focuses on applying engineering principles to ensure that software products are reliable, scalable, and meet the needs of users effectively.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Key Aspects of Software Engineering</h2>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li className="mb-2">
              <span className="font-semibold">Requirements Analysis:</span> Gathering and defining the needs of stakeholders to build the right product.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Design:</span> Creating a blueprint of the software, including its architecture, components, and user interface.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Development:</span> Writing clean, efficient, and maintainable code to implement the design.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Testing:</span> Ensuring the software is free of bugs and performs as intended.
            </li>
            <li>
              <span className="font-semibold">Maintenance:</span> Updating the software to adapt to user needs and technological advancements.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Why Software Engineering Matters</h2>
          <p className="text-gray-600 text-lg">
            Software engineering plays a crucial role in today’s digital world. It powers industries ranging from healthcare and finance to education and entertainment. By following best practices and methodologies, software engineers ensure that products are built to handle real-world challenges while improving user experience and satisfaction.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">"Good software is built with both heart and mind."</h3>
          <p className="text-gray-600">
            Whether you're building a small application or a large enterprise system, software engineering principles ensure that the product is reliable, scalable, and adaptable to changing needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
