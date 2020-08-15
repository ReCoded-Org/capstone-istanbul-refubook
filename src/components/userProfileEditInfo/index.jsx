import React, { useState, useEffect } from 'react';
import { ReactComponent as Camera } from '../../assets/camera.svg';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { changeBioAndLoc } from '../../store/actions/authAction';
const UserProfileEdit = (props) => {
  console.log(props.userInfo);
  const firstNameDemo = props.userInfo.name
    ? props.userInfo.name.split(' ')[0]
    : props.auth.displayName.split(' ')[0];
  const lastNameDemo = props.userInfo.name
    ? props.userInfo.name.split(' ')[1]
    : props.auth.displayName.split(' ')[1];
  const [firstName, setFirstName] = useState(firstNameDemo);
  const [lastName, setLastName] = useState(lastNameDemo);
  const [bio, setBio] = useState(props.userInfo.bio);
  const [location, setLocation] = useState(props.userInfo.location);
  useEffect(() => {
    props.getUserInfo();
  }, [props]);
  const { t } = useTranslation();
  return (
    <div className="bg-blue-100 h-screen flex flex-col items-center justify-center">
      <div className="relative md:mb-16 mb-8 flex flex-col items-end">
        <img
          src="https://via.placeholder.com/150"
          className="rounded-full"
          alt="user"
        />
        <div className="absolute bottom-0 rounded-full bg-blue-600 p-2">
          <Camera className="w-5 text-white fill-current" />
        </div>
      </div>
      <div>
        <form name="userProfile" method="post">
          <div className="md:flex block space-between">
            <div className="md:mr-4">
              <label
                htmlFor="first name"
                className="block text-blue-700 text-sm font-bold mb-2"
              >
                {t('userProfile.edit.firstName')}
              </label>
              <input
                required
                type="text"
                name="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="last name"
                className="block text-blue-700 text-sm font-bold mb-2"
              >
                {t('userProfile.edit.lastName')}
              </label>
              <input
                required
                type="text"
                name="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="location"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              {t('userProfile.edit.location')}
            </label>
            <input
              required
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <label
            htmlFor="biography"
            className="block text-blue-700 text-sm font-bold mb-2"
          >
            {t('userProfile.edit.bio')}
          </label>
          <textarea
            onChange={(e) => setBio(e.target.value)}
            required
            value={bio}
            name="biography"
            cols="30"
            maxLength="140"
            rows="3"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          <div className="flex space-between">
            <button
              className="uppercase md:text-base text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 mr-4 py-2 md:px-12 px-6 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() =>
                props.changeUserBioAndLoc({ location, bio, firstName, lastName })
              }
            >
              {t('userProfile.edit.save')}
            </button>
            <button
              className="uppercase md:text-base text-sm bg-transparent border-solid border-2 border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white font-bold mt-4 py-2 md:px-6 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('userProfile.edit.cancele')}
            </button>
            <button
              className="uppercase md:text-base text-sm bg-transparent border-solid border-2 border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white font-bold mt-4 py-2 md:px-6 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={props.getUserInfo}
            >
              {t('userProfile.edit.cancele')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    userInfo: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    changeUserBioAndLoc: (newInfo) => dispatch(changeBioAndLoc(newInfo)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileEdit);
