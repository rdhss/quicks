import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="animate-slide-corner overflow-hidden bg-white absolute bottom-20 right-10 rounded-md">
      <main className="w-[580px] h-[430px] animate-slide-right">{children}</main>
    </div>
  );
};

export default Modal;
