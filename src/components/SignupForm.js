import React from "react";

const SignupForm = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Ouvrir un compte</h2>
        </div>
        <form className="form-wrapper">
            <div className="fullName">
            <label className="label">Nom complet</label>
            <input className="input" type="text"/>
            </div>

            <div className="email">
            <label className="label">Email</label>
            <input className="input" type="email"/>
            </div>

            <div className="userName">
            <label className="label">Nom d'utilisateur</label>
            <input className="input" type="text"/>
            </div>

            <div className="password">
            <label className="label">Mot de passe</label>
            <input className="input" type="password"/>
            </div>

            <div className="password">
            <label className="label">Confirmer Mot de passe</label>
            <input className="input" type="password"/>
            </div>

            <div>
              <button className="submit">Inscription</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;