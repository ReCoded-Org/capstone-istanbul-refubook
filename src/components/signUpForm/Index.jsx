import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { signUp, changeEmail } from '../../store/actions/authAction';
import { connect } from 'react-redux';
const SignUpForm = (props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSignIn({ email, password, firstName, lastName, location, bio });
  };
  return (
    <div>
      <form name="userProfile" method="post">
        <div className="md:flex block space-between">
          <div className="md:mr-4">
            <label
              htmlFor="first name"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              {t('signUp.firstName')}
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              type="text"
              name="first name"
              className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="last name"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              {t('signUp.lastName')}
            </label>
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="last name"
              className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="md:flex block space-between">
          <div className="md:mr-4">
            <label
              htmlFor="email"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              {t('signUp.email')}
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              {t('signUp.password')}
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="location"
            className="block text-blue-700 text-sm font-bold mb-2"
          >
            {t('signUp.city')}
          </label>
          <input
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            name="location"
            className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <label
          htmlFor="biography"
          className="block text-blue-700 text-sm font-bold mb-2"
        >
          {t('signUp.bio')}
        </label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
          name="biography"
          cols="30"
          rows="3"
          maxLength="140"
          placeholder={t('signUp.bioPlaceHolder')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <div className="flex space-between">
          <button
            className="uppercase md:text-base text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 mr-4 py-2 md:px-12 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => props.onChange()}
          >
            {t('signUp.signUpBtn')}
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (credentials) => dispatch(signUp(credentials)),
    // onChange: () => dispatch(changeEmail()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
