import VerifyOTP from "@/components/auth/VerifyOTP";
import FormWrapper from "@/components/common/Form/FormWrapper";
import InputField from "@/components/common/Form/InputField";
import RadioGroupField from "@/components/common/Form/RadioGroupField";
import SelectField from "@/components/common/Form/SelectField";
import TextAreaField from "@/components/common/Form/TextAreaField";
import Button from "@/components/common/UI/Button";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import authService from "@/services/authService";
import yupSchemas from "@/utils/yupSchemas";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "@/assets/logoWBG.png";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    let response = null;
    try {
      response = await authService.registeritepapplicant(data);

      toast.success(`OTP Send Successfully to ${data.email}`);

      navigate("/verify-otp", { state: { userData: data } });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(`User Already Exist using ${data.email}`);
        console.log(response);
      } else {
        toast.error("Something went wrong 😓");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="bg-light py-5">
        <div className="container flex-column justify-content-center">
          <div className=" d-flex justify-content-center">
            <img
              src={logo}
              alt="IBFMS Logo"
              height="200"
              className="pb-2"
              style={{ objectFit: "contain", borderRadius: "100px" }}
            />
          </div>
          <div
            className="card shadow-sm p-4 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <h3
              className="text-center fw-bold mb-4"
              style={{ color: "#cf0829ff" }}
            >
              Apply for ITEP Exam
            </h3>

            <FormWrapper
              defaultValues={{
                email: "",
                fullName: "",
                password: "",
                confirmPassword: "",
                fatherFullName: "",
                mobileNo: "",
                DOB: "",
                gender: "",
                localAddress: "",
                permanentAddress: "",
                state: "",
                maritalStatus: "",
                college: "",
                qualification: "",
                graduationCompletionYear: "",
                familyAnnualIncome: "",
                preferredCity: "",
                fromWhereYouFindAboutITEP: "",
                photo: "",
                documentsPDF: "",
                fatherIncomeCerificate: "",
              }}
              schema={yupSchemas.registerSchema}
              onSubmit={handleSubmit}
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <InputField
                    type="email"
                    name="email"
                    label="Email*"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    type="text"
                    name="fullName"
                    label="Full Name*"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="col-md-6">
                  <InputField
                    type="password"
                    name="password"
                    label="Password*"
                    placeholder="Enter strong password"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password*"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="col-md-6">
                  <InputField
                    type="text"
                    name="fatherFullName"
                    label="Father's Full Name*"
                    placeholder="Enter father's full name"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    type="number"
                    name="mobileNo"
                    label="Mobile No*"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div className="col-md-6">
                  <InputField type="date" name="DOB" label="Date of Birth*" />
                </div>
                <div className="col-md-6">
                  <RadioGroupField
                    name="gender"
                    label="Gender*"
                    options={[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                    ]}
                  />
                </div>

                <div className="col-md-6">
                  <InputField
                    type="text"
                    name="college"
                    label="College*"
                    placeholder="Enter your college name"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    type="number"
                    name="graduationCompletionYear"
                    label="Graduation Completion Year*"
                    placeholder="e.g. 2024"
                  />
                </div>

                <div className="col-md-6">
                  <InputField
                    type="text"
                    name="familyAnnualIncome"
                    label="Family Annual Income*"
                    placeholder="As per certificate"
                  />
                </div>
                <div className="col-md-6">
                  <SelectField
                    name="preferredCity"
                    label="Preferred City*"
                    options={[
                      { label: "Indore", value: "Indore" },
                      { label: "Pune", value: "Pune" },
                    ]}
                  />
                </div>

                <div className="col-md-12">
                  <TextAreaField
                    name="localAddress"
                    label="Local Address*"
                    rows={2}
                  />
                </div>
                <div className="col-md-12">
                  <TextAreaField
                    name="permanentAddress"
                    label="Permanent Address*"
                    rows={2}
                  />
                </div>

                <div className="col-md-6">
                  <SelectField
                    name="state"
                    label="State*"
                    options={[
                      { key: "Andhra Pradesh", value: "Andhra Pradesh" },
                      { key: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                      { key: "Assam", value: "Assam" },
                      { key: "Bihar", value: "Bihar" },
                      { key: "Chhattisgarh", value: "Chhattisgarh" },
                      { key: "Goa", value: "Goa" },
                      { key: "Gujarat", value: "Gujarat" },
                      { key: "Haryana", value: "Haryana" },
                      { key: "Himachal Pradesh", value: "Himachal Pradesh" },
                      { key: "Jharkhand", value: "Jharkhand" },
                      { key: "Karnataka", value: "Karnataka" },
                      { key: "Kerala", value: "Kerala" },
                      { key: "Madhya Pradesh", value: "Madhya Pradesh" },
                      { key: "Maharashtra", value: "Maharashtra" },
                      { key: "Manipur", value: "Manipur" },
                      { key: "Meghalaya", value: "Meghalaya" },
                      { key: "Mizoram", value: "Mizoram" },
                      { key: "Nagaland", value: "Nagaland" },
                      { key: "Odisha", value: "Odisha" },
                      { key: "Punjab", value: "Punjab" },
                      { key: "Rajasthan", value: "Rajasthan" },
                      { key: "Sikkim", value: "Sikkim" },
                      { key: "Tamil Nadu", value: "Tamil Nadu" },
                      { key: "Telangana", value: "Telangana" },
                      { key: "Tripura", value: "Tripura" },
                      { key: "Uttar Pradesh", value: "Uttar Pradesh" },
                      { key: "Uttarakhand", value: "Uttarakhand" },
                      { key: "West Bengal", value: "West Bengal" },
                    ]}
                  />
                </div>
                <div className="col-md-6">
                  <SelectField
                    name="maritalStatus"
                    label="Marital Status*"
                    options={[
                      { label: "Married", value: "married" },
                      { label: "Unmarried", value: "unmarried" },
                    ]}
                  />
                </div>

                <div className="col-md-6">
                  <SelectField
                    name="qualification"
                    label="Qualification*"
                    options={[
                      { label: "10th Pass", value: "10th Pass" },
                      { label: "12th Pass", value: "12th Pass" },
                      { label: "Diploma", value: "Diploma" },
                      { label: "ITI", value: "ITI" },
                      {
                        label: "Bachelor's Degree",
                        value: "Bachelor's Degree",
                      },
                      { label: "Master's Degree", value: "Master's Degree" },
                    ]}
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    type="text"
                    name="fromWhereYouFindAboutITEP"
                    label="How did you hear about ITEP?*"
                    placeholder="Source of info"
                  />
                </div>

                <div className="col-md-4">
                  <InputField
                    type="file"
                    name="photo"
                    label="Passport Size Photo*"
                  />
                </div>
                <div className="col-md-4">
                  <InputField
                    type="file"
                    name="documentsPDF"
                    label="Documents PDF*"
                  />
                </div>
                <div className="col-md-4">
                  <InputField
                    type="file"
                    name="fatherIncomeCerificate"
                    label="Father's Income Certificate*"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <Button
                  type="submit"
                  label="Submit Application"
                  className="btn btn-success px-4"
                />
                <Link
                  to="/login"
                  className="text-decoration-none text-primary fw-medium"
                >
                  Already registered? Login here
                </Link>
              </div>
            </FormWrapper>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
