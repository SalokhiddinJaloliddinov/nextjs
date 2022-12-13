import { ArrowSmallDownIcon, ArrowSmallUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { classNames } from 'src/utils/scripts';
import { StatsWidgetCardProps } from 'src/utils/types';

export const StatsWidgetCard: React.FC<StatsWidgetCardProps> = ({ stats }) => {
  return (
    <div
      key={stats.id}
      className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div className="absolute bg-gray-100 rounded-md p-3">
          <stats.icon className="h-6 w-6 fill-gray-900 flex" aria-hidden="true" size={24} />
        </div>
        <p className="ml-16 text-sm font-medium text-gray-500 truncate">{stats.name}</p>
      </dt>
      <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p className="text-2xl font-semibold text-gray-900">{stats.stat}</p>
        <p
          className={classNames(
            stats.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
            'ml-2 flex items-baseline text-sm font-semibold',
          )}>
          {stats.changeType === 'increase' ? (
            <ArrowSmallUpIcon
              className="self-center flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ArrowSmallDownIcon
              className="self-center flex-shrink-0 h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          )}

          <span className="sr-only">
            {stats.changeType === 'increase' ? 'Increased' : 'Decreased'} by
          </span>
          {stats.change}
        </p>
        <div className="absolute bottom-0 inset-x-0 bg-gray-100 px-4 py-2 sm:px-6">
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              {' '}
              Перейти<span className="sr-only"> {stats.name}</span>
            </a>
          </div>
        </div>
      </dd>
    </div>
  );
};
