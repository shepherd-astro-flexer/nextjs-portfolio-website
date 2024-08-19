"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38.7rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="dark:text-white/80 text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shepherdastro.feria@gmail.com">
          shepherdastro.feria@gmail.com
        </a>{" "}
        or through this form.{" "}
      </p>

      <form
        className="dark:text-black mt-10 flex flex-col"
        action={async (formData) => {
          const response = await sendEmail(formData);

          // The error is now directly in the response, not inside a 'data' object
          if (response.error) {
            // Assuming 'response.error' is a string or an object with a 'message' property
            const errorMessage =
              typeof response.error === "object" && response.error.message
                ? response.error.message
                : response.error.toString();

            toast.error(errorMessage);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none h-14 rounded-lg borderBlack px-4"
          type="email"
          required
          maxLength={500}
          name="senderEmail"
          id=""
          placeholder="Your email"
        />
        <textarea
          className="dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="senderMessage"
          required
          maxLength={5000}
        />
        <SubmitBtn></SubmitBtn>
      </form>
    </motion.section>
  );
}
