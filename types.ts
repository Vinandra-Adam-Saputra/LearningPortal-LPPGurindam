
import React from 'react';

export type ContentFormat = 'Modul' | 'Slide' | 'Mind Map' | 'Suplemen' | 'Video' | 'Direct' | 'Anti Korupsi dalam Pelaksanaan PBJP' | 'Materi Anti Narkoba';

export interface ResourceData {
  format: ContentFormat;
  pages?: string[]; // For slides/images
  fileUrl?: string; // For PDF download or Direct link
  videoUrl?: string; // For Video playback
  fileSize?: string;
  updatedAt?: string;
}

export interface TopicItem {
  id: string;
  title: string;
  description?: string;
  isFolder?: boolean; // If true, it contains sub-topics
  subTopics?: TopicItem[]; 
  resources?: ResourceData[]; // Available formats for this topic (Modul, Slide, etc.)
  directResource?: ResourceData; // For items like Perpres that go straight to viewer
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  topics: TopicItem[];
}

export interface NavLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

export interface Stat {
  value: string;
  label: string;
}

// Added CourseCardData to fix Error in file components/CourseCard.tsx on line 4
export interface CourseCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  modulCount: number;
  href: string;
}
