"use client";

import usePostModal from "@/app/hooks/usePostModal";
import Modal from "../Modal";
import ImageUpload from "../../inputs/ImageUpload";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
//import ProfileDropdownPostModal from "./ProfileDropdownPostModals";
import { useState } from "react";
import useCalendarEvent from "@/app/hooks/useCalendarEvent";
import DatePicker from "@/app/components/modals/postModal/DatePicker";

const PostModal = () => {
    const PostModal = usePostModal();
    const CalendarStore = useCalendarEvent();
    const [socialNetworkState, setSocialNetworkState] = useState<String>("Profile");
    const handleSocialNetworkChange = (state: String) => {
        setSocialNetworkState(state);
    }
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            caption: '',
            imageSrc: '',
            location: '',
            date: '',
            time: '',
            tags: '',
            socialNetwork: '',
        }
    });
    const caption = watch('caption');
    const imageSrc = watch('imageSrc');
    const location = watch('location');
    const date = watch('date');
    const time = watch('time');
    const tags = watch('tags');
    const socialNetwork = watch('socialNetworkState');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(PostModal.caption);
        PostModal.onClose();
        console.log(PostModal.caption);
    };

    let headerContent = (
        <div className="flex flex-row justify-between items-center my-5 mx-5">
            <div>
                {/*<ProfileDropdownPostModal 
                    socialNetworks={["Facebook", "Instagram", "LinkedIn"]} 
                    stateSocialNetwork={socialNetworkState} 
                    setSocialNetwork={handleSocialNetworkChange} 
    />*/}
            </div>
            <div>
                <DatePicker date={PostModal.date} setDate={PostModal.setDate}/>
            </div>
        </div>
    );

    let bodyContent = (
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-row justify-around gap-4 pb-10">
            <div className="flex flex-row">
                <ImageUpload 
                    value={imageSrc}
                    onChange={(value) => setCustomValue('imageSrc', value)}
                />
            </div>
            <div className="flex flex-col gap-4">
                <Textarea
                    placeholder="Caption"
                    className="max-w-lg w-72"
                    defaultValue={PostModal.title}
                    {...register('caption', { required: false })}
                />
                <Input
                    type="text"
                    placeholder="First Comment"
                    defaultValue={""}
                    /*startContent={
                        <BiMessageSquare className="text-md text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    {...register('firstComment', { required: false })}
                />
                <Input
                    type="text"
                    placeholder="Location"
                    defaultValue={""}
                    /*startContent={
                        <TfiLocationPin className="text-md text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    {...register('location', { required: false })}
                />
            </div>
        </form>
    );

    let footerContent = (
        <Button
            onClick={()=>{
                if(window.confirm(`Are you sure you want to delete the event '${PostModal.caption}'`) === true){
                    CalendarStore.removeEvent(PostModal.id)
                    PostModal.onClose();
                }
            }}
            /*startContent={<BiTrash size={25} className="text-default-400 pointer-events-none flex-shrink-0" />}*/>
            Delete Post
        </Button>
    );
    
    return ( 
        <Modal
            isOpen={PostModal.isOpen}
            onClose={PostModal.onClose}
            header={headerContent}
            body={bodyContent}
            primaryButtonLabel="Schedule"
            secondaryButtonLabel="Cancel"
            primaryButtonAction={handleSubmit(onSubmit)}
            secondaryButtonAction={()=>CalendarStore.removeEvent('1')}
            size="3xl"
            footer={footerContent}
        />
    );
}
 
export default PostModal;