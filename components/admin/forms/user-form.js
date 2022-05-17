import axios from 'axios';
import { useState } from 'react';

const Userform = ({ user }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handlePost = async () => {
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile_number: mobile,
      password: password,
    };
    const res = await axios.post(
      'http://127.0.0.1:8000/auth/add-user',
      newUser
    );
    console.log(res);
  };
  const handlePut = async () => {
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile_number: mobile,
      password: password,
    };
    const res = await axios.put(
      'http://127.0.0.1:8000/auth/user/' + user._id,
      newUser
    );
    console.log(res);
  };

  return (
    <div className="flex justify-center h-screen mt-36 ">
      <div className=" flex-row  justify-center items-center h-full space-y-5">
        <h1 className="text-3xl text-center">New User</h1>

        <div className="space-y-3">
          <p>First Name</p>
          <input
            className="border-2 w-96 "
            type="text"
            name="FirstName"
            value={user ? user.first_name : ''}
            onChange={e => setFirstName(e.target.value)}
          />
          <p>Last Name</p>
          <input
            className="border-2 w-96"
            type="text"
            name="LastName"
            value={user ? user.last_name : ''}
            onChange={e => setLastName(e.target.value)}
          />
          <p>Email</p>
          <input
            className="border-2 w-96"
            type="text"
            name="Email"
            value={user ? user.email : ''}
            onChange={e => setEmail(e.target.value)}
          />
          <p>Mobile Number</p>
          <input
            className="border-2 w-96"
            type="text"
            name="MobileNumber"
            value={user ? user.mobile_number : ''}
            onChange={e => setMobile(e.target.value)}
          />
          <p>Password</p>
          <input
            className="border-2 w-96"
            type="text"
            name="Password"
            value={user ? user.password : ''}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="flex space-x-2 items-center ">
            <input className="bg-[#63FFFD]" type="checkbox" />
            <p>Is Admin ?</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={user ? handlePut : handlePost}
              className="border-2 bg-[#8FECFF] px-9 "
            >
              {user ? 'Update User' : 'Add User'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userform;
