import React from 'react';
import cover from '../../assets/cover.jpg';

function AboutPageCover() {
  return (
    <div className="w-full">
      <img className="object-cover opacity-75" src={cover} alt="" />
    </div>
  );
}
export default AboutPageCover;
