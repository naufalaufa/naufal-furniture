import { useRef } from "react";
import MailContact from "../../assets/images/mail.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Header } from "../../components";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      toast.success("Success sent message");
      if (formRef.current) {
        await emailjs.sendForm(
          `${import.meta.env.VITE_SERVICE_ID_EMAIL_JS}`,
          `${import.meta.env.VITE_TEMPLATE_ID_EMAIL_JS}`,
          formRef.current,
          {
            publicKey: `${import.meta.env.VITE_PUBLIC_KEY_EMAIL_JS}`,
          }
        );
      }
      formRef.current?.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 w-full  place-content-center place-items-center sm:grid-cols-2 sm:place-content-center sm:place-items-center gap-3 min-h-screen">
        <div>
          <img src={MailContact} alt={MailContact} />
        </div>
        <form onSubmit={sendEmail} ref={formRef} className="grid gap-4">
          <h1 className="text-center my-2 font-bold text-xl">Message</h1>
          <label>Name</label>
          <input
            name="user_name"
            required
            type="text"
            placeholder="your name"
            className="p-2 rounded-lg border border-black  max-w-[90vw]"
          />
          <label>Email</label>
          <input
            name="user_email"
            required
            type="email"
            placeholder="your email"
            className="p-2 rounded-lg border border-black  max-w-[90vw]"
          />
          <label>Message</label>
          <textarea
            name="message"
            required
            placeholder="Your message"
            className="p-4 rounded-lg border border-black text-xs w-96 max-w-[90vw]"
          />
          <input
            className="bg-orange-500 rounded-lg p-2 text-white my-3"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
