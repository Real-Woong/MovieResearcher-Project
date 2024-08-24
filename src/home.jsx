import React from 'react';
import { isLoggedIn } from './utils/auth';
import LoggedInBanner from "./components/LIBanner";
import DefaultBanner from "./components/Banner";
import DisplaySearchInfo from "./DisplaySearchInfo";

function Home() {
    const loggedIn = isLoggedIn();

    return (
        <div>
            {loggedIn ? <LoggedInBanner /> : <DefaultBanner />}
            <DisplaySearchInfo />
        </div>
    );
}

export default Home;
