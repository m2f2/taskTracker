import { MdOutlineSearch } from "react-icons/md"; // Importing the search icon from react-icons
import { useDispatch, useSelector } from "react-redux"; // Importing hooks for interacting with Redux store
import { setOpenSidebar } from "../redux/slices/authSlice"; // Importing an action to toggle sidebar state
import NotificationPanel from "./NotificationPanel"; // Importing the NotificationPanel component
import UserAvatar from "./UserAvatar"; // Importing the UserAvatar component
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
            const { user } = useSelector((state) => state.auth); // Accessing the user state from the Redux store
            const dispatch = useDispatch(); // Getting the dispatch function to dispatch actions

            return (
                        <div className=' flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0'>
                                    {/* Container for the navbar, using flexbox for layout and sticky positioning */}
                                    <div className='flex gap-4'>
                                                {/* Container for the sidebar toggle button and search input */}
                                                <button
                                                            onClick={() => dispatch(setOpenSidebar(true))} // Dispatching the action to open the sidebar
                                                            className='text-2xl text-gray-500 block md:hidden'
                                                >
                                                            <FiAlignJustify />
                                                </button>

                                                <div className='w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
                                                            {/* Search bar container with input and search icon */}
                                                            <MdOutlineSearch className='text-gray-500 text-xl' />
                                                            <input
                                                                        type='text'
                                                                        placeholder='Search....'
                                                                        className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
                                                            />
                                                </div>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                                {/* Container for the notification panel and user avatar */}
                                                <NotificationPanel />
                                                <UserAvatar />
                                    </div>
                        </div>
            );
};

export default Navbar;