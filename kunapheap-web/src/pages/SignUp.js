
import React, { useEffect, useState } from 'react'

function SignUp() {

  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [username, setUsername] = useState("")
  const [gender, setGender] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [alert, setAlert] = useState("")

  useEffect(() => {
    setAlert("")
  }, [firstName, lastName, username,
    gender, phoneNumber, email, password])

  // model User {
  //   user_username String @unique
  //   user_password String
  //   user_gender String
  //   user_phone_number String
  //   user_image_link String
  //   user_email String
  // }

  const handleSignUp = () => {
    const user = {
      firstName,
      lastName,
      username,
      gender,
      phoneNumber,
      email,
      password
    }

    if (firstName == "" || lastName == "" || username == "" || gender == "" || phoneNumber == "" || email == "" || password == "") {
      setAlert("Your input could not empty!")
    } else if (password.length <= 8) {
      setAlert("Passwords are less than 8 characters!")
    } else {
      console.log(user)
    }
  }

  return (
    <div>
      <div className='w-[100%] h-screen flex flex-col gap-y-3 lg:gap-y-5 items-center mt-14'>
        <h1 className='font-bold text-xl lg:text-3xl text-primary'>Sign Up</h1>

        {/* Input First name, Last Name */}
        <div className='w-[80%] lg:w-[50%] flex flex-col gap-x-3 lg:flex-row gap-y-5'>
          <div className='w-[100%] lg:w-[50%]'>
            <p>First name</p>
            <input type='text' value={firstName} onChange={(e) => { setfirstName(e.target.value) }}
              className='w-[100%] h-10 border-2 border-primary rounded-md px-2 outline-secondary' />
          </div>

          <div className='w-[100%] lg:w-[50%]'>
            <p>Last name</p>
            <input type='text' value={lastName} onChange={(e) => { setlastName(e.target.value) }}
              className='w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary' />
          </div>
        </div>

        {/* Input Phone number */}
        <div className='w-[80%] lg:w-[50%]'>
          <p>Phone number</p>
          <input type='number' value={phoneNumber} onChange={(e) => { setphoneNumber(e.target.value) }}
            className='w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary' />
        </div>

        {/* Input Email */}
        <div className='w-[80%] lg:w-[50%]'>
          <p>Email</p>
          <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }}
            className='w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary' />
        </div>

        {/* Input username */}
        <div className='w-[80%] lg:w-[50%]'>
          <p>Username</p>
          <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }}
            className='w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary' />
        </div>

        {/* Input Password */}
        <div className='w-[80%] lg:w-[50%]'>
          <p>Password</p>
          <input type='password' value={password} onChange={(e) => { setpassword(e.target.value) }}
            className='w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary' />
        </div>

        {/* Input Gender */}
        <div className='w-[80%] lg:w-[50%] flex gap-x-4 mt-2'>

          <p>Gender</p>
          <div className='flex gap-x-4 ml-8 items-center'>
            <input id='radio-button1' name='radio-button' type='radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
              value="Female" onChange={(e) => { setGender(e.target.value) }} />
            <label for="radio-button1">Female</label>
          </div>
          <div className='flex gap-x-4 items-center'>
            <input id='radio-button2' name='radio-button' type='radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
              value="Male" onChange={(e) => { setGender(e.target.value) }} />
            <label for="radio-button2">Male</label>
          </div>
        </div>

        {/* Button sign up */}
        <div className='w-[80%] lg:w-[50%] text-left'>
          <p className='text-red-600'>{alert}</p>
        </div>
        <button onClick={handleSignUp}
          className='w-[80%] lg:w-[50%] bg-primary py-3 text-bgColor rounded-md  hover:bg-secondary hover:text-primary hover:font-bold'>Sign up</button>
      </div>
    </div>
  )
}

export default SignUp