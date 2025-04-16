
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  image,
  className,
}) => {
  return (
    <Link 
      to={`/projects/${id}`}
      className={cn(
        'group block overflow-hidden rounded-lg shadow-md card-hover relative',
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-motion-black/80 via-motion-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-motion-red text-sm font-medium tracking-wider uppercase">{category}</span>
        <h3 className="text-white text-xl font-semibold mt-1">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
