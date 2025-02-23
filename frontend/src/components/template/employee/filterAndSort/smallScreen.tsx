"use client";
import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { departmentMockUp } from "@/mockup/departmentsData";
import { positionMockUp } from "@/mockup/positionsData";
import { useDropdown } from "@/hooks/shared/useToggleDropdown";

const FilterAndSort = () => {
  const { dropdownRef, isOpenDropdown, setIsOpenDropdown } = useDropdown();
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [selectedFilters, setSelectedFilters] = useState({
    departments: {} as { [key: string]: boolean },
    positions: {} as { [key: string]: boolean },
  });
  const toggleExpand = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };
  // Handle checkbox
  const handleCheckboxChange = (
    category: "departments" | "positions",
    name: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [name]: !prev[category][name] },
    }));
  };

  // Apply filter
  const applyFilters = () => {
    const selectedDepartments = Object.keys(selectedFilters.departments).filter(
      (key) => selectedFilters.departments[key]
    );
    const selectedPositions = Object.keys(selectedFilters.positions).filter(
      (key) => selectedFilters.positions[key]
    );

    console.log("Bộ lọc đã chọn:", { selectedDepartments, selectedPositions });
  };

  return (
    <div className="relative">
      {/* Open Filter */}
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="border border-component-color px-4 py-2 rounded-md w-32 sm:w-36 flex items-center justify-between"
      >
        <span className="text-base text-color">Bộ lọc</span>
        {isOpenDropdown ? (
          <GoChevronUp size={18} className="text-component-color" />
        ) : (
          <CiFilter size={18} className="text-component-color" />
        )}
      </button>

      {/* List Filter */}
      {isOpenDropdown && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-1 w-60 bg-color p-4 rounded-lg border border-component-color z-50"
        >
          <div className="space-y-2">
            {/* Department */}
            <div>
              <div
                className="flex items-center cursor-pointer text-component-color hover:text-[#2d3436] gap-5"
                onClick={() => toggleExpand("departments")}
              >
                <span className="ml-2 font-medium">Phòng ban</span>
                {expanded["departments"] ? (
                  <GoChevronUp size={16} />
                ) : (
                  <GoChevronDown size={16} />
                )}
              </div>
              {expanded["departments"] && (
                <div className="ml-5 mt-1">
                  {departmentMockUp.map((department) => (
                    <label
                      key={department}
                      className="flex items-center space-x-2 text-component-color"
                    >
                      <input
                        type="checkbox"
                        checked={
                          selectedFilters.departments[department] || false
                        }
                        onChange={() =>
                          handleCheckboxChange("departments", department)
                        }
                        className="rounded"
                      />
                      <span>{department}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Position*/}
            <div>
              <div
                className="flex items-center cursor-pointer text-component-color hover:text-[#2d3436] gap-5"
                onClick={() => toggleExpand("positions")}
              >
                <span className="ml-2 font-medium ">Chức vụ</span>
                {expanded["positions"] ? (
                  <GoChevronUp size={16} />
                ) : (
                  <GoChevronDown size={16} />
                )}
              </div>
              {expanded["positions"] && (
                <div className="ml-5 mt-1">
                  {positionMockUp.map((position) => (
                    <label
                      key={position}
                      className="flex items-center space-x-2 text-component-color"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.positions[position] || false}
                        onChange={() =>
                          handleCheckboxChange("positions", position)
                        }
                        className="rounded"
                      />
                      <span>{position}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Button Apply */}
          <button
            onClick={applyFilters}
            className="w-full mt-4 text-color py-2 rounded-md border border-component-color hover-component-color"
          >
            <span className="text-color font-medium">Áp dụng</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterAndSort;
