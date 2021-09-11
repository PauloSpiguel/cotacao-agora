import { ChangeEvent, useEffect, useState } from "react";
import Select from "react-select";
import currencyJs from "currency.js";
import axios from "axios";

import * as Style from "./styles";

import optionsCurrency from "~/data/currency.json";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    fontSize: "2rem",
    border: "none",
    height: "8rem",
    boxShadow: "none",
    color: "white",
    "&:hover": {
      border: "none",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: "2rem",
    border: "none",
    boxShadow: "none",
    color: "white",
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: "2rem",
    border: "none",
    boxShadow: "none",
    color: "#7159c1",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: "2rem",
    color: "white",
  }),
  input: (provided: any) => ({
    ...provided,
    fontSize: "2rem",
    color: "white",
  }),
};

type Currency = {
  "currency-1": string;
  "currency-2": string;
};

const Main = () => {
  const [currencies, setCurrencies] = useState({} as Currency);

  const formatCurrency = (value: string) => {
    return currencyJs(value, {
      symbol: "",
      decimal: ".",
      // fromCents: true,
    }).toString();
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setCurrencies({ ...currencies, [name]: value });
  }

  useEffect(() => {
    axios
      .get("https://economia.awesomeapi.com.br/EUR-BRL/1")
      .then((response) => {
        const { data } = response;
        setCurrencies({
          ...currencies,
          "currency-2": data[0].bid,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Style.Wrapper bgImage="/img/flag-euro.svg" className="flex items-center">
      <div className="flex flex-col sm:flex-row gap-5 w-full sm:mx-48 mx-16 items-center justify-center	">
        <div className="grid grid-cols-7 max-w-4xl bg-indigo-500 bg-opacity-25 rounded-md">
          <Select
            isSearchable
            openMenuOnClick={false}
            name="currency"
            className="col-span-2"
            options={optionsCurrency}
            styles={customStyles}
            defaultValue={optionsCurrency[0]}
            noOptionsMessage={() => "Nenhuma moeda encontrada"}
            isDisabled
          />
          <input
            type="text"
            name="currency-1"
            className="col-span-5 h-32 focus:outline-none text-7xl p-3 uppercase bg-transparent text-white"
            value={formatCurrency(currencies["currency-1"] || "1.00")}
            onChange={handleInputChange}
          />
        </div>

        <img
          src="/img/transfer.svg"
          alt="Imagem de duas flechas em sentido oposto"
          className="w-16 h-16 mx-5"
        />
        <div className="grid grid-cols-7 max-w-4xl bg-indigo-500 bg-opacity-25 rounded-md">
          <Select
            isSearchable
            name="currency-2"
            className="col-span-2"
            options={optionsCurrency}
            styles={customStyles}
            noOptionsMessage={() => "Nenhuma moeda encontrada"}
            defaultValue={optionsCurrency[2]}
          />
          <input
            type="text"
            name="currency-2"
            className="col-span-5 h-32 focus:outline-none text-7xl p-3 bg-transparent uppercase text-white"
            value={formatCurrency(currencies["currency-2"] || "0.00")}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </Style.Wrapper>
  );
};

export default Main;
