import product from "@/pages/admin-pages/product";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import SubmitButton from "@/components/admin-components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Review = ({ activeTab }: { activeTab: string }) => {
  const [formReviewData, setFormReviewData] = useState<{
    rating: number;
    email: string;
    message: string;
    name: string;
  }>({
    rating: 0,
    email: "",
    message: "",
    name: "",
  });

  const handleReviewSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };
  const handleFormReviewData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRatingChanged = (newRating: number) => {
    setFormReviewData((prevState) => ({
      ...prevState,
      rating: newRating,
    }));
  };
  return (
    <>
      <div className={`${activeTab === "reviews" ? "mt-4" : "hidden"}`}>
        <p>There are no Reviews yet</p>
        <form
          onSubmit={handleReviewSubmitForm}
          className={"border p-4 mt-6 vertical-spacing"}
        >
          <p className={"text-2xl text-gray-8"}>
            Be the first to review <span>"{product.name}"</span>
          </p>
          <p className={"text-gray-8"}>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className={"flex gap-2 items-center"}>
            <p className={"text-gray-8"}>Your rating *</p>
            <div>
              <Rating
                style={{ maxWidth: 150 }}
                value={formReviewData.rating}
                onChange={handleRatingChanged}
              />
            </div>
          </div>
          <label className={"text-gray-8"}>
            Your Review *
            <Textarea
              name={"message"}
              value={formReviewData.message}
              onChange={handleFormReviewData}
              rows={5}
            />
          </label>
          <div className={"grid gap-4 md:grid-cols-2"}>
            <label className={"text-gray-8"}>
              Name *
              <Input
                name={"name"}
                value={formReviewData.name}
                onChange={handleFormReviewData}
                type={"text"}
                className="py-5 px-6"
              />
            </label>
            <label className={"text-gray-8"}>
              Email *
              <Input
                name={"email"}
                value={formReviewData.email}
                onChange={handleFormReviewData}
                type={"email"}
                className="py-5 px-6"
              />
            </label>
          </div>
          <SubmitButton title={"SUBMIT"} />
        </form>
      </div>
    </>
  );
};

export default Review;
