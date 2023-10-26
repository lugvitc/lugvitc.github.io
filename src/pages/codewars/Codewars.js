import TerminalWindow from "../../components/terminal/terminalWindow";
import TerminalCard from "../../components/terminalCard/TerminalCard";
import useFetch from "../../hooks/useFetch";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import  './Codewars.css'
import banner from '../../images/coding-ninja/banner.png'

export default function Blogs() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      registerNo: "",
      college: "",
      year: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // console.log(selectedValue);
      axios
        .post("https://leaderboard.lugvitc.org/api/submit_form", values)
        .then(function (response) {
            // toast.success("Submitted Successfully.")
            if (values.year=="1st Yr Student") {

              window.location.href="https://tinyurl.com/4c4km8dh"
            }else if (values.year=="2nd,3rd,4th Yr Student") {
              window.location.href="https://tinyurl.com/4p4h6u2j"
            }else{
                console.log("something happened")
            }
        })
        .catch(function (error) {
          // toast.error(error)
          console.log(" i am here");
        });
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
        // toast.error("Input field is Empty!")
      }
      if (!values.email) {
        errors.password = "Required";
        // toast.error("Input field is Empty!")
      }
      if (!values.college) {
        errors.password = "Required";
        // toast.error("Input field is Empty!")
      }
      if (!values.registerNo) {
        errors.password = "Required";
        // toast.error("Input field is Empty!")
      }
      if (values.year == "Select your year") {
        errors.password = "Required";
        toast.error("Select your year !!!");
      }
      return errors;
    },
  });
  return (
    <>
      <Toaster />
      <TerminalWindow
        prompts={[
          { path: "~", command: "cd codewars" },
          { path: "~/codewars", command: "cat codewar.txt" },
        ]}
        title="CodeWar"
      >
        <div className="flex flex-row justify-center items-center w-full my-5">
          <img src={banner}  alt="loading..." className="banner"  />
        </div>
        <div className="w-full flex flex-wrap flex-row justify-center items-center">
          <div className="notice">
          {/* <div className="w-[40rem] h-[50rem] bg-[#272a30] p-5 rounded-l-lg sm:max-sm:h-[80rem]"> */}
            <h1 className="text-4xl text-center">Go for War ⚔️</h1> <br />
            <p>
              We here at the Linux Club, are beyond thrilled to announce our
              latest collaboration with Coding Ninjas-The Linux Club CodeWars!
              <br />
              <br />
              Whether you’re a seasoned coding ninja, or just taking your first
              steps, this contest welcomes all skill levels. These weekly tests
              are open to all 1st-4th-year students. CODE-CONTEST-CONQUER
              <br />
              <br />
              🏆 But remember, to qualify for prizes and special rewards, make
              sure to register the form on the right side .Upon filling this
              form you will be redirected to Coding Ninja Site where you need to
              register for the event. <br />
              <br />
              Here’s what all you can win: <br />
              • Achiever Certificates for the Contest Winners <br />
              • Exclusive T-shirt , Laptop Bag, and Swag Set <br />
              • Stylish Sipper Bottle and Mug <br />
              • And not to mention-Eternal Glory!! <br />
              <br />
              So are you up for the challenge?💪 Unleash your potential and
              seize the opportunity to test your abilities, all while elevating
              your Linux passion.
            </p>
          </div>
          <div className="notice2">
            <h3 className="pt-4 text-2xl text-center"></h3>
            <form
              action=""
              onSubmit={formik.handleSubmit}
              className="px-8 pt-6 pb-8 mb-4 bg-[#2c3038] rounded"
            >
              <div className="mb-4">
                <label
                  className=" mb-2 mx-2 text-sm font-bold text-gray-100 text-center"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full h-[2rem] rounded-lg border-gray-200 p-4 pe-4 text-sm shadow-sm text-teal-800"
                  placeholder="Enter Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div className="mb-4">
                <label
                  className=" mb-2  mx-2 text-sm font-bold text-gray-100 text-center"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="w-full h-[2rem] rounded-lg border-gray-200 p-4 pe-4 text-sm shadow-sm text-teal-800"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className="mb-4">
                <label
                  className=" mb-2  mx-2 text-sm font-bold text-gray-100 text-center"
                  htmlFor="Register No. or College Id No."
                >
                  Register No. or College Id No.
                </label>
                <input
                  id="registerNo"
                  type="text"
                  className="w-full h-[2rem] rounded-lg border-gray-200 p-4 pe-4 text-sm shadow-sm text-teal-800"
                  placeholder="Enter Register No. or College Id No."
                  onChange={formik.handleChange}
                  value={formik.values.registerNo}
                />
              </div>
              <div className="mb-4">
                <label
                  className=" mb-2 mx-2 text-sm font-bold text-gray-100 text-center"
                  htmlFor="College Name"
                >
                  College Name
                </label>
                <input
                  id="college"
                  type="text"
                  className="w-full  h-[2rem] rounded-lg border-gray-200 p-4 pe-4 text-sm shadow-sm text-teal-800"
                  placeholder="Enter College Name"
                  onChange={formik.handleChange}
                  value={formik.values.college}
                />
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="w-[3/4] mb-5 bg-white text-[#2c3038] rounded-lg">
                  <select
                    id="year"
                    name="year"
                    // value={selectedValue}
                    // onChange={handleDropdownChange}
                    onChange={formik.handleChange}
                    value={formik.values.year}
                    className=" w-full h-[3rem] rounded-md px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-4"
                  >
                    <option value="Select your year">Select your year</option>
                    <option value="1st Yr Student">1st Yr Student</option>
                    <option value="2nd,3rd,4th Yr Student">
                      2nd,3rd,4th Yr Student
                    </option>
                  </select>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Option has to be selected
                  </span>
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-2/4 px-4 py-2 font-bold text-white bg-[#3b4252] rounded-full hover:bg-[#1e232c] focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <hr className="mb-6 border-t" />
            </form>
          </div>
        </div>
      </TerminalWindow>
    </>
  );
}
