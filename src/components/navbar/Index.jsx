import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
//import cover from '../../assets/cover.jpg';
function Navbar(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const { t } = useTranslation();
  let links = null;
  let account = null;
  if (props.auth.uid) {
    account = (
      <div className="mx-auto mt-4 md:mt-1 px-16 z-10">
        <div className="inline-block relative w-34">
          <div className="inline-block">
            <div className="relative">
              <button
                className="items-center block h-12 w-12 rounded-full overflow-hidden border-2 border-white focus:outline-none focus:border-blue-600 hover:border-blue-600 "
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
              >
                <img
                  className="h-full w-full object-cover"
                  src={props.auth.photoURL}
                  alt="/"
                ></img>
              </button>
              {open && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                  <Link
                    className="text-center block px-4 py-2 text-gray-800 text-blue-600 hover:bg-blue-500 w-full hover:text-white"
                    to="/userProfile"
                  >
                    Profile settings
                  </Link>
                  <button
                    className="block px-4 py-2 text-gray-800 text-blue-600 hover:bg-blue-500 w-full hover:text-white"
                    onClick={props.logOut}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
    links = (
      <Link
        className="justify-center block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 text-center rounded-full"
        to="/signup"
        onClick={(e) => {
          e.preventDefault();
          props.logOut();
        }}
      >
        {t('links.home')}
      </Link>
    );
  } else {
    links = (
      <Link
        className="justify-center block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 text-center rounded-full"
        to="/signup"
      >
        {t('links.signUp')}
      </Link>
    );
    account = (
      <div className="mx-auto mt-4 md:mt-1 px-16">
        <div className="inline-block relative w-34">
          <div className="inline-block">
            <div className={props.Btn}>{links}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="z-10 flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-transparent p-4">
        <div className="mx-auto mt-4 md:mt-1 mb-4 md:mb-1 px-16 flex justify-center items-center flex-shrink-0 text-white justify-center">
          <Link className="text-blue-600 font-bold text-xl tracking-tight" to="/">
            Refubook
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <ul className="flex justify-center">
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/">
                {t('links.home')}
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/about">
                {t('links.about')}
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/contact">
                {t('links.contact')}
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/blog">
                {t('links.blog')}
              </Link>
            </li>
          </ul>
        </div>
        {account}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
