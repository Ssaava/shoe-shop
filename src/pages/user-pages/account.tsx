import { useEffect, useState } from "react";

import { GetCountries } from "react-country-state-city";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
import PasswordInput from "@/components/PasswordInput.tsx";

const UserAccount = () => {
  const [countriesList, setCountriesList] = useState<
    {
      name: string;
    }[]
  >([]);
  const [settingsForm, setSettingsForm] = useState<{
    displayName: string;
    fullName: string;
    email: string;
    country: string;
    userName: string;
    contact: string;
  }>({
    displayName: "",
    fullName: "",
    email: "",
    country: "",
    userName: "",
    contact: "",
  });
  const [passwordForm, setPasswordForm] = useState<{
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  const handleSettingsForm = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;
    setSettingsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitSettingsForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(settingsForm);
  };
  const handlePasswordForm = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitChangePasswordForm = (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    console.log(passwordForm);
  };

  return (
    <>
      <div
        className={
          "md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"
        }
      >
        <div
          className={
            "bg-white w-full p-6 md:p-12 mx-auto mt-16 vertical-spacing"
          }
        >
          <div className={"border vertical-spacing gap-6"}>
            <h2 className={"p-4 border-b"}>ACCOUNT SETTINGS</h2>
            <form
              onSubmit={handleSubmitSettingsForm}
              className={"p-4 grid md:grid-cols-12 gap-4"}
            >
              <div className={"md:col-span-2"}>
                <div
                  className={
                    "rounded-full center-items w-36 h-36 md:w-24 md:h-24 xl:w-36 xl:h-36 bg-gray-200 mx-auto"
                  }
                >
                  <img src={"/"} alt={"Profile Image"} />
                </div>
              </div>
              <div className={"md:col-span-5 vertical-spacing gap-6"}>
                <label className={"vertical-spacing gap-2"}>
                  Display name
                  <input
                    onChange={handleSettingsForm}
                    type={"text"}
                    name={"displayName"}
                    placeholder={"display name"}
                    className={"w-full px-5 py-2 border"}
                  />
                </label>
                <label className={"vertical-spacing gap-2"}>
                  Full name
                  <input
                    onChange={handleSettingsForm}
                    type={"text"}
                    name={"fullName"}
                    placeholder={"full name"}
                    className={"w-full px-5 py-2 border"}
                  />
                </label>
                <label className={"vertical-spacing gap-2"}>
                  Email
                  <input
                    onChange={handleSettingsForm}
                    type={"email"}
                    name={"email"}
                    placeholder={"user email"}
                    className={"w-full px-5 py-2 border"}
                  />
                </label>
                <label className={"vertical-spacing gap-2"}>
                  Country/Region
                  <input className={"w-full px-5 py-2 border"} />
                </label>
                <label className={"vertical-spacing gap-2"}>
                  Country/Region
                  <select
                    className={"px-5 py-2 bg-white border"}
                    onChange={(e) =>
                      setSettingsForm((prev) => ({
                        ...prev,
                        country: countriesList[Number(e.target.value)].name,
                      }))
                    }
                  >
                    {countriesList.map((item, index) => (
                      <option key={index} value={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className={"md:col-span-5 vertical-spacing"}>
                <label className={"vertical-spacing gap-2"}>
                  Username
                  <input
                    onChange={handleSettingsForm}
                    type={"text"}
                    name={"userName"}
                    placeholder={"user name"}
                    className={"w-full px-5 py-2 border"}
                  />
                </label>
                <label className={"vertical-spacing gap-2"}>
                  Phone Number
                  <input
                    onChange={handleSettingsForm}
                    name={"contact"}
                    type={"number"}
                    placeholder={"contact details"}
                    className={"w-full px-5 py-2 border"}
                  />
                </label>
                <SubmitButton title={"SAVE CHANGES"} />
              </div>
            </form>
          </div>

          {/*Password update*/}
          <div className={"border vertical-spacing gap-6 mt-10"}>
            <h2 className={"p-4 border-b"}>UPDATE PASSWORD</h2>
            <form
              onSubmit={handleSubmitChangePasswordForm}
              className={"px-4 vertical-spacing"}
            >
              <PasswordInput
                title={"Current Password"}
                handlePasswordForm={handlePasswordForm}
              />
              <PasswordInput
                title={"New Password"}
                handlePasswordForm={handlePasswordForm}
              />
              <PasswordInput
                title={"Confirm Password"}
                handlePasswordForm={handlePasswordForm}
              />

              <div className={"my-6"}>
                <SubmitButton title={"UPDATE PASSWORD"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAccount;
