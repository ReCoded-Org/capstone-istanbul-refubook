import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
function Navbar(props) {
  const { t } = useTranslation();
  let links = null;
  if (props.auth.uid) {
    links = (
      <Link
        className="justify-center block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 text-center rounded-full"
        to="/signup"
        onClick={(e) => {
          e.preventDefault();
          props.logOut();
        }}
      >
        {t('navbar.title6')}
      </Link>
    );
  } else {
    links = (
      <Link
        className="justify-center block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 text-center rounded-full"
        to="/signup"
      >
        {t('navbar.title5')}
      </Link>
    );
  }
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-4">
        <div className="mx-auto mt-4 md:mt-1 mb-4 md:mb-1 px-16 flex justify-center items-center flex-shrink-0 text-white justify-center">
          <Link className="text-blue-600 font-bold text-xl tracking-tight" to="/">
            Refubook
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <ul className="flex justify-center">
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/">
                {t('navbar.title1')}
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/about">
                {t('navbar.title2')}
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/contact">
                {t('navbar.title3')}
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 hover:text-blue-600" to="/blog">
                {t('navbar.title4')}
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-4 md:mt-1 px-16">
          <div className="inline-block relative w-34">
            <div className="inline-block">
              <div className={props.Btn}>{links}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
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
