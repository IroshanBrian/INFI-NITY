import ButtonGradient from "../assets/svg/ButtonGradient";
import React from "react";
import Header from "../components/Header";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "621e1fc8-c10c-4fd3-951d-8ffaafcf206a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="absolute z-40 top-[5rem] inset-0 items-center justify-center">
          <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">{result}</p>
              <form onSubmit={onSubmit} className="space-y-8">
                <input type="hidden" name="access_key" value="621e1fc8-c10c-4fd3-951d-8ffaafcf206a" />
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                  <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-white">Full Name</label>
                  <input type="text" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know you'r name" required />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
                  <textarea type="message" name=" message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className=" bg-black py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <BackgroundGradientAnimation />
      </div>
      <ButtonGradient />
    </>
  );
};

export default ContactUs;
