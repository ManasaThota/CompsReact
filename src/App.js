import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
       id:"asdf",
       label: "Can I use React on a project?",
       content: "You can use React on any project you want"
    },
    {
        id:"jkhk",
        label: "Can I use Javascript on a project?",
        content: "You can use Javascript on any project you want"
     },
     {
        id:"xcbf",
        label: "Can I use CSS on a project?",
        content: "You can use CSS on any project you want"
     }

  ];
  return <Accordion items={items}/>
}

export default App