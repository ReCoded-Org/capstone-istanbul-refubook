import React from 'react';

function Avatar(props) {
  const { user, buttonIcon } = props;
  return (
    <div className="flex flex-col justify-center mt-10 mx-auto">
      <div className="flex relative w-24 h-24 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
        <img className="rounded-full" alt="A" src={user.avatar} />
        <button
          onClick={props.isButtonOpen}
          className="flex items-center justify-around p-0 w-8 h-8 bg-blue-400 rounded-full absolute bottom-0 right-0 hover:bg-blue-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        >
          <img
            src={buttonIcon}
            alt="edit Icon"
            className="w-4 h-4 inline-block fill-current text-blue-100"
          />
        </button>
      </div>
      <p>{user.name}</p>
    </div>
  );
}

export default Avatar;
