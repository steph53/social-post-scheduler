"use client";

interface ModalProps {
    header?: string;
    body?: string;
    footer?: string;
}

const Modal = () => {
    return (
        <div className="relative flex flex-col h-screen">
            <div className=" w-screen h-screen flex z-50 absolute top-0 right-0 bg-black opacity-40">
            </div> 
            <div
                className=" lg:h-[700px]
                            opacity-100 
                            lg:w-8/12
                            bg-white
                            self-center
                            flex
                            flex-col
                            z-[60]
                            rounded-lg
                            lg:m-auto
                            "
            >
                <div className="flex flex-col h-full">
                    <div className="flex flex-row justify-between">
                        
                    </div>
                </div>
            </div>
        </div>     
    );
}
 
export default Modal;