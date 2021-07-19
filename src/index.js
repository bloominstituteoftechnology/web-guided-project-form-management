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

const initialFormValues = {
  petName: '',
  petType: '',
}

function SimpleForm() {
  const [pets, setpets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialFormValues);

  return <div className='container'>
    <h1>Simple Form</h1>
    {
      pets.map((pet, idx) =>{
        // note key{idx} is for develoepment in production we want key={XYZ.id}
        return <div key={idx}>{pet.petName} is a {pet.petType}</div>
      })
      
    }
    </div>
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
