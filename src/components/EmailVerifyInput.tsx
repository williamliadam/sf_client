import type React from "react";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface EmailVerifyInputProps {
  name: string;
  onSendVerificationCode: () => void;
}

const EmailVerifyInput: React.FC<EmailVerifyInputProps> = ({
  name,
  onSendVerificationCode,
}) => {
  const { register } = useFormContext();
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isDisabled]);

  const handleClick = () => {
    onSendVerificationCode();
    setIsDisabled(true);
    setTimer(60);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="email"
        {...register(name)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter your email"
      />
      <button
        type="button"
        onClick={handleClick}
        disabled={isDisabled}
        className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      >
        {isDisabled ? `Retry in ${timer}s` : "Send Code"}
      </button>
    </div>
  );
};

export default EmailVerifyInput;
