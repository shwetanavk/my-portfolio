"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { info, phoneRegex, emailDetails } from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus("Phone number copied!");
        setTimeout(() => setCopyStatus(""), 2000);
      })
      .catch(() => {
        setCopyStatus("Failed to copy");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        emailDetails["Service ID"],
        emailDetails["Template ID"],
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        emailDetails["Public Key"]
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="py-10">
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="xl:h-[54%] order-2 xl:order-none ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 rounded-xl theme-bg-gray"
          >
            <h1 className="text-3xl">Let's work together</h1>
            <p className="theme-text-secondary">
              Send me a message and I'll get back to you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="p-2 rounded-md theme-bg"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="p-2 rounded-md theme-bg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded-md theme-bg"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 rounded-md theme-bg"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 rounded-md theme-bg"
              required
            ></textarea>
            <div className="flex">
              <button
                disabled={status.length > 1 ? true : false}
                type="submit"
                className={`${status.length > 1 ? "bg-gray-400 text-white" : "theme-button"}  flex-grow px-6 py-2 rounded-md transition-all`}
              >
                Send
              </button>
              {status && (
                <button
                  onClick={() => {
                    setStatus("");
                  }}
                  className="theme-button px-6 py-2 rounded-md transition-all"
                >
                  Resend
                </button>
              )}
            </div>

            <p className="theme-text-secondary h-2">{status}</p>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
          <div>
            {info && info.length ? (
              <div className="flex flex-col gap-10">
                {info.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-14 w-14 rounded-lg theme-bg-gray text-3xl justify-center flex items-center theme-text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="theme-text-secondary">{item.title}</h3>
                      <h2>
                        {item.description.includes("@") ? (
                          <a
                            href={`mailto:${item.description}`}
                            className="hover:underline"
                          >
                            {item.description}
                          </a>
                        ) : item.description.match(phoneRegex) ? (
                          <span
                            className="cursor-pointer hover:underline"
                            onClick={() => {
                              handleCopy(item.description);
                            }}
                          >
                            {item.description}
                          </span>
                        ) : (
                          item.description
                        )}
                      </h2>
                    </div>
                  </div>
                ))}

                <p className="theme-accent text-sm mt-1 h-4">{copyStatus}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
