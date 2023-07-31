import React, { useState, useEffect } from "react";
import CatsImages from "../AllCatsImages/AllCatsImages";
import envs from "../../config/envs.js";
import "./AllCats.css";

const catalogAPIurl = envs.catalogAPIurl;

const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

function Cats() {
  const [cats, setCats] = useState([]);
  const [filters, setFilters] = useState({
    state: "",
    city: "",
  });

  useEffect(() => {
    fetch(`${catalogAPIurl}/allcats`)
      .then((response) => response.json())
      .then((data) => {
        const cats = data.map((cats) => ({
          name: cats.name,
          city: cats.city,
          state: cats.state,
          qtyFemale: cats.qtyFemale,
          qtyMale: cats.qtyMale,
          phone: cats.phone,
          notes: cats.notes,
        }));

        setCats(cats);
      });
  }, []);

  const filterCats = () => {
    const catsFiltered = cats.filter((cats) => {
      return (
        (filters.state === "" || cats.state === filters.state) &&
        cats.city.includes(filters.city)
      );
    });

    return catsFiltered;
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="allcats-container">
        <div className="allcats-filter">
          <label htmlFor="state">Estado:</label>
          <select
            id="state"
            name="state"
            value={filters.state}
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="allcats-filter">
          <label htmlFor="city">Cidade:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {filterCats().map((cats) => (
        <CatsImages key={cats.name} cats={cats} />
      ))}
    </>
  );
}

export default Cats;
