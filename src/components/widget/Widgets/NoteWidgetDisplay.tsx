// A component which display a note widget

import { FC } from "react";
import { NoteWidget } from "../../../typings/widget";

// Interface for the NoteWidgetDisplay component props
interface NoteWidgetDisplayProps {
    widget: NoteWidget;
}

const NoteWidgetDisplay: FC<NoteWidgetDisplayProps> = ({ widget }) => {
    return (
        <div>
            <h2>{widget.title}</h2>
            <p>{widget.description}</p>
            <p>{widget.note}</p>
        </div>
    )
};

export default NoteWidgetDisplay;
