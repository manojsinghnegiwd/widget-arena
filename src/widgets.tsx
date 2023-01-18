import NewWidget from "./components/widget/NewWidgetForm"

const Widgets = () => {
    return (
        <div>
            <h1>Widgets</h1>
            <NewWidget onAdd={widget => console.log(widget)} />
        </div>
    )
}

export default Widgets
