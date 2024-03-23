"use client";

import { useCallback, useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"  
import { Button } from "@/components/ui/button"

interface ModalProps {
    header?: React.ReactElement;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    isOpen?: boolean;
    primaryButtonLabel?: string;
    secondaryButtonLabel?: string;
    primaryButtonAction?: () => void;
    secondaryButtonAction?: () => void;
    onClose?: () => void;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const ModalComponent: React.FC<ModalProps> = ({
    header,
    body,
    footer,
    isOpen,
    primaryButtonLabel,
    secondaryButtonLabel,
    primaryButtonAction,
    secondaryButtonAction,
    onClose,
    size 
}) => {
    
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    },[isOpen]);

    const handleClose = useCallback(() => {
        setShowModal(false);
        onClose && onClose();
    },[onClose]);
    return (
    <>
        {showModal ? (
            <Dialog
                open={showModal}
                onOpenChange={handleClose}
            >
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <h1>{header}</h1>
                    </DialogHeader>
                        {body}
                    <DialogFooter className="!justify-between">
                        <div>
                            {footer}
                        </div>
                        <div className="justify-between grid grid-cols-2 gap-3">
                            <Button color="danger" variant="secondary" onClick={onClose}>
                                {secondaryButtonLabel}
                            </Button>
                            <Button color="primary" onClick={primaryButtonAction }>
                                {primaryButtonLabel}
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        ): ""}     
    </>
    );
}
 
export default ModalComponent;