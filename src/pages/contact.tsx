import { useRef, useState } from "react";
import "../styles/components/_contact.css";
import emailjs from "@emailjs/browser";
import type { ContactFormProps } from "../lib/types";
import { ToastContainer } from "react-toastify";
import { successToastMessage, errorToastMessage } from "../lib/toast";

export function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleClearForm = () => {
    setForm({ name: "", email: "", message: "" });
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, {
          publicKey: publicKey,
          limitRate: {
            id: "contact",
            throttle: 10000,
          },
        })
        .then(
          () => {
            console.log("sent email ");
            handleClearForm();
            successToastMessage();
          },
          (error) => {
            console.log(error);
            errorToastMessage();
          },
        );
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-sub-title">
          Fill out the form, and we will get back to you as soon as possible!
        </p>
      </div>
      <div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div>
            <div className="form-item">
              <label>Name</label>
              <input
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                value={form.name}
                name="user_name"
                className="form-input"
                placeholder="Ada Lovelace"
              />
            </div>
            <div className="form-item">
              <label>Email</label>
              <input
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                value={form.email}
                name="user_email"
                type="email"
                className="form-input"
                placeholder="turingComplete@gmail.com"
              />
            </div>
          </div>
          <div className="form-item">
            <label>Message</label>
            <textarea
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
              }}
              value={form.message}
              name="message"
              className="form-input"
              placeholder="Enter message here..."
            />
          </div>
          <div className="contact-submit">
            <button type="submit" className="contact-button">
              Send Email
            </button>
          </div>
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}
