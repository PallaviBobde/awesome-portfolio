//get in touch
// Need an experienced senior full-stack developer to help out?

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactButton from "./ContactButton";
import { IoIosMail } from "react-icons/io";

export function Contact() {
  return (
    <div
      class="bg-gradient-to-r from-[#330867] to-[#0072ff] dark:from-[#330867] dark:to-[#0072ff] py-8 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <div class="max-w-7xl mx-auto">
        <div class="mr-20 mx-auto text-center flex flex-col justify-center align-center text-right">
          <h2 class="text-xl font-medium text-gray-900 dark:text-white sm:text-4xl">
            Let's get connected !
          </h2>
          <p className="m-2">
            Need an Experienced Frontend Specialist Developer to help out?
          </p>
          <p className="text-white  rounded-xl text-[20px]">Mail me- pallavibobde1@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
