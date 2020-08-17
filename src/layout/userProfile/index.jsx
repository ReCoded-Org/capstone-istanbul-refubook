import React, { useState } from 'react';
import UserProfileEdit from '../../components/userProfileEditInfo/index';
import editIcon from '../../assets/editIcon.svg';
import Carousel from '../../components/carousel/Index';
import BlogsCard from '../../components/blogsCard';
import { userProfileCarouselSettings } from '../../consts/userProfileConsts';
import Avatar from '../../components/avatar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//personal Blogs Array is an array of blogs written by the same user
const personalBlogsArray = [
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
];

const UserProfile = (props) => {
  console.log(props.auth);
  const userInfo = {
    id: 1,
    name: `${props.auth.displayName}`,
    avatar: `${props.auth.photoURL}`,
    profile: '',
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  if (!props.auth.uid) return <Redirect to="/" />;

  if (isOpen) {
    return <UserProfileEdit isButtonOpen={handleIsOpen} />;
  } else {
    return (
      <>
        <div className="flex flex-col  bg-blue-300 h-full">
          <div className="flex flex-col bg-white h-full mx-4 my-4 lg:mx-16 lg:my-16 xl:mx-16 xl:my-16 rounded-lg">
            <Avatar
              user={userInfo}
              buttonIcon={editIcon}
              isButtonOpen={handleIsOpen}
            />
            <div className="px-8 my-8">
              <Carousel
                carouselData={personalBlogsArray}
                settings={userProfileCarouselSettings}
              />
            </div>
          </div>
        </div>
        {/* <div>
          <UserProfileEdit />
        </div> */}
      </>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    userInfo: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(UserProfile);
