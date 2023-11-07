import { Link } from 'react-router-dom';
import { LOGO_ALTARESTO } from '../../assets';
import NavLink from '../molecules/NavLink';

export default function Sidebar({ dataLinks }) {
  return (
    <div className="bg-secondary max-w-[346px] h-screen flex flex-col flex-1 sticky top-0 z-30">
      <Link to="/admin" className="flex justify-center items-center p-5 pt-9">
        <img src={LOGO_ALTARESTO} alt="Logo Alta-Resto" className="w-[250px]" />
      </Link>
      <div className="ml-8 flex flex-col justify-between py-8 h-full">
        <div className="flex flex-col gap-4">
          {dataLinks
            .filter((item) => item.title !== 'Logout')
            .map((item, index) => (
              <NavLink key={index} dataLink={item} />
            ))}
        </div>
        {dataLinks
          .filter((item) => item.title === 'Logout')
          .map((item, index) => (
            <NavLink key={index} dataLink={item} />
          ))}
      </div>
    </div>
  );
}
