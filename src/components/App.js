import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
import axios from '../axios'

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState([]) // careful what you initialize your state to

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const formValues = {} // fix this using the state hook

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    //  b) prevent further action if either username or email or role is empty string after trimming
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    //  d) also on success clear the form
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setFriends(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>

      <FriendForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        values={{}}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
