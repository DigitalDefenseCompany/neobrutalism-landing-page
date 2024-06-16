'use client';

import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MAIN_SIDEBAR } from '@/data/sidebar-links';
import Drawer from '@/components/ui/drawer';

export default function MobileDrawer() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const handleLinkClick = (path: string, external = false) => {
    console.log('Clicked on:', path);
    console.log('External:', external);
    setIsDrawerActive(false);
    if (external) {
      window.open(path, '_blank');
    } else {
      router.push(path);
    }
  };

  return (
    <>
      <div className="hidden w-[160px] m900:block m800:w-[108px] m500:w-[92px] m400:w-[unset]">
        <button
          onClick={() => setIsDrawerActive(true)}
          className="flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          <FaBars className="h-6 w-6 m500:h-4 m500:w-4" />
        </button>
      </div>

      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <div className="scrollbar h-full w-full overflow-y-auto bg-white">
          {MAIN_SIDEBAR.map((item, id) => {
            if (typeof item === 'string') {
              return (
                <div
                  key={id}
                  className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-heading m800:p-4 m800:text-base"
                >
                  {item}
                </div>
              );
            } else if (item.href) {
              return (
                <button
                  key={id}
                  onClick={() => handleLinkClick(item.href, item.external)}
                  className="sidebaritem block w-full border-b-4 border-r-4 border-black p-4 pl-7 text-left text-lg font-base text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
                >
                  {item.text}
                </button>
              );
            } else {
              console.error(`Item ${id} is missing 'href':`, item);
              return null;
            }
          })}
        </div>
      </Drawer>
    </>
  );
}
