import React, { useEffect, useState } from "react";
import validation from "./validation";
import "./style.module.css";

const SignupForm = (submitForm) => {
const [values, setValues] = useState({
civilite: "",
fullName: "",
email: "",
userName: "",
raisonSocial: "",
siren: "",
password: "",
});

  const[errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() =>{
    if(Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Ouvrir un compte</h2>
        </div>
        <form className="form-wrapper">

            <div className="civilite">
              <label className="label">Civilité</label>
              <select className="input" name="civilite" value={values.civilite} onChange={handleChange}>
                <option>Mr</option>
                <option>Mme</option>
              </select>
            </div>

            <div className="fullName">
            <label className="label">Nom complet</label>
            <input className="input" type="text" name="fullName" value={values.fullName} onChange={handleChange}/>
            {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="email">
            <label className="label">Email</label>
            <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
            {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="userName">
            <label className="label">Nom d'utilisateur</label>
            <input className="input" type="text" name="userName" value={values.userName} onChange={handleChange}/>
            {errors.userName && <p className="error">{errors.userName}</p>}
            </div>

            <div className="raisonSocial">
              <label className="label">Raison Social</label>
              <input className="input" type="text" name="raisonSocial" value={values.raisonSocial} onChange={handleChange}/>
              {errors.raisonSocial && <p className="error">{errors.raisonSocial}</p>}
            </div>

            <div className="siren">
              <label className="label">Numéro SIREN/SIRET</label>
              <input className="input" type="tel" name="siren" value={values.siren} onChange={handleChange}/>
              {errors.siren && <p className="error">{errors.siren}</p>}
            </div>

            <div className="password">
            <label className="label">Mot de passe</label>
            <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
            {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div>
              <button className="submit" onClick={handleFormSubmit}>Inscription</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;