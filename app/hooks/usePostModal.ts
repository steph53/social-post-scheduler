import {create } from "zustand"
import {CalendarEvent, CalendarType} from '@/app/types';
import PostModal from "@/app/components/modals/postModal/PostModal";
interface PostModalStore {
    isOpen: boolean;
    onOpen: (clickInfo?: CalendarEvent) => void;
    onClose: () => void;
    date: Date | undefined
    setDate: (date: Date) => void;
    caption: string;
    id: string;
    imageURL: string;
    title: string;
}

const usePostModal = create<PostModalStore>((set,get) => ({
    isOpen: false,
    date: undefined,
    setDate: (date: Date) => {
        set({date})
        return;
    },
    caption: '',
    title: '',
    id: '',
    imageURL: '',
    onOpen: (event?: CalendarEvent) => {
        set({isOpen: true})
        if ( typeof event !== 'undefined'){
            set({
                date: event._instance?.range?.start,
                caption: event._def?.title,
                id: event._def?.publicId,
                imageURL: event.imageURL
            });
        }
        return;
    },
    onClose: () => {
            set({
                date: undefined,
                caption: '',
                id: '',
                imageURL: '',
                isOpen: false
            })
            console.log(get())
        return;

    },
}));
 
export default usePostModal;