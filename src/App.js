import { EditForm, EditEntryType, ValidationType} from "./EditForm";
import { Toaster } from 'react-hot-toast'
import React from "react";

const editEntry1 = {
    attribute: "attribute-1",
    attributeName: "Test Attribute",
    validations: [ValidationType.PillList],
    type: EditEntryType.PillList,
    extraParam: {
        isInstagramShowcase: true
    }
}

const entityObj = {
    id: '123',
    name: 'Dion Kodhyat',
    email: "dionkodhyat@gmail.com",
}

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center"/>
      <EditForm
        title={"Form Builder"}
        description={""}
        editEntries={[editEntry1]}
        entityObj={entityObj}
        onSubmitSuccess={(entity)=>{
            console.log("submitted")
        }}
      />
    </div>
  );
}

export default App;
