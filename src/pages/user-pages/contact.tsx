import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaHeadphones, FaTruck } from "react-icons/fa";
import { faqData } from "@/assets/data";

const Contact = () => {
  return (
    <>
      <div>
        <div className={"inline-padding lg:mt-20 sm:mt-16 mt-6"}>
          <h2
            className={
              "text-5xl text-center md:text-left md:text-9xl text-secondary-50 font-extrabold"
            }
          >
            get in touch
          </h2>
          <h3
            className={
              "text-gray-8 text-center md:text-left text-3xl md:text-7xl font-extrabold"
            }
          >
            Contact Us
          </h3>
        </div>

        <div className={"bg-gray-2 inline-padding mt-24 pb-24"}>
          <h2 className={"text-5xl text-center py-20 font-extrabold"}>
            Quick Assist
          </h2>

          <Accordion
            type="single"
            collapsible
            className="grid md:grid-cols-2 gap-4"
          >
            <div>
              {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.message}</AccordionContent>
                </AccordionItem>
              ))}
            </div>
            <div>
              {faqData.slice(Math.ceil(faqData.length / 2)).map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.message}</AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
          <div className={"mt-24 grid lg:grid-cols-3 md:grid-cols-2 gap-8"}>
            <div className={"vertical-spacing gap-2"}>
              <FaRegCreditCard className={"text-primary text-6xl mx-auto"} />
              <h3 className={"text-3xl font-extrabold mt-2 w-fit mx-auto"}>
                {" "}
                1 800 755 60 20{" "}
              </h3>
              <p className={"text-gray-8 w-fit mx-auto"}>Payment Queries</p>
            </div>
            <div className={"vertical-spacing gap-2"}>
              <FaTruck className={"text-primary text-6xl mx-auto"} />
              <h3 className={"text-3xl font-extrabold mt-2 w-fit mx-auto"}>
                +256 777777777
              </h3>
              <p className={"text-gray-8 w-fit mx-auto"}>Shopping Delivery</p>
            </div>
            <div className={"vertical-spacing gap-2"}>
              <FaHeadphones className={"text-primary text-6xl mx-auto"} />
              <h3 className={"text-3xl font-extrabold mt-2 w-fit mx-auto"}>
                +256 777777777
              </h3>
              <p className={"text-gray-8 w-fit mx-auto"}>Customer Care</p>
            </div>
          </div>

          <div className={"grid md:grid-cols-2 mt-24 gap-16"}>
            <div>
              {/* replace with the location from google maps of the shoe store */}
              <iframe
                title="OVO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7515711479427!2d32.565764884248196!3d0.3314245631573063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6d4fd3eca9%3A0xdf47684755293ecd!2sMakerere%20University%20College%20of%20Computing%20and%20Information%20Sciences%2C%20Block%20A!5e0!3m2!1sen!2sug!4v1728931953456!5m2!1sen!2sug"
                height="450"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <div className={"vertical-spacing"}>
                <h2 className={"text-5xl mb-10 font-extrabold"}>
                  Contact Details
                </h2>
                <div className={"mb-4"}>
                  <h3 className={"text-2xl font-extrabold mb-4"}>Our Hours</h3>
                  <p className={"text-gray-8"}>10:00 AM – 22.00 PM</p>
                  <p className={"text-gray-8"}>Monday – Friday</p>
                </div>
                <div className={"mb-4"}>
                  <h3 className={"text-2xl font-extrabold mb-4"}>Location</h3>
                  <p className={"text-gray-8"}>
                    212 7th St SE, Washington, DC 20003, USA
                  </p>
                </div>
                <div>
                  <h3 className={"text-2xl font-extrabold mb-4"}>Contact Us</h3>
                  <p className={"text-gray-8"}>Phone: 1 800 755 60 20</p>
                  <p className={"text-gray-8"}>Email: contact@company.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
