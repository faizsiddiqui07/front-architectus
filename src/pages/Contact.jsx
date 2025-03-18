import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-24 sm:pt-28">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div data-aos="zoom-in-up" className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-white">
            We’d love to hear from you. Fill out the form below or reach us
            using the contact details provided.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            data-aos="zoom-in-up"
            className="bg-white shadow-md rounded-lg p-6"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            data-aos="zoom-in-up"
            className="bg-gray-100 shadow-md rounded-lg p-6 space-y-6 mb-8 lg:mb-0 flex flex-col justify-center items-center text-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Our Office
              </h3>
              <p className="text-gray-600">Lucknow, INDIA</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="mt-2 text-gray-600">
                <a href="tel:+919119897776">+91 - 9119897776</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="mt-2 text-gray-600">
                <a
                  href="mailto:architectusbureau@gmail.com"
                >
                  architectusbureau@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
