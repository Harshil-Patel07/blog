import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const handleCopyText = (text: string) => {
  try {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Text copied to clipboard successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  } catch (err) {
    console.error("Clipboard API not supported", err);
  }
};
const CodeText = ({ text }:any) => {
  return (
    <>
      <div className="relative flex justify-between items-center py-3 px-4 bg-[#e9e6e6] w-full rounded-sm mb-4">
        <code className="copy-text text-[#6d6e76]">{text}</code>
        {/* <Image
          src="/copy.png"
          alt="Copy"
          height={20}
          width={20}
          className="w-[20px] h-[20px] object-contain cursor-pointer"
          onClick={() => handleCopyText(text || "")}
        /> */}
        copy
      </div>
      <span className="absolute right-0">
        <ToastContainer />
      </span>
    </>
  );
};

export default CodeText;
