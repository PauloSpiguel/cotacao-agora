import Select, { OptionProps } from "react-select";
import * as Style from "./styles";

import optionsCurrency from "~/data/currency.json";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    // backgroundColor: "transparent",
    border: "none",
    height: "5rem",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    // backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  }),
  option: (provided: any) => ({
    ...provided,
    // backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  }),
};

const Main = () => {
  return (
    <Style.Wrapper bgImage="/img/flag-euro.svg" className="flex items-center">
      <div className="flex flex-col sm:flex-row gap-5 w-full sm:mx-48 mx-16">
        <div className="grid grid-flow-col w-full">
          <Select
            isSearchable
            name="currency"
            className="col-span-1"
            options={optionsCurrency}
            styles={customStyles}
          />
          <input type="text" className="col-span-6 h-20 rounded-md" />
        </div>
        <div className="grid grid-flow-col w-full">
          <Select
            isSearchable
            name="currency-2"
            className="col-span-1"
            options={optionsCurrency}
            styles={customStyles}
          />
          <input type="text" className="col-span-6 h-20 rounded-md" />
        </div>
      </div>
    </Style.Wrapper>
  );
};

export default Main;
