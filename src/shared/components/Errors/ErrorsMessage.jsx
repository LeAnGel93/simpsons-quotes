import React from 'react'

const ErrorsMessage = ({errors, name}) => {
  return (<div>
    
            {errors[name] && errors[name].type === "required" && "El campo es requerido"}
            {errors[name] && errors[name].type === "min" && "El campo tiene que tener minimo de " + errors[name].message}
            {errors[name] && errors[name].type === "minLength" && "El campo tiene que tener minimo " + errors[name].message + " caracteres"}
            
    
            </div> )
}

export default ErrorsMessage