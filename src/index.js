import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:

// default app state
const petsList = [
  { petName: 'Fido', petType: 'dog', petColor: 'russet' },
  { petName: 'Tweetie', petType: 'canary', petColor: 'yellow' },
  { petName: 'Goldie', petType: 'fish', petColor: 'gold' },
]

// default form state
const defaultFormValues = {petName: '', petType: '', petColor: ''}

// 0. We need state to track what the user puts into our form
// 1. We need a form with inputs for each property to update
// 2. We need an onChange function to update our form state
// 3. last, we need a submit function so the user can save all the inputs at the same time


function SimpleForm() {
  // This is app state
  const [pets, setPets] = useState(petsList)

  // This is form state
  const [petInfo, setPetInfo] = useState(defaultFormValues)

  // function to update our form state
  function onChange(event) {
    const { name, value } = event.target
    // how to set the object, but update just one property?
    setPetInfo({...petInfo, [name]: value })
  }

  // function to update our app state when user is done
  function onSubmit(event) {
    event.preventDefault()  // don't reload, this is an SPA!
    const newPets = [...pets, petInfo]
    setPets(newPets)
    setPetInfo(defaultFormValues)
  }

  return (
    <div>
      {pets.map(pet => 
      <div key={pet.petName}>
        My {pet.petType} is named {pet.petName} and is colored {pet.petColor}
      </div>)}

      <form onSubmit={onSubmit}>
        <input type="text" value={petInfo.petName} name="petName" onChange={onChange} />
        <input type="text" value={petInfo.petType} name="petType" onChange={onChange} />
        <input type="text" value={petInfo.petColor} name="petColor" onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
