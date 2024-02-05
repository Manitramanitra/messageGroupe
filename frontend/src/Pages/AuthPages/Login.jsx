import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ButtonSubmit from "../../components/shared/ButtonSubmit";
import Input from "../../components/shared/Input";
import Logo from "../../components/shared/Logo";
import dataLogin from "../../constants/staticData/dataInputLogin";
import { login } from "../../services/auth/login";
import { toast, Toaster } from "react-hot-toast";

function Login() {
  const [isloading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsloading(true);
    const response = await login(data);
    if (response.data.error) {
      toast.error(response.data.error, {
        style: {
          background: "",
          color: "black",
        },
      });
      setIsloading(false);
      return;
    } else {
      toast.success(response.data.message);
      data = response.data.data;
      const userString = JSON.stringify(data);
      localStorage.setItem("userData", userString);
      setIsloading(false);
      setTimeout(() => {
        window.location = "/chats";
      }, 2000);
    }
    setIsloading(false);
  };
  return (
    <section className="dark:bg-gray-900 bg-gradient-to-br from-green-100 via-blue-150 to-purple-200">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Logo />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              action="#"
            >
              {dataLogin.map((field, index) => {
                return (
                  <Input
                    key={index}
                    register={register}
                    errors={errors}
                    {...field}
                  />
                );
              })}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <ButtonSubmit isloading={isloading} text="Sign in" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
}

export default Login;
