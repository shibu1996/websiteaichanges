
import React, { useState, useEffect } from 'react';

import { useProcessData } from '../../../hooks/useProcessData.js';
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js';
import { useNavigate, useLocation } from "react-router-dom";
import humanizeString from "../../../extras/stringUtils.js";

const CleaningProcess = () => {
  const {
    projectOurProcess,
    projectCategory,
    isLoading
  } = useProcessData();
  const [showName, setShowName] = useState("");

  const location = useLocation();
const pathname = location.pathname;
const slug = pathname.startsWith('/') ? pathname.slice(1) : pathname;
let cityName = pathname.split('/').pop();
cityName = showName ? showName : cityName;  // Use showName if it's set

cityName = cityName ? `in ${humanizeString(cityName)}` : "";

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="bg-gray-200 h-12 w-64 mx-auto mb-6 rounded"></div>
              <div className="bg-gray-200 h-4 w-96 mx-auto rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-64"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Simple Process
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our streamlined {projectOurProcess.length}-step process ensures you get professional {projectCategory} service from start to finish {cityName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projectOurProcess.map((step, index) => (
            <div key={index} className="text-center relative group h-full">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-xl group-hover:scale-110 transition-all duration-300">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 h-full flex flex-col">
                <div
                  className={`bg-gradient-to-br ${step.gradient || 'from-gray-400 to-gray-600'
                    } rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                >
                  <DynamicFAIcon iconClass={step.iconClass || ''} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex-shrink-0">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{step.description}</p>
              </div>

              {/* Arrow for desktop */}
              {index < projectOurProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-green-300 z-20">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;
