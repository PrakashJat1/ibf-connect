import FormWrapper from "@/components/common/Form/FormWrapper";
import InputField from "@/components/common/Form/InputField";
import Button from "@/components/common/UI/Button";
import ItepSubmissionModal from "@/components/modals/ITEPSubmissionModal";
import authService from "@/services/authService";
import yupSchemas from "@/utils/yupSchemas";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const location = useLocation();
  const userData = location.state?.userData;
  const navigate = useNavigate();
  const [openApplicantModal, setOpenApplicantModal] = useState(false);

  const handleSubmit = async (data) => {
    const newData = {
      email: userData.email,
      otp: data.otp,
    };

    try {
      await authService.verifyOTP(newData);
      setOpenApplicantModal(true);
      toast.success("Registered successfully...!😊");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(" Invalid or expired OTP");
      } else {
        toast.error("Something went wrong 😓");
      }
    }
  };

  const resendOTP = async () => {
    const newData = {
      fullName: userData.fullName,
      email: userData.email,
    };

    let response = null;
    try {
      response = await authService.resendOTP(newData);

      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(response.data.message);
      } else {
        toast.error("Something went wrong 😓");
      }
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2>OTP sent to {userData.email}</h2>

        <FormWrapper
          defaultValues={{ otp: "" }}
          schema={yupSchemas.verifyOTPSchema}
          onSubmit={handleSubmit}
        >
          <InputField name="otp" type="text" placeholder="Enter OTP" />
          <Button type="submit" />
          <Button onClick={resendOTP} label="Resend OTP" />
        </FormWrapper>
      </div>
      <ItepSubmissionModal
        show={openApplicantModal}
        handleClose={() => navigate("/")}
      />
    </>
  );
};

export default VerifyOTP;
