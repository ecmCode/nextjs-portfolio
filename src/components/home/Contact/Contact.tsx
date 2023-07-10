import React, { useEffect, useState } from "react";
import Title from "../Titles/Title";
import Container from "../Container/Container";
import style from "./Contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [invalid, setInvalid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform submit action with formData

    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setInvalid(false);
    setSubmitted(true);
  };

  const handleInvalid = () => {
    setInvalid(true);
  };

  return (
    <>
      <Title>Contact Me</Title>
      <Container variant="full">
        <form id="contact" className={style.form} onSubmit={handleSubmit}>
          <div className={style.slot}>
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onInvalid={handleInvalid}
            />
            {invalid && (
              <span className={style.warning}>Name must not be empty</span>
            )}
          </div>
          <div className={style.slot}>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onInvalid={handleInvalid}
            />
            {invalid && <span className={style.warning}>Invalid Email</span>}
          </div>
          <div className={style.slot}>
            <label htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onInvalid={handleInvalid}
            />
            {invalid && (
              <span className={style.warning}>Message must not be empty</span>
            )}
          </div>
          <button className={style.btn} type="submit">
            Submit
          </button>
          {submitted && (
            <div className={style.submitted}>
              Thanks for your feedback! We will get you back ASAP.
            </div>
          )}
        </form>
      </Container>
    </>
  );
};

export default Contact;
