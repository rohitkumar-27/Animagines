
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
}) => {
  return (
    <div className={cn(
      'bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100',
      className
    )}>
      <div className="w-12 h-12 bg-motion-red/10 rounded-lg flex items-center justify-center text-motion-red mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-motion-red hover:text-motion-red-dark font-medium transition-colors"
      >
        Learn More <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
