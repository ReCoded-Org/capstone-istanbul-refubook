import React, { useState } from 'react';
import UserProfileEdit from '../../components/userProfileEditInfo/index';
import Navbar from '../../components/navbar/Index';
import editIcon from '../../assets/editIcon.svg';
import Carousel from '../../components/carousel/Index';
import BlogsCard from '../../components/blogsCard/Index';
import { userProfileCarouselSettings } from '../../consts/userProfileConsts';
import Avatar from '../../components/avatar';
//personal Blogs Array is an array of blogs written by the same user
const personalBlogsArray = [
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
];

const userInfo = {
  id: 1,
  name: 'Jonathan Reinink',
  avatar: 'https://via.placeholder.com/150',
  profile: '',
};
const NavbarStyle =
  'z-10 flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-transparent p-4';
const Btn = 'hidden';
const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    return <UserProfileEdit isButtonOpen={handleIsOpen} />;
  } else {
    return (
      <>
        <div className="flex flex-col  bg-blue-300 h-full">
          <div className="flex flex-col bg-white h-full mx-4 my-4 lg:mx-16 lg:my-16 xl:mx-16 xl:my-16 rounded-lg">
            <Navbar NavbarStyle={NavbarStyle} Btn={Btn} />
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

export default UserProfile;
