import "./Suggestions.css"
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'

const Suggestions = () => {

  const [ submitFeedback, setSubmitFeedback ] = useState(null);

  const { handleSubmit, register, reset, control, formState:{ errors } } = useForm({
    defaultValues:{
      name:"",
      email: "",
      suggestion: ""
    }
  })

  const suggestionValue = useWatch({ control, name: "suggestion" })
  const suggestionLength = (suggestionValue || "").trim().length

  const onSubmit = () =>{
    setSubmitFeedback({
      type: 'success',
      message: 'Thanks! Your suggestion was submitted successfully.'
    })
    reset();
  }

  const onInvalid = () => {
    setSubmitFeedback({
      type: 'error',
      message: 'Please fix the highlighted fields before submitting.'
    })
  }

  return (
  <div className="formDiv">
    <h2>Help us to improve</h2>
    <p className="suggestionSubtitle">Share ideas that can improve search results, artist details, or the overall experience.</p>

    <form className="suggestForm" onSubmit={handleSubmit(onSubmit, onInvalid)}>
    <label htmlFor="name">Enter name</label>
    <input
    {...register('name', {
      required: 'Please enter your name.',
      minLength: {
        value: 3,
        message: 'Your name must be at least 3 characters long.'
      }
    })}
    type="text"
    id="name"
    className={`inputForm ${errors.name ? 'inputError' : ''}`}
    />
    {errors.name && <p className="errorText">{errors.name.message}</p>}

    <label htmlFor="email">Enter email</label>
    <input
    {...register('email', {
      required: 'Please enter your email address.',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address (example: name@email.com).'
      }
    })}
    type="email"
    id="email" 
    className={`inputForm ${errors.email ? 'inputError' : ''}`}
    />
    {errors.email && <p className="errorText">{errors.email.message}</p>}

    <label htmlFor="suggestion">Suggestion</label>
    <textarea
      {...register('suggestion', {
        required: 'Please write a suggestion.',
        minLength: {
          value: 10,
          message: 'Your suggestion must be at least 10 characters long.'
        },
        maxLength: {
          value: 280,
          message: 'Please keep your suggestion under 280 characters.'
        }
      })}
      id="suggestion"
      className={`inputSuggestion ${errors.suggestion ? 'inputError' : ''}`}
    />
    <p className="hintText">{suggestionLength}/280 characters</p>
    {errors.suggestion && <p className="errorText">{errors.suggestion.message}</p>}

    <button className="buttonForm" type='submit'>Submit suggestion</button>
    {submitFeedback && (
      <p
        className={`formMessage ${submitFeedback.type === 'success' ? 'successMessage' : 'errorMessage'}`}
        role="status"
        aria-live="polite"
      >
        {submitFeedback.message}
      </p>
    )}
    </form>
  </div>
  )
}

export default Suggestions