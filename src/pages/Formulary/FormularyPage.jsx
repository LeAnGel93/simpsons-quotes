import React from 'react'
import { useForm } from 'react-hook-form';
import ErrorsMessage from '../../shared/components/Errors/ErrorsMessage';


const FormularyPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submit = (data) => {
      console.log(data)
  }

  return ( <>

  <form onSubmit={handleSubmit(submit)}>
    <label>
      <input type="text" {...register("name", {required: true})} placeholder="Nombre"/>
    </label>
    <span><ErrorsMessage errors={errors} name="name"></ErrorsMessage></span> 
    <label>
      <input type="number" {...register("age", {required: false, min: {value: 18, message: "18 años"}})} placeholder="Edad" />
      <ErrorsMessage errors={errors} name="age"></ErrorsMessage>
    </label>
    <label>
      <input type="boolean" {...register("working", {required: false, min: {value: true, message: "true or false"}})} placeholder="estas trabajando?" />
      <ErrorsMessage errors={errors} name="work"></ErrorsMessage>
    </label>
      
      <button>Enviar</button>
      </form>

</>  )
}

export default FormularyPage