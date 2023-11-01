import React from 'react';
import Header from "../../components/Header/index";
import ProgressBar from "../../components/ProgressBar/index";
import Subtopic from "../../components/Subtopic/index";
import TopicTranscript from "../../components/TopicTranscript/index";
import TopicNavigation from "../../components/TopicNavigation/index";
import Footer from "../../components/Footer/index";
import './TopicPage.css'

const TopicPage = () => {
    const topicTranscriptText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut postea variari voluptas distinguique.Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam. Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita grata recordatione renovata delectant. Est autem situm in nobis ut et voluptates et dolores nasci fatemur e corporis voluptatibus et doloribus -- itaque concedo, quod modo dicebas, cadere causa, si qui incurrunt, numquam vim tantam."
    return (
        <div className="w-screen h-screen bg-primary-600">
            <div className="mb-4">
                <Header text={"Topic"}/>
            </div>
            <div className="p-4 md:p-8 lg:p-16"> {/* Adjust padding based on screen size */}
                <div className="mb-6">
                    <ProgressBar color={"bg-success"} completed={86}/>
                    <Subtopic subtopicName="Subtopic 1" variant="pending"/>
                    {/*<div className="fakeVideo"></div>*/}
                </div>

                <div className="mb-6">
                    <TopicTranscript text={topicTranscriptText}></TopicTranscript>
                </div>
                <div className="mt-8 md:mt-12 lg:mt-16">
                    <TopicNavigation leftButtonText="left" rightButtonText="right" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TopicPage;