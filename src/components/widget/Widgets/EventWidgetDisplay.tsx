// A component which display a event widget

import { FC } from "react";
import { EventWidget } from "../../../typings/widget";

// Interface for the EventWidgetDisplay component props
interface EventWidgetDisplayProps {
    widget: EventWidget;
}

const EventWidgetDisplay: FC<EventWidgetDisplayProps> = ({ widget }) => {
    return (
        <div>
            <h2>{widget.title}</h2>
            <p>{widget.description}</p>
            <p>{widget.date.toString()}</p>
        </div>
    )
}

export default EventWidgetDisplay;
