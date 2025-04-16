
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen = false,
  onClick,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleExpand = () => {
    if (onClick) {
      onClick();
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const expanded = onClick ? isOpen : isExpanded;

  return (
    <div className={cn(
      'border-b border-gray-200 py-4',
      className
    )}>
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleExpand}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown 
          className={cn(
            'transition-transform duration-200',
            expanded ? 'transform rotate-180' : ''
          )} 
          size={20} 
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 max-h-0',
          expanded ? 'max-h-96 mt-4' : 'max-h-0'
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
