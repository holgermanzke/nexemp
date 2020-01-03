import React from "react";
import InputField from "./InputField";

export default function SearchProfession({ value, onChange }) {
  return <InputField value={value} onChange={onChange} inputWidth="400px" />;
}
