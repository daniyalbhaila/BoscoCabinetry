import { useState, useEffect } from 'react';

export interface FilterCategory {
  id: string;
  label: string;
}

export interface PortfolioFilterWrapperProps {
  categories: FilterCategory[];
}

export default function PortfolioFilterWrapper({ categories }: PortfolioFilterWrapperProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [projectCount, setProjectCount] = useState<number>(0);

  useEffect(() => {
    // Get all project cards
    const projectCards = document.querySelectorAll('[data-project-category]');
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-project-category');
      const shouldShow = activeFilter === 'all' || category === activeFilter;

      if (shouldShow) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    setProjectCount(visibleCount);
  }, [activeFilter]);

  const handleFilterClick = (categoryId: string) => {
    setActiveFilter(categoryId);
  };

  return (
    <div>
      {/* Mobile: Dropdown Filter */}
      <div className="mb-12 md:hidden">
        <label htmlFor="portfolio-filter" className="block text-sm font-medium text-white/90 mb-3 text-center">
          Filter by Category
        </label>
        <select
          id="portfolio-filter"
          value={activeFilter}
          onChange={(e) => handleFilterClick(e.target.value)}
          className="w-full max-w-sm mx-auto block px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-base"
          style={{ minHeight: '48px' }}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              className="bg-brand-charcoal text-white"
            >
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: Filter Pills */}
      <div className="hidden md:block mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterClick(category.id)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider
                transition-all duration-300 ease-out
                ${
                  activeFilter === category.id
                    ? 'bg-[#60533C] text-white shadow-lg shadow-brand-primary/30 scale-105 border border-brand-accent/20'
                    : 'bg-white/5 text-white/90 border border-white/20 hover:bg-white/10 hover:border-white/30 hover:scale-102'
                }
              `}
              aria-pressed={activeFilter === category.id}
              aria-label={`Filter projects by ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* No results message */}
      {activeFilter !== 'all' && projectCount === 0 && (
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            No projects found in {categories.find(c => c.id === activeFilter)?.label}. Try selecting a different filter.
          </p>
        </div>
      )}
    </div>
  );
}
