import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Friend from './Friend'
import FriendForm from './FriendForm'

// 👉 the shape of the actual friend object from API
const initialFriendsList = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState(initialFriendsList)

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const formValues = {} // fix this using the state hook

  const onInputChange = evt => {
    // 🔥 STEP 8 - IMPLEMENT A CHANGE HANDLER (works for inputs and dropdowns)
    // which can change the state of inputs of type text

    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) set a new state for the whole form
  }

  const onSubmit = evt => {
    // 🔥 STEP 9 - IMPLEMENT A SUBMIT HANDLER

    // a) don't allow the browser to reload!
    // b) don't allow the submission, if any of the formValues is empty!
    // c) make a new friend object
    //    set up the new friend with the correct attributes
    //    using the information inside the state of the form
    // d) update the list of friends in state with the new friend
    // e) optionally clear the form
  }

  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <FriendForm
        // 🔥 STEP 2 - The form component needs its props.
        //    Check implementation of FriendForm
        //    to see what props it expects.
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
