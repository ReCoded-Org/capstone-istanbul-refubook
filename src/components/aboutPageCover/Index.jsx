import React from 'react';
import cover from '../../assets/team.jpg';

const style = {
  coverPhoto: {
    backgroundColor: '#000',
  },
};

function AboutPageCover() {
  return (
    <div style={style.coverPhoto}>
      <img className="w-full h-full mx-auto opacity-75" src={cover} alt="" />
    </div>
  );
}
export default AboutPageCover;
