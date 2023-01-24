export enum WidgetType {
    // A simple url widget which can save tags as well
    URL = 'url',
    // A widget which can have a note attached to it
    NOTE = 'note',
    // A widget which have a event and a date alongside it
    EVENT = 'event',
    // A widget which will have an api from where it will fetch the data
    RESPONSE = 'response',
}

// An enum for input types
export enum InputType {
    TEXT = "text",
    TEXTAREA = "textarea",
    DATE = "date",
    MULTIPLE_INPUT = "multiple-input",
    KEY_VALUE_PAIR = "key-value-pair",
}

// Interface for the widget
export interface Widget {
    // The id of the widget
    id?: string;
    // The type of the widget
    type: WidgetType;
    // The title of the widget
    title: string;
    // The description of the widget
    description?: string;
    // The tags of the widget
    tags?: string[];
    // The created date of the widget
    created?: Date;
    // The last modified date of the widget
    modified?: Date;
}

// Interface for the url widget
export interface URLWidget extends Widget {
    // The url of the widget
    url: string;
}

// Interface for the note widget
export interface NoteWidget extends Widget {
    // The note of the widget
    note: string;
}

// Interface for the event widget
export interface EventWidget extends Widget {
    // The date of the event
    date: Date;
}

// Interface for the Response widget config
export interface ResponseWidgetConfig {
    // The method of the api
    method: string;
    // The headers of the api
    headers: Object;
    // The body of the api
    body: Object;
    // The params of the api
    params: Object;
}

// Interface for the response widget
export interface ResponseWidget extends Widget {
    // The api of the widget
    api: string;
    // config for the api
    config: ResponseWidgetConfig;
}

// write an interface for the widget field
export interface WidgetField {
    // The name of the field
    name: string;
    // The type of the field
    type: InputType;
    // The input type of the field
    inputType?: string;
    // The label of the field
    label: string;
    // The placeholder of the field
    placeholder: string;
    // Whether the field is required or not
    required: boolean;
}

// Interface for the widget type config
export interface WidgetTypeConfig {
    // The type of the widget
    type: WidgetType;
    // The name of the widget
    name: string;
    // The additional fields of the widget
    additionalFields: WidgetField[];
}
