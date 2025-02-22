import React from "react";

type Props = {
  email: string;
  otp: string;
  onSuccess: (data: { password: string }) => void;
};

const ChangePassword = ({ email, otp, onSuccess }: Props) => {
  return <div>ChangePassword</div>;
};

export default ChangePassword;
