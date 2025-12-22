
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CourseCardData } from '../types';

interface Props {
  data: CourseCardData;
}

const CourseCard: React.FC<Props> = ({ data }) => {
  return (
    <a 
      href={data.href} 
      className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-2xl hover:shadow-primary-100 transition-all duration-300 hover:-translate-y-2"
    >
      <div className={`w-14 h-14 bg-gradient-to-r ${data.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
        <data.icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {data.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {data.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
          {data.modulCount} {data.title.includes('Video') ? 'Video' : 'Modul'}
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
