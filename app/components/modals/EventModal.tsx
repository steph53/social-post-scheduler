"use client";

import useEventModal from "@/app/hooks/useEventModal";
import Modal from "./Modal";

const EventModal = () => {
    const EventModal = useEventModal();

    return (
        <Modal
            isOpen={EventModal.isOpen}
            onClose={EventModal.onClose}
        />
    );
}
 
export default EventModal;