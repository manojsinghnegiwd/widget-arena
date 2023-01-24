import { WidgetType, WidgetTypeConfig, InputType } from "../typings/widget";

export const WidgetTypes: WidgetTypeConfig[] = [
    {
        type: WidgetType.URL,
        name: "Url",
        additionalFields: [
            {
                name: "url",
                type: InputType.TEXT,
                label: "Url",
                placeholder: "https://www.google.com",
                required: true,
            },
        ]
    },
    {
        type: WidgetType.NOTE,
        name: "Note",
        additionalFields: [
            {
                name: "note",
                type: InputType.TEXTAREA,
                label: "Note",
                placeholder: "This is a note",
                required: true,
            },
        ]
    },
    {
        type: WidgetType.EVENT,
        name: "Event",
        additionalFields: [
            {
                name: "date",
                type: InputType.DATE,
                label: "Date",
                placeholder: "This is a date",
                required: true,
            },
        ]
    },
    {
        type: WidgetType.RESPONSE,
        name: "Response",
        additionalFields: [
            {
                name: "api",
                type: InputType.TEXT,
                label: "Api",
                placeholder: "https://www.google.com",
                required: true,
            },
            {
                name: "method",
                type: InputType.TEXT,
                label: "Method",
                placeholder: "GET",
                required: true,
            },
            {
                name: "headers",
                type: InputType.KEY_VALUE_PAIR,
                inputType: "text",
                label: "Headers",
                placeholder: "Content-Type: application/json",
                required: false,
            },
            {
                name: "body",
                type: InputType.TEXTAREA,
                label: "Body",
                placeholder: "This is the body",
                required: false,
            },
            {
                name: "params",
                type: InputType.KEY_VALUE_PAIR,
                inputType: "text",
                label: "Params",
                placeholder: "This is the params",
                required: false,
            },
        ]
    }
]