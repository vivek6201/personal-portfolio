import React from "react";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {};

type Inputs = {
  fname: string;
  lname: string;
  subject: string;
  email: string;
  message: string;
};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    window.location.href = `mailto:gvicky45678@gmail.com?subject=${data.subject}&body=${data.message}`;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="h-full flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-around mx-auto items-center"
    >
      <h2 className="tracking-[15px] absolute top-24 uppercase text-gray-500 text-2xl">
        Contact
      </h2>

      <div className="flex flex-col space-y-10">
        <h2 className="font-semibold text-2xl opacity-80 text-center">
          Have some work for me!!{" "}
          <span className="text-orange-400">Lets Talk.</span>
        </h2>

        <div className="space-y-2 `">
          <div className="flex gap-x-4 text-xl text-white items-center justify-center">
            <MdEmail className="text-xl text-orange-400 animate-pulse" />
            <p>gvicky45678@gmail.com</p>
          </div>
          <div className="flex gap-x-4 text-xl text-white items-center justify-center">
            <HiLocationMarker className="text-xl text-orange-400 animate-pulse" />
            <p>Jamshedpur, Jharkhand</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex gap-2 flex-col md:flex-row">
            <input
              {...register("fname")}
              type="text"
              className="contactInput"
              placeholder="First Name"
            />
            <input
              {...register("lname")}
              type="text"
              className="contactInput"
              placeholder="Last Name"
            />
          </div>

          <input
            {...register("email")}
            type="email"
            className="contactInput"
            placeholder="Email"
          />
          <input
            {...register("subject")}
            type="text"
            className="contactInput"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            placeholder="Enter Details About Work"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-yellow-500 font-bold text-black py-3 rounded-md text-lg uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
