import React from "react";
import "./styles.scss";

export default function Button({ labelText }) {
    return <button className="btn">{labelText}</button>;
}
