'use client';

import React, { createContext, useContext, useState } from 'react';

export type SkillCategory =
  | 'Languages'
  | 'Automation'
  | 'API & Functional'
  | 'DevOps & Tools'
  | 'IDE Tools'
  | 'Methodologies'
  | 'Specialized'
  | null;

interface SkillHoverContextType {
  hoveredCategory: SkillCategory;
  setHoveredCategory: (category: SkillCategory) => void;
}

const SkillHoverContext = createContext<SkillHoverContextType | undefined>(undefined);

export function SkillHoverProvider({ children }: { children: React.ReactNode }) {
  const [hoveredCategory, setHoveredCategory] = useState<SkillCategory>(null);

  return (
    <SkillHoverContext.Provider value={{ hoveredCategory, setHoveredCategory }}>
      {children}
    </SkillHoverContext.Provider>
  );
}

export function useSkillHover() {
  const context = useContext(SkillHoverContext);
  if (context === undefined) {
    throw new Error('useSkillHover must be used within a SkillHoverProvider');
  }
  return context;
}
