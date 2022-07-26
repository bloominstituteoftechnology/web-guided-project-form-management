import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState({ petName: "", petType: "" });

  const change = (evt) => {
    const { name, value } = evt.target;
    /**
     * const name = evt.target.name;
     * const value = evt.target.value;
     */
    setFormValues({ ...formValues, [name]: value });
  }

  const submit = (evt) => {
    evt.preventDefault();

    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim()
    }
    setPets(pets.concat(newPet));
    setFormValues({ petName: "", petType: "" });
  }

  return (
    <div className="container">
      <h1>Simple Form App</h1>
      {/** print out petName: petType for every pet in our pets array... */}
      { pets.map((pet, idx) => (
        <div key={idx}>{pet.petName}: {pet.petType}</div> 
      ))}
      <form onSubmit={submit}>
        <input
          value={formValues.petName}
          name="petName"
          type="text"
          onChange={change}
          placeholder="Pet Name"
        />
        <input
          value={formValues.petType}
          name="petType"
          type="text"
          onChange={change}
          placeholder="Pet Type"
        />
        <input type="submit" value="Create a Pet!" />
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
