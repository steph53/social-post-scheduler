"use client";
import {AiOutlineDropbox} from 'react-icons/ai';
import {DiGoogleDrive} from 'react-icons/di';
import {LuImagePlus, LuSettings2} from 'react-icons/lu';
import {TbGridDots} from 'react-icons/tb';
import {AiOutlineStar} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Draggable } from '@fullcalendar/interaction';
import usePostModal from '../hooks/usePostModal';


const MediaSection = () => {
    const [hovered, setHovered] = useState("Upload Media");
    const PostModal = usePostModal();
    // load external events
    useEffect(() => {
        let draggableEl:any = document.getElementById("external-events");
        const draggable = new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let id = eventEl.dataset.id;
                let title = eventEl.getAttribute("title");
                let color = eventEl.dataset.color;

                return {
                id: id,
                title: title,
                color: color,
                create: false
                };
            }
        });
        return () => {
            draggable.destroy();
        }
    },[]);
    
    const handleOpen = () => {
        PostModal.onOpen();
    }
    return ( 
        <div  className='
        w-[320px]
        h-screen
        flex
        flex-col
        border-r
        border-neutral-200
        px-2
        '>
            <div className="flex flex-row gap-4 items-center justify-center text-[#1bc3fe] py-6 h-[72px]">
                <div className='flex flex-row gap-3'>
                    <div
                        onMouseEnter={() => setHovered("Dropbox")}
                        onMouseLeave={() => setHovered("Upload Media")}
                        className='cursor-pointer'
                    >
                        <AiOutlineDropbox size={30}/>
                    </div>
                    <div
                        onMouseEnter={() => setHovered("Google Drive")}
                        onMouseLeave={() => setHovered("Upload Media")}
                        className='cursor-pointer'
                    >
                        <DiGoogleDrive size={30}/>
                    </div>
                </div>
                <div className="transition-all duration-1000 w-[150px]">{hovered}</div>
            </div>
            <hr />
            <div
                id='external-events'
            >
                <div 
                    className='
                        fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event 
                        h-[50px] 
                        bg-[#1bc3fe]
                        flex
                        flex-row
                        justify-center 
                        my-2
                        cursor-grab
                        rounded-large'
                    data-id= "2"
                    title="New Post"
                    data-color='#1bc3fe'
                    data-start="2020-12-31"
                    data-end="2020-12-31"
                    onClick={handleOpen}
                        >
                    <div
                        className='
                            w-full
                            flex
                            flex-row
                            fc-event-main
                        '
                    >
                    <div
                        className='flex flex-row  text-white items-center px-4 w-full  gap-3'
                    >
                        <LuImagePlus size={25} />
                        <div className='flex flex-row grow justify-between basis-4/5'>
                            <span className='font-semibold'>Create Post</span>
                            <TbGridDots size={25} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <hr/>
            <div
                className='flex flex-row items-center px-4 w-full gap-3 h-[50px]'
            >
                <AiOutlineStar size={20} />
                <div className='flex flex-row grow justify-end basis-4/5 gap-4 text-sm'>
                    Show filters
                    <LuSettings2 size={20} />
                </div>
            </div>
            <hr/>
        </div>
    );
}
 
export default MediaSection;