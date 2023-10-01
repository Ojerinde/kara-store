"use client";

import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  label?: string;
  onChange: (selectedOption: Option) => void;
  value: any;
  options: Option[];
  labels?: boolean;
  placeholder?: string;
  name?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  onChange,
  value,
  options,
  label,
  placeholder = "",
  name,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const updateSelection = (selectedOption: any) => {
    onChange(selectedOption);
  };

  const customStyles: StylesConfig<Option, boolean> = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "1.6rem",
      border: "none",
      width: "20rem",
      boxShadow: state.isFocused
        ? "0px 0px 4px 2px rgba(0, 0, 0, 0.2)"
        : "none",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "white",
        color: "#1a1a1a",
        border: "none",
      },
      "&:focus": {
        cursor: "pointer",
        backgroundColor: "white",
        color: "#1a1a1a",
        border: "none",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingLeft: "2rem",
      paddingRight: "2rem",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      zIndex: "1000",
      fontSize: "1.6rem",
      color: "#1a1a1a",
      backgroundColor: "white",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#F2F2F2",
        color: "#1a1a1a",
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      background: "#fff",
      boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.20)",
    }),
  };

  return (
    <div className="mb-2">
      {label && (
        <label className=" text-[1rem] font-semibold text-[#10002E] mb-[1rem]">
          {label}:
        </label>
      )}
      <Select
        styles={customStyles}
        components={{
          DropdownIndicator: () => (
            <div role="button" tabIndex={0} onKeyDown={() => {}}>
              {menuOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
          ),
          IndicatorSeparator: () => null,
        }}
        onChange={updateSelection}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
        value={value}
        placeholder={value || placeholder}
        options={options}
        name={name}
      />
    </div>
  );
};

export default SelectInput;
