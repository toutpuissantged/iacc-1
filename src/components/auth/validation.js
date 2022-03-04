const validation = (values) => {

    let errors={};

    if(!values.fullName){
        errors.fullName="Nom obligatoire."
    }
    if(!values.email){
        errors.email="Email obligatoire."
    }
    if(!values.userName){
        errors.userName="Nom d'utilisateur obligatoire."
    }
    if(!values.raisonSocial){
        errors.raisonSocial="Raison social obligatoire."
    }
    if(!values.siren){
        errors.siren="Siren/SIRET obligatoire."
    }
    if(!values.password){
        errors.password="Mot de passe obligatoire."
    }else if(values.password.length < 6){
        errors.password="Le mot de passe doit dépassé 6 caractères."
    }
  return errors;
}

export default validation