import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
import axios from '../axios'

// 0. We need state to track what the user puts into our form
// 1. We need a form with inputs for each property to update
// 2. We need an onChange function to update our form state
// 3. last, we need a submit function so the user can save all the inputs at the same time
///   3b. Save to db before updating app state!

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
  const [formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`

    // build new formValues, using inputName and inputValue
    // spread operator, computed properties
    const newFormValues = {...formValues, [inputName]: inputValue }

    // set the new form values in state
    setFormValues(newFormValues)
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    //  b) prevent further action if either username or email or role is empty string after trimming
    const usernameIsEmpty = !newFriend.username
    const emailIsEmpty = !newFriend.email
    const roleIsEmpty = newFriend.role === ''
    if (usernameIsEmpty || emailIsEmpty || roleIsEmpty) return

    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    axios
      .post('fakeapi.com', newFriend)
      .then(res => {
        const newFriends = [...friends, newFriend]
        setFriends(newFriends)
      })
      .catch(err => console.log(err))
    //  d) also on success clear the form
    setFormValues(initialFormValues)
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
        formValues={formValues}
        update={updateForm}
        submit={submitForm}
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
