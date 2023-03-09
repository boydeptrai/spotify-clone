import {HomeIcon,HeartIcon,BuildingLibraryIcon,PlusCircleIcon,RssIcon,MagnifyingGlassCircleIcon} from '@heroicons/react/24/outline'
import IconButton from './IconButton';
const Sidebar = () => {

  const Divider = () => <hr className='border-t-[0.1] border-gray-900' />
  return (
    <div className="text-gray-500 px-5 pt-5 pb-36 text-xs border-gray-900 h-screen overflow-y-scroll scrollbar-hidden sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block ">
      <div className="space-y-4">
       <IconButton icon={HomeIcon} label='Home'/>
       <IconButton icon={MagnifyingGlassCircleIcon} label='Search'/>
       <IconButton icon={BuildingLibraryIcon} label='Your Library'/>

       <Divider />

       <IconButton icon={PlusCircleIcon} label='Create Playlist'/>
       <IconButton icon={HeartIcon} label='Liked Songs'/>
       <IconButton icon={RssIcon} label='Your episodes'/>

       <Divider />

       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       <p className="cursor-pointer hover:text-white ">
        PLAYLIST
       </p>
       
      </div>
    </div>
  );
};

export default Sidebar;
