import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
import FormItemInput from "@/components/forms/form-item-input";
import { Form } from "@/components/ui/form";
import { useAuthStore } from "@/store/store";
import { RegisterUserSchema, RegisterUserType } from "@/store/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const registerUser = useAuthStore((state) => state.registerUser);
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
    const response = await registerUser(data);

    if (response?.status == 201) {
      navigate("/auth/signin");
    }
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(submitForm)}
                className={"w-full vertical-spacing mt-4 gap-6"}
              >
                <div className={"grid md:grid-cols-2 gap-4"}>
                  <FormItemInput
                    form={form}
                    name="firstname"
                    label="First Name"
                    placeholder="enter first name"
                    showError={true}
                  />
                  <FormItemInput
                    form={form}
                    name="lastname"
                    label="Last Name"
                    placeholder="enter last name"
                    showError={true}
                  />
                </div>

                <FormItemInput
                  form={form}
                  name="email"
                  label="Email Address"
                  placeholder="enter email address"
                  showError={true}
                />
                <FormItemInput
                  form={form}
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="**********"
                  showError={true}
                />

                <SubmitButton title={"Sign Up"} />
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
