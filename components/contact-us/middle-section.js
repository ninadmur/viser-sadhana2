import React from 'react';
import ContactForm from './contact-form1';
import LocateUs from './locate-us';
import Social from './social-section';
const SocialContact = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full xl:flex-row ">
      <div className="flex-1 w-full">
        <Social />
      </div>
      <div className="flex-1 w-full flex items-center justify-center">
        <LocateUs />
      </div>
    </div>
  );
};

export default SocialContact;
