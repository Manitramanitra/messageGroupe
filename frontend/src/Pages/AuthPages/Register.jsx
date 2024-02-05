import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/shared/Input";
import Logo from "../../components/shared/Logo";
import TermsCheckbox from "../../components/shared/TermsCheckbox";
import dataInputSignup from "../../constants/staticData/dataInputRegister";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import ButtonSubmit from "../../components/shared/ButtonSubmit";

function Register() {
  const [isloading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    if (data.confirmPassword !== data.password) {
      toast.error("confirm password and password is different", {
        style: {
          background: "",
          color: "black",
        },
      });
      return;
    }
  };
  return (
    <section className="bg-gradient-to-br from-green-100 via-blue-150 to-purple-200">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Logo />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              {dataInputSignup.map((field, index) => {
                return (
                  <Input
                    key={index}
                    register={register}
                    errors={errors}
                    {...field}
                  />
                );
              })}
              <TermsCheckbox
                register={register}
                errors={errors}
                linkUrl={"#"}
              />
              <ButtonSubmit isloading={isloading} text="Create an account"/>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default Register;
