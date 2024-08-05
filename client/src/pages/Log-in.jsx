import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

const Login = () => {
  const user = null; // قيمة المستخدم عادةً ما تكون `null` أو `undefined`
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("submit ", data); // يمكنك إضافة المنطق لتسجيل الدخول هنا
    // Ex: تسجيل الدخول الفعلي للمستخدم والتوجيه إلى اللوحة الرئيسية
    navigate("/dashboard");
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard"); // توجيه المستخدم عندما يكون مسجل الدخول
    }
  }, [user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f5]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="w-full h-full lg:2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full test-sm md:text-base border-gray-300 text-gray-600">
              Manage all your task in one place
            </span>
            <p className="text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-600">
              <span>Task Tracker</span>
            </p>
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div>
          <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col items-center justify-center">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
            >
              <div className="">
                <p className="text-3xl font-bold text-center text-blue-600">
                  Welcome Back
                </p>
                <p className="text-center text-base text-gray-700">
                  Keep all your credentials safe.
                </p>
              </div>
              <div className="flex flex-col gap-y-5 ">
                <TextBox
                  placeholder="email@gmail.com"
                  type="email"
                  name="email"
                  label="Email Address"
                  className="w-full rounded-full"
                  register={register("email", {
                    required: "Email address is required",
                  })}
                  error={errors.email ? errors.email.message : ""}
                />
                <TextBox
                  placeholder="your password"
                  type="password"
                  name="password"
                  label="Password"
                  className="w-full rounded-full"
                  register={register("password", {
                    required: "Password is required",
                  })}
                  error={errors.password ? errors.password.message : ""}
                />
                <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">Forgot Password?</span>
                <Button
                  type="submit"
                  label="Submit"
                  className="w-full h-10 bg-blue-700 text-white rounded-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;