'use client';

import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem = ({
  title,
  children,
  isOpen = false,
  onToggle
}: AccordionItemProps) => {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-text-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span>{title}</span>
        <svg
          className={cn(
            'h-5 w-5 text-text-muted transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
        aria-hidden={!isOpen}
      >
        <div className="text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion = ({
  items,
  className,
  allowMultiple = false
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={cn('w-full', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};





