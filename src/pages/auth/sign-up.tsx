import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
import FormItemInput from "@/components/forms/form-item-input";
import { Form } from "@/components/ui/form";
import { useAuthStore } from "@/store/store";
import { RegisterUserSchema, RegisterUserType } from "@/store/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const registerUser = useAuthStore((state) => state.registerUser);
  const loading = useAuthStore((state) => state.loading);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm<RegisterUserType>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });
  const submitForm = async (data: RegisterUserType) => {
    setErrorMessage("");
    const response = await registerUser(data);

    if (response?.status == 201) {
      navigate("/auth/signin");
      return;
    }
    setErrorMessage(response?.response.data.message);
  };
  return (
    <>
      <div
        className={
          "md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"
        }
      >
        <div
          className={"bg-white max-w-[75rem] w-full p-6 md:p-16 mx-auto mt-16"}
        >
          <div
            className={
              "max-w-[35rem] w-full p-8 vertical-spacing bg-white rounded-xl border shadow-gray-200 mx-auto"
            }
          >
            <div className="mb-4 space-y-4">
              <h3
                className={
                  "text-2xl md:text-5xl font-extrabold md:text-center text-primary"
                }
              >
                Sign Up
              </h3>
              <p className={"text-gray-8 text-sm text-center"}>
                Enter your personal details to create an account
              </p>
            </div>

            {errorMessage && (
              <div className="border border-red-400 py-1 px-3 text-red-500 font-medium bg-red-200/20 flex items-center justify-center w-full rounded-lg">
                {errorMessage}
              </div>
            )}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(submitForm)}
                className={"w-full vertical-spacing gap-6 mt-4"}
              >
                <div className={"grid md:grid-cols-2 gap-4"}>
                  <FormItemInput
                    form={form}
                    name="firstname"
                    label="First Name"
                    placeholder="enter first name"
                    showError
                    isRequired
                  />
                  <FormItemInput
                    form={form}
                    name="lastname"
                    label="Last Name"
                    placeholder="enter last name"
                    showError
                    isRequired
                  />
                </div>

                <FormItemInput
                  form={form}
                  name="email"
                  label="Email Address"
                  placeholder="enter email address"
                  showError
                  isRequired
                />
                <FormItemInput
                  form={form}
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="**********"
                  showError
                  isRequired
                />

                <SubmitButton title={loading ? "registering..." : "Register"} />
              </form>
            </Form>
            <p className={"text-sm"}>
              Already have an Account?{" "}
              <Link to={"/auth/signin"} className={"ml-1 text-blue-5"}>
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
