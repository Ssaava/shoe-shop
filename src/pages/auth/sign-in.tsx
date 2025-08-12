import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
import FormItemInput from "@/components/forms/form-item-input";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Form } from "@/components/ui/form";
import { useAuthStore } from "@/store/store";
import { LoginUserSchema, LoginUserType } from "@/store/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);

  const form = useForm<LoginUserType>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitForm = async (data: LoginUserType) => {
    const response = await login(data);

    if (response.status == 200) {
      navigate("/");
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
          className={"bg-white max-w-300 w-full p-6 md:p-16 mx-auto mt-16"}
        >
          <div
            className={
              "max-w-140 w-full p-8 vertical-spacing bg-white rounded-xl border mx-auto"
            }
          >
            <h3
              className={
                "text-2xl md:text-5xl font-extrabold md:text-center text-primary"
              }
            >
              Sign in
            </h3>
            <p className={"text-gray-8 text-sm text-center"}>
              Enter your email and password to login
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(submitForm)}
                className={"w-full vertical-spacing gap-6 mt-4"}
              >
                <FormItemInput
                  form={form}
                  name="email"
                  label="Email Address"
                  placeholder="enter email"
                  isRequired={true}
                  showError={true}
                />
                <FormItemInput
                  form={form}
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="*********"
                  isRequired={true}
                  link="/auth/request-otp"
                  showError
                />

                <div className={"flex items-center gap-4 text-sm text-gray-8"}>
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Keep me signed in
                  </label>
                </div>

                <SubmitButton title={loading ? "Signing in..." : "Sign In"} />
              </form>
            </Form>
            <p className={"text-sm"}>
              You do not have an account yet?{" "}
              <Link to={"/auth/signup"} className={"ml-1 text-blue-5"}>
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
