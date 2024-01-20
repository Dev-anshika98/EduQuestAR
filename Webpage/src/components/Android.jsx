import React from 'react';
import Image from '../assets/android.png'
const Android = () => {
  return (
    <div className="home-content ml-40">
      <div className="flex items-center">
        {/* Align left */}
        <div className="w-1/2 p-6">
          <h3 data-aos="fade-up">Welcome,</h3>

          <h1 data-aos="fade-up" className="mb-4 text-6xl font-bold">
            Team <span className='text-[#10E1E6]'>Kalakar</span> Presents <br />
            <span className='text-[#10E1E6] font-bold'>EduQuest</span>AR<br />
          </h1>

          <div className="buttons" data-aos="fade-up">
        
            <a
              href="#"
              data-lity
              className="btn-secondary"
            >
              <button className="border px-4 py-2 text-lg" aria-hidden="true">Download Our App</button>

            </a>
          </div>
        </div>

        {/* Align right */}
        <div className="w-1/3 p-10 m4-20">
          <img
            src={Image}
           
            data-aos="fade-up"
            alt="Mockup"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Android;
