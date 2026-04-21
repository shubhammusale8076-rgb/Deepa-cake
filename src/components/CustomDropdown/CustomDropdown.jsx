"use client";

import { useState, useRef, useEffect } from "react";
import "./CustomDropdown.css";

export default function CustomDropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="option-group" ref={ref}>
      {label && <p className="label">{label}</p>}

      <div className="dropdown">
        <div
          className="dropdown-header"
          onClick={() => setOpen(!open)}
        >
          <span>{value || placeholder}</span>
          {/* <ChevronDown
            size={18}
            className={`icon ${open ? "rotate" : ""}`}
          /> */}
        </div>

        {open && (
          <div className="dropdown-list">
            {options.map((option, index) => (
              <div
                key={index}
                className={`dropdown-item ${
                  value === option ? "active" : ""
                }`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}