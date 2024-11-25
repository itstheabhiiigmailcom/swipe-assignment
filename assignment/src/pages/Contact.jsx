import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact Form Section */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions or want to work with us? Fill out the form below,
              and we'll get back to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 bg-blue-600 text-white p-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-200 mb-4">
              You can reach out to me through the following Gateways:
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-medium">Phone</h4>
              <p>+91 80027-48760</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium">Email</h4>
              <p>itstheabhiii@gmail.com</p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Follow Me</h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/abhishek-kumar-1546ba265/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.658-2-1.524-2 0v4.5h-3v-9h3v1.255c1.396-2.586 5-2.777 5 2.476v5.269z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/invites/contact/?igsh=uehybwi3k7tn&utm_content=n731vkl"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.314 3.608 1.289.975.975 1.227 2.242 1.289 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.314 2.633-1.289 3.608-.975.975-2.242 1.227-3.608 1.289-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.314-3.608-1.289-.975-.975-1.227-2.242-1.289-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.314-2.633 1.289-3.608.975-.975 2.242-1.227 3.608-1.289 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.39.062-2.962.334-4.09 1.462-1.128 1.128-1.4 2.7-1.462 4.09-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.39.334 2.962 1.462 4.09 1.128 1.128 2.7 1.4 4.09 1.462 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.39-.062 2.962-.334 4.09-1.462 1.128-1.128 1.4-2.7 1.462-4.09.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.39-.334-2.962-1.462-4.09-1.128-1.128-2.7-1.4-4.09-1.462-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.407 0-6.162 2.755-6.162 6.162s2.755 6.162 6.162 6.162 6.162-2.755 6.162-6.162-2.755-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
