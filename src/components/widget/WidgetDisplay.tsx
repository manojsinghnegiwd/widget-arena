// A component which display a widget according to its type

import { FC } from "react";
import { NoteWidget, WidgetType, EventWidget, ResponseWidget, URLWidget  } from "../../typings/widget";
import EventWidgetDisplay from "./Widgets/EventWidgetDisplay";
import NoteWidgetDisplay from "./Widgets/NoteWidgetDisplay";
import ResponseWidgetDisplay from "./Widgets/ResponseWidgetDisplay";
import URLWidgetDisplay from "./Widgets/URLWidgetDisplay";

// Interface for the WidgetDisplay component props
interface WidgetDisplayProps {
    widget: NoteWidget | EventWidget | ResponseWidget | URLWidget
}

const WidgetDisplay: FC<WidgetDisplayProps> = ({ widget }) => {
    switch (widget.type) {
        case WidgetType.URL:
            return <URLWidgetDisplay widget={widget as URLWidget} />
        case WidgetType.NOTE:
            return <NoteWidgetDisplay widget={widget as NoteWidget} />
        case WidgetType.EVENT:
            return <EventWidgetDisplay widget={widget as EventWidget} />
        case WidgetType.RESPONSE:
            return <ResponseWidgetDisplay widget={widget as ResponseWidget} />
        default:
            return null;
    }
};

export default WidgetDisplay;
