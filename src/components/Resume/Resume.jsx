import React from 'react';
import Pdfile from './Kannan.pdf'; 

const Resume = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        My Resume
      </h1>
      
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          src={Pdfile}
          width="100%" 
          height="800px" 
          title="Resume"
          style={{
            border: 'none',
            scrollbarWidth: 'none',
          }}
        ></iframe>
      </div>

      <div className="mt-8">
        <a
          href={Pdfile}
          download="Kannan_Resume.pdf"
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-all"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
