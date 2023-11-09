import React from "react";
import TextMenu from "../components/atoms/Text";
import ButtonMenu from "../components/atoms/Button";
import UploadFile from "../components/molecules/Form";
import ButtonMenu2 from "../components/atoms/Button2";

function MenuConvert() {
  return (
    <div className="bg-gray-100 p-8 rounded-3xl shadow-md max-w-full mx-auto">
      <TextMenu />
      <ButtonMenu />
      <UploadFile />
      <ButtonMenu2 />
    </div>
  );
}

export default MenuConvert;
