"use client";

import AccountsContainer from "./components/AccountsContainer";
import Calendar from "./components/inputs/Calendar";
import MediaSection from "./components/MediaSection";



export default function Home() {
    
    return (
        <div className="flex flex-row grow min-h-screen">
            <MediaSection />
            <div className="flex flex-col grow gap-10">
                <div>
                    <AccountsContainer/>
                    <hr />
                </div>
                <Calendar/>
            </div>
        </div>
    );
}


