import { Link, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../organisms/Sidebar';
import Topbar from '../organisms/Topbar';
import BgAdminDashboard from '../atoms/BgAdminDashboard';
import {
  ANALISIS_ACTIVE_ICON,
  ANALISIS_ICON,
  DASHBOARD_ACTIVE_ICON,
  DASHBOARD_ICON,
  LOGOUT_ACTIVE_ICON,
  LOGOUT_ICON,
  MENU_ACTIVE_ICON,
  MENU_ICON,
  PESANAN_ACTIVE_ICON,
  PESANAN_ICON,
  RATING_ACTIVE_ICON,
  RATING_ICON,
} from '../../assets';
import { useEffect, useState } from 'react';
import { useViewportSize } from '@mantine/hooks';
import { TbDeviceMobileOff } from 'react-icons/tb';

export default function AppShell() {
  const pathname = useLocation().pathname;
  const [title, setTitle] = useState('');
  const viewportSize = useViewportSize();
  const isDesktop = viewportSize.width > 1100 && viewportSize.height > 790;

  useEffect(() => {
    const queryTitle = dataLinks.find((item) => item.link === pathname)?.title;
    setTitle(queryTitle);
    document.title = 'Alta-Resto | ' + queryTitle;
  }, [pathname]);

  return isDesktop ? (
    <div className="font-poppins flex">
      <BgAdminDashboard />
      <Sidebar dataLinks={dataLinks} />
      <div className="w-full flex-1">
        <Topbar title={title} />
        <div className="relative z-10 p-5 py-7">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-secondary w-screen h-screen grid place-items-center p-5">
      <div className="max-w-[400px] text-center flex flex-col items-center gap-5 bg-white rounded-lg p-10 shadow-lg">
        <TbDeviceMobileOff size={60} className="text-gray-400" />
        <p className="text-gray-400">
          Mohon maaf halaman ini tidak mendukung untuk layar handphone. Silahkan
          beralih ke mode desktop. (min. 1100 x 790)
        </p>
        <Link
          to="/"
          className="px-5 py-3 rounded-md bg-primary text-white shadow-md cursor-pointer hover:shadow-none transition-all duration-300 mt-5">
          Home
        </Link>
      </div>
    </div>
  );
}

const dataLinks = [
  {
    title: 'Dashboard',
    link: '/admin',
    icon: {
      active: DASHBOARD_ACTIVE_ICON,
      default: DASHBOARD_ICON,
    },
  },
  {
    title: 'Analisis',
    link: '/admin/analisis',
    icon: {
      active: ANALISIS_ACTIVE_ICON,
      default: ANALISIS_ICON,
    },
  },
  {
    title: 'Pesanan',
    link: '/admin/pesanan',
    icon: {
      active: PESANAN_ACTIVE_ICON,
      default: PESANAN_ICON,
    },
  },
  {
    title: 'Menu',
    link: '/admin/menu',
    icon: {
      active: MENU_ACTIVE_ICON,
      default: MENU_ICON,
    },
  },
  {
    title: 'Review & Rating',
    link: '/admin/rating',
    icon: {
      active: RATING_ACTIVE_ICON,
      default: RATING_ICON,
    },
  },
  {
    title: 'Logout',
    link: '/login',
    icon: {
      active: LOGOUT_ACTIVE_ICON,
      default: LOGOUT_ICON,
    },
  },
];
