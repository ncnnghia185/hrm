"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmAccountEmail from "./confirmEmail";
import ConfirmOTP from "./confirmOTP";
import ConfirmNewPassword from "./changePassword";

const ForgotPasswordFlow = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [OTPCode, setOTPCode] = useState<string>("");
  const router = useRouter();
  // Handle moving the next step
  const handleNextStep = (data: any) => {
    if (step === 1) {
      setEmail(data.email);
      setStep(2);
    } else if (step === 2) {
      setOTPCode(data.otp);
      setStep(3);
    } else if (step === 3) {
      // router.push("/dang-nhap");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ConfirmAccountEmail onSuccess={handleNextStep} />;
      case 2:
        return <ConfirmOTP email={email} onSuccess={handleNextStep} />;
      case 3:
        return (
          <ConfirmNewPassword
            email={email}
            otp={OTPCode}
            onSuccess={handleNextStep}
          />
        );
      default:
        return <ConfirmAccountEmail onSuccess={handleNextStep} />;
    }
  };
  return <>{renderStep()}</>;
};

export default ForgotPasswordFlow;
