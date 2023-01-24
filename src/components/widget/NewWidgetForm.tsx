import { FC, useState } from "react";
import { WidgetTypes } from "../../constants/widget";
import { EventWidget, NoteWidget, ResponseWidget, URLWidget, WidgetType, WidgetTypeConfig } from "../../typings/widget";
import FieldRenderer from "./FieldRenderer";

// Interface for the NewWidgetForm component props
interface NewWidgetFormProps {
  onAdd: (widget: any) => void;
}

// A componenent which renders a form to add a new widget
const NewWidgetForm: FC<NewWidgetFormProps> = ({ onAdd }) => {
  const [widgetType, setWidgetType] = useState<WidgetType>(WidgetTypes[0].type);
  const [widgetTitle, setWidgetTitle] = useState<string>('');
  const [widgetDescription, setWidgetDescription] = useState<string>('');
  const [widgetFields, setWidgetFields] = useState<any>({});

  const handleWidgetTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidgetTitle(e.target.value);
  };

  const handleWidgetDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidgetDescription(e.target.value);
  }

  const handleWidgetTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWidgetType(e.target.value as WidgetType);
    // Reset the fields
    setWidgetFields({});
  }

  const handleWidgetFieldChange = (value: any, field: string) => {
    setWidgetFields({ ...widgetFields, [field]: value });
  };

  const handleAddWidget = () => {
    switch (widgetType) {
      case WidgetType.URL:
        const URLWidgetData: URLWidget = {
          title: widgetTitle,
          description: widgetDescription,
          type: widgetType,
          url: widgetFields.url
        }
        onAdd(URLWidgetData);
        break;
      case WidgetType.NOTE:
        const NoteWidgetDara: NoteWidget = {
          title: widgetTitle,
          description: widgetDescription,
          type: widgetType,
          note: widgetFields.note
        };
        onAdd(NoteWidgetDara);
        break;
      case WidgetType.EVENT:
        const EventWidgetData: EventWidget = {
          title: widgetTitle,
          description: widgetDescription,
          type: widgetType,
          date: widgetFields.date
        }
        onAdd(EventWidgetData);
        break;
      case WidgetType.RESPONSE:
        const ResponseWidgetData: ResponseWidget = {
          title: widgetTitle,
          description: widgetDescription,
          type: widgetType,
          api: widgetFields.api,
          config: {
            method: widgetFields.method,
            headers: widgetFields.headers,
            body: widgetFields.body,
            params: widgetFields.params
          }
        }
        onAdd(ResponseWidgetData);
        break;
      default:
        break;
    }
  }

  const selectedWidgetType = WidgetTypes.find((widget: WidgetTypeConfig) => widget.type === widgetType);
  const fields = selectedWidgetType?.additionalFields;

  return (
    <div>
      <div>
        <input type="text" value={widgetTitle} placeholder="Widget name" onChange={handleWidgetTitleChange} />
        <input type="text" value={widgetDescription} placeholder="Widget description" onChange={handleWidgetDescriptionChange} />
        <select onChange={handleWidgetTypeChange}>
          {
            WidgetTypes.map((widget: WidgetTypeConfig) => {
              return <option key={widget.type} value={widget.type}>{widget.name}</option>
            })
          }
        </select>
        {
          fields?.map((field) => {
            return (
              <div key={field.name}>
                <label>{field.name}</label>
                <FieldRenderer
                  field={field}
                  value={widgetFields[field.name]}
                  onChange={(value: any) => handleWidgetFieldChange(value, field.name)}
                />
              </div>
            )
          })
        }
        <button onClick={handleAddWidget}>Add widget</button>
      </div>
    </div>
  )
}

export default NewWidgetForm;
