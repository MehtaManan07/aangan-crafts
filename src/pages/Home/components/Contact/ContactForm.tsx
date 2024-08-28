import { useState } from "react";
import { useSendContactMutation } from "../../../../hooks";
import toast from "react-hot-toast";

export const ContactForm = () => {
  const { mutateAsync } = useSendContactMutation({
    onSuccess: () => {
      toast.success("Thanks for reaching out! We will get back to you soon.");
      setDetails({
        name: "",
        contactNumber: "",
        message: "",
      });
    },
  });

  const [details, setDetails] = useState({
    name: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.name || !details.contactNumber) {
      toast.error("Please fill in your name and contact number.");
      return;
    }
    await mutateAsync(details);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        name="name"
        placeholder="enter your name"
        type="text"
        onChange={handleChange}
      />
      <input
        className="form-input"
        name="contactNumber"
        placeholder="enter phone number"
        type="tel"
        onChange={handleChange}
      />
      <textarea
        className="form-input message-input"
        name="message"
        placeholder="your message (optional)"
        onChange={handleChange}
      />
      <button className="submit-btn" type="submit" onClick={handleSubmit}>
        send message
      </button>
    </form>
  );
};
