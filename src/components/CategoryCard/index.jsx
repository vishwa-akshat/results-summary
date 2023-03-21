import React from "react";
import "./styles.scss";

const categoryCardColor = (id) => {
    switch (id) {
        case 1:
            return "red-card";
        case 2:
            return "yellow-card";
        case 3:
            return "green-card";
        case 4:
            return "blue-card";
        default:
            break;
    }
};

export default function CategoryCard({ list: { id, category, score, icon } }) {
    return (
        <div className={`category-card ${categoryCardColor(id)}`}>
            <img src={icon} alt="decoration" />
            <p className="category-text">{category}</p>
            <p className="scores">
                <span className="scores-bold">{score}</span> / 100
            </p>
        </div>
    );
}
