import React from "react";

import Result from "components/Result";

import "./styles.scss";

export default function ResultsWrapper() {
    return (
        <div className="results-wrapper">
            <h1 className="heading">Your Result</h1>
            <Result />
            <div className="analysis-wrapper">
                <p className="analysis">Great</p>
                <p className="description">
                    You scored higher than 65% of the people who have taken
                    these tests
                </p>
            </div>
        </div>
    );
}
