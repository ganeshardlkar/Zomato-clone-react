import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'

import Delivery from '../../components/delivery'
import NightLife from '../../components/nightLife'
import DiningOut from '../../components/diningOut'

function HomePage() {

    const [activeTab, setActiveTab] = useState("Delivery");

    function getCorrectScreen(tab) {
        switch(tab) {
            case "Delivery":
                return <Delivery />
            case "Dining Out":
                return <DiningOut />
            case "Night Life":
                return <NightLife />
            default:
                return <Delivery />
        }
    }

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
}

export default HomePage