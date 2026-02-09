import "./Suggestions.css"
import React from 'react'
import { useForm } from 'react-hook-form'

const Suggestions = () => {
  const { handleSubmit, register, reset, formState:{ errors } } = useForm({
    defaultValues:{
      name:"",
      email: "",
      suggestion: ""
    }
  })

  const onSubmit = (values) =>{
    console.log("Datos enviados:", values);
    alert("Thanks, your suggestions was submitted");
    reset();
  }
  return (
  <div className="formDiv">
    <h2>Help us to improve</h2>
    <form className="suggestForm" onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="name">Introduce name</label>
    <input
    {...register(`name`)}
    type="text"
    id="name"
    className="inputForm" 
    />
    <label htmlFor="email">Introduce email</label>
    <input
    {...register(`email`)}
    type="text"
    id="email" 
    className="inputForm" 
    />
    <label htmlFor="suggestion">Suggestion</label>
    <input
    {...register(`suggestion`)}
    type="text"
    id="suggestion"
    className="inputSuggestion" 
    />
    <button className="buttonForm" type='submit'>Submit suggestion</button>
    </form>
  </div>
  )
}

export default Suggestions