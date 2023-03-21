import ResultsWrapper from "components/ResultsWrapper";
import SummaryWrapper from "components/SummaryWrapper";
import React from "react";
import "./styles.scss";

export default function ResultsSummaryContainer() {
    return (
        <div className="results-summary-container">
            <ResultsWrapper />
            <SummaryWrapper />
        </div>
    );
}
