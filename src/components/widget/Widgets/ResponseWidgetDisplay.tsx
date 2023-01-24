// A component which display a response widget

import { FC } from "react";
import { ResponseWidget } from "../../../typings/widget";

// Interface for the ResponseWidgetDisplay component props
interface ResponseWidgetDisplayProps {
    widget: ResponseWidget;
}

const ResponseWidgetDisplay: FC<ResponseWidgetDisplayProps> = ({ widget }) => {
    return (
        <div>
            <h2>{widget.title}</h2>
            <p>{widget.description}</p>
            <p>{widget.api}</p>
        </div>
    )
};

export default ResponseWidgetDisplay;