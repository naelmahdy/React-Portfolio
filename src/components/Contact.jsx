import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full   bg-[#0a192f] flex justify-center items-center  p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/1f36c999-36b0-469c-bbce-64d71ed39011"
        className="flex flex-col md:max-w[800px] mt-20 "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            submit the form below or send me an email - naelmahdy33@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className="my-4 p-4 bg-[#ccd6f6]"
          type="email"
          placeholder="email"
          g
          name="email"
        />

        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="message"
        ></textarea>

        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          {" "}
          let's contact
        </button>
      </form>
    </div>
  );
};

export default Contact;
