// A component which display a url widget

import { FC } from "react";
import { URLWidget } from "../../../typings/widget";

// Interface for the URLWidgetDisplay component props
interface URLWidgetDisplayProps {
    widget: URLWidget;
}

const URLWidgetDisplay: FC<URLWidgetDisplayProps> = ({ widget }) => {
    return (
        <div>
            <h2>{widget.title}</h2>
            <p>{widget.description}</p>
            <p>{widget.url}</p>
        </div>
    )
};

export default URLWidgetDisplay;