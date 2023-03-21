import React from "react";

import Button from "components/Button";
import CategoryList from "components/CategoryList";

import "./styles.scss";

export default function SummaryWrapper() {
    return (
        <div className="summary-wrapper">
            <h1 className="heading">Summary</h1>
            <CategoryList />
            <Button labelText="Continue" />
        </div>
    );
}
