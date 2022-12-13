import React, { CSSProperties } from 'react';
import { IconType } from './icons';

export enum TicketClasses {
  'DeliveryRequest',
  'Incident',
  'UserRequest',
  'DevelopmentRequest',
}

export interface ChartProps {
  type?:
    | 'area'
    | 'line'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | undefined;
}

export interface ButtonProps {
  size?: number | string;
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger';
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export interface NavButtonProps {
  obj: {
    name: string;
    icon: React.FC<IconType>;
    href: string;
  };
  path: string;
}

export interface StatsWidgetCardProps {
  stats: {
    id: number;
    name: string;
    stat: string;
    icon: React.FC<IconType>;
    change: string;
    changeType: string;
  };
}

export interface SidebarProps {
  count?: string | number;
}
