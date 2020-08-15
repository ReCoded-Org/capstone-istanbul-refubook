import React from 'react';
import cover from '../../assets/ReachProject.jpeg';

const style = {
  coverPhoto: {
    backgroundColor: '#000',
  },
};

function AboutPageCover() {
  return (
    <div style={style.coverPhoto}>
      <img className="w-full h-auto mx-auto opacity-75" src={cover} alt="" />
    </div>
  );
}
export default AboutPageCover;
