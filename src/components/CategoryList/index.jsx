import React from "react";

import CategoryCard from "components/CategoryCard";

import LIST from "components/data/data.json";

import "./styles.scss";

export default function CategoryList() {
    return (
        <div className="list-wrapper">
            {LIST.map((list) => {
                return <CategoryCard key={list.id} list={list} />;
            })}
        </div>
    );
}
