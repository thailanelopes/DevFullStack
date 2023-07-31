import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./AddCats.css";
import envs from "../../config/envs.js";

const catalogAPIurl = envs.catalogAPIurl;

const states = [
  { value: "" },
  { value: "AC", label: "AC" },
  { value: "AL", label: "AL" },
  { value: "AP", label: "AP" },
  { value: "AM", label: "AM" },
  { value: "BA", label: "BA" },
  { value: "CE", label: "CE" },
  { value: "DF", label: "DF" },
  { value: "ES", label: "ES" },
  { value: "GO", label: "GO" },
  { value: "MA", label: "MA" },
  { value: "MS", label: "MS" },
  { value: "MG", label: "MG" },
  { value: "PA", label: "PA" },
  { value: "PB", label: "PB" },
  { value: "PR", label: "PR" },
  { value: "PE", label: "PE" },
  { value: "PI", label: "PI" },
  { value: "RJ", label: "RJ" },
  { value: "RN", label: "RN" },
  { value: "RS", label: "RS" },
  { value: "RO", label: "RO" },
  { value: "RR", label: "RR" },
  { value: "SC", label: "SC" },
  { value: "SP", label: "SP" },
  { value: "TO", label: "TO" },
];

function RegisterCats() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [qtyFemale, setQtyFemale] = useState("");
  const [qtyMale, setQtyMale] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const cats = {
      name,
      city,
      state,
      qtyFemale,
      qtyMale,
      phone,
      notes,
    };

    fetch(`${catalogAPIurl}/registercats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cats),
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setCity("");
          setState("");
          setQtyFemale("");
          setQtyMale("");
          setPhone("");
          setNotes("");
          alert("Cadastrado com sucesso!");
        }
      })
      .then((data) => {});
  };

  return (
    <div className="AddCats">
      <form onSubmit={onSubmitHandler}>
        <h2>Cadastro de Gatinhos</h2>
        <div className="Line">
          <div className="Column">
            <label>Seu nome</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            ></input>
          </div>
          <div className="Column">
            <label>Cidade</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            ></input>
          </div>
          <div className="Column">
            <label>Estado</label>
            <select
              name="state"
              value={state}
              onChange={(event) => setState(event.target.value)}
              required
              className="InputState"
            >
              {states.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="Column">
            <label>Fêmeas para adoção</label>
            <input
              type="text"
              name="qtyFemale"
              value={qtyFemale}
              onChange={(event) => setQtyFemale(event.target.value)}
              required
            ></input>
          </div>
          <div className="Column">
            <label>Machos para adoção</label>
            <input
              type="text"
              name="qtyMale"
              value={qtyMale}
              onChange={(event) => setQtyMale(event.target.value)}
              required
            ></input>
          </div>
          <div className="Column">
            <label>Telefone</label>
            <PhoneInput
              country={"br"}
              onlyCountries={["br"]}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputProps={{
                name: "phone",
                required: true,
              }}
              className="InputPhone"
            />
          </div>
          <div className="Column">
            <label>Observações</label>
            <input
              placeholder="Ex: idade, cor, vacinas, etc.. "
              type="text"
              name="notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              required
            ></input>
          </div>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default RegisterCats;
