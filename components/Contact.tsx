import React from "react";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo:PageInfo
};

type Inputs = {
  fname: string;
  lname: string;
  subject: string;
  email: string;
  message: string;
};

export default function Contact({pageInfo}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    window.location.href = `mailto:${pageInfo?.email}?subject=${data.subject}&body=${data.message}`;
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
      className="h-full py-16 flex relative flex-col text-center max-w-7xl px-3 xl:gap-y-12 md:px-10 justify-center mx-auto items-center"
    >
      <h2 className="tracking-[15px] mb-4 uppercase text-gray-500 text-2xl">
        Contact
      </h2>

      <div className="flex flex-col space-y-4 md:space-y-10">
        <h2 className="font-semibold text-xl md:text-2xl opacity-80 text-center">
          Have some work for me!!{" "}
          <span className="text-orange-400">Lets Talk.</span>
        </h2>

        <div className="md:space-y-2 `">
          <div className="flex gap-x-4 md:text-xl text-white items-center justify-center">
            <MdEmail className="text-xl text-orange-400 animate-pulse" />
            <p>{pageInfo?.email}</p>
          </div>
          <div className="flex gap-x-4 md:text-xl text-white items-center justify-center">
            <HiLocationMarker className="text-xl text-orange-400 animate-pulse" />
            <p>{pageInfo?.address}</p>
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
            className="bg-yellow-500 font-bold text-black py-3 rounded-md md:text-lg uppercase"
          >
            Submit
          </button>
        </form>
      </div>

    </motion.div>
  );
}
