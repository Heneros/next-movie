import Description from "@/components/feedback/Description";
import FormFeedback from "@/components/feedback/FormFeedback";
import React from "react";

export default function FeedbackPage() {
    return (
        <div className=" mx-auto    rounded-lg shadow-md ">
            <div className="flex justify-between  flex-row">
                <Description />
                <FormFeedback />
            </div>
        </div>
    );
}
