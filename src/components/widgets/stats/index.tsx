/* This example requires Tailwind CSS v2.0+ */
import { StatsWidgetCard } from './StatsCard';
import {
  BankIcon,
  BurgerIcon,
  DownloadIcon,
  MailIcon,
  NavigatorIcon,
  UsersIcon,
} from 'src/components/icons';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import Container from 'src/components/layout/Container';

const stats = [
  {
    id: 1,
    name: 'Пользователи',
    stat: '852',
    icon: UsersIcon,
    change: '12',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Сред. Открытие запрос',
    stat: '58.16%',
    icon: MailIcon,
    change: '5.4%',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Avg. Click Rate',
    stat: '24.57%',
    icon: NavigatorIcon,
    change: '3.2%',
    changeType: 'decrease',
  },
  {
    id: 4,
    name: 'Avg. Click Rate',
    stat: '24.57%',
    icon: BankIcon,
    change: '3.2%',
    changeType: 'decrease',
  },
];

export default function StatsWidget() {
  return (
    <Container className="mt-5">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Последние 30 дней</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stats.map((item, e) => (
          <StatsWidgetCard stats={item} key={e} />
        ))}
      </dl>
    </Container>
  );
}
