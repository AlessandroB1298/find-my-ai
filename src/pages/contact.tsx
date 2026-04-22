import { useRef, useState } from "react";
import "../styles/components/_contact.css";
import type { ContactFormProps } from "../lib/types";
import { ToastContainer } from "react-toastify";
import { successToastMessage, errorToastMessage } from "../lib/toast";
import { getEncodedFormItems } from "../lib/helpers";
import { TEST_EMAIL } from "../lib/constants";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleClearForm = () => {
    setForm({ name: "", email: "", message: "", subject: " " });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { name, email, message, subject } = getEncodedFormItems(form);

      if (!name || !email || !message) {
        errorToastMessage(); // Or a custom "validation" toast
        return;
      }

      const recipient = TEST_EMAIL; // Test email for mailto
      const emailSubject = encodeURIComponent(`${subject}`);

      const body = encodeURIComponent(`\r${message}`);

      window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${body}`;

      // Success feedback and cleanup
      successToastMessage();
      handleClearForm();
    } catch (error) {
      console.error("Mailto trigger failed", error);
      errorToastMessage();
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
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
                name="user_name"
                className="form-input"
                placeholder="Ada Lovelace"
                required
              />
            </div>

            <div className="form-item">
              <label>Email</label>
              <input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
                name="user_email"
                type="email"
                className="form-input"
                placeholder="turingComplete@gmail.com"
                required
              />
            </div>
          </div>
          <div className="form-item">
            <label>Subject</label>
            <input
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              value={form.subject}
              name="subject"
              className="form-input"
              placeholder="Inquiry for multi-step-form"
              required
            />
          </div>
          <div className="form-item">
            <label>Message</label>
            <textarea
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              value={form.message}
              name="message"
              className="form-input-textarea"
              placeholder="Enter message here..."
              required
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
