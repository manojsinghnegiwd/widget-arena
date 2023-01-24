import WidgetDisplay from "./components/widget/WidgetDisplay";
import { EventWidget, NoteWidget, ResponseWidget, URLWidget, WidgetType } from "./typings/widget";
import Widgets from "./widgets";

type GenericWidget = NoteWidget | URLWidget | EventWidget | ResponseWidget;

const widgetData: GenericWidget[] = [
  {
    type: WidgetType.NOTE,
    title: "Note",
    description: "This is a note",
    note: "This is a note",
  },
  {
    type: WidgetType.URL,
    title: "URL",
    description: "This is a url",
    url: "https://www.google.com",
  },
  {
    type: WidgetType.EVENT,
    title: "Event",
    description: "This is an event",
    date: new Date(),
  },
  {
    type: WidgetType.RESPONSE,
    title: "Response",
    description: "This is a response",
    api: "https://www.google.com",
    config: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
      params: {}
    },
  },
]

function App() {
  return (
    <div className="App">
      <Widgets />
      {
        widgetData.map((widget, index) => {
          return (
            <WidgetDisplay key={index} widget={widget} />
          );
        })
      }
    </div>
  )
}

export default App
