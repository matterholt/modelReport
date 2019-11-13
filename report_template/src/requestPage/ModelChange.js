import React, { useState, useEffect } from "react";
import TitleForm from "../component/TitleForm";

const NumberOfInputs = ({
  newItem,
  newItemID,
  deleteListItem,
  updateListItem
}) => {
  const [localValue, setLocalValue] = useState();
  const [updateModal, swithcUpdateModal] = useState(false);

  useEffect(() => {
    setLocalValue(newItem);
  }, []);
  function handleUpdate(e) {
    setLocalValue(e.target.value);
    updateListItem(newItemID, localValue);
  }

  if (updateModal === true) {
    return (
      <li key={newItemID}>
        <input
          className="shadow m-2 p-2 bg-white"
          value={localValue}
          onChange={handleUpdate}
        />
        <button
          className="p-2 bg-blue-100 shadow hover:bg-blue-300 rounded"
          onClick={() => swithcUpdateModal(false)}
        >
          UPDATE
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <div className="rounded items-center shadow m-2 p-2 bg-gray-100 flex justify-between">
          {localValue}
          <div>
            <button
              className="p-2 bg-blue-100 shadow hover:bg-blue-300 rounded"
              onClick={() => swithcUpdateModal(true)}
            >
              UPDATE{" "}
            </button>
            <button
              className="p-2 bg-red-300 text-white shadow hover:bg-red-100 hover:text-black rounded"
              onClick={() => deleteListItem(newItemID)}
            >
              {" "}
              REMOVE
            </button>
          </div>
        </div>
      </li>
    );
  }
};

const AddAnotherInput = ({ inputForChange, addInputForChange }) => {
  const [changeItem, setChangeItem] = useState("");

  function updateItem(idlist, updateItem) {
    let updateList = inputForChange.map((change, id) => {
      if (id === idlist) {
        return updateItem;
      } else {
        return change;
      }
    });
    addInputForChange(updateList);
    console.log("add a pop up to let user know that has been updated??");
  }
  function removeIt(idlist) {
    let updateList = inputForChange.filter((elm, index) => {
      return index !== idlist;
    });
    addInputForChange(updateList);
  }
  function addItemChange() {
    if (changeItem !== "") {
      addInputForChange([...inputForChange, changeItem]);
      setChangeItem("");
    }
  }
  function keyPressed(e) {
    if (e.key === "Enter") {
      addItemChange(e.target.value);
    }
  }

  return (
    <div>
      <ul>
        {inputForChange.map((itemUpdate, itemID) => {
          return (
            <NumberOfInputs
              newItem={itemUpdate}
              newItemID={itemID}
              deleteListItem={removeIt}
              updateListItem={updateItem}
            />
          );
        })}
      </ul>
      <label
        htmlFor="modelChanges"
        className="flex flex-col mx-2 mt-2 w-3/4 text-md text-blue-800 font-semibold"
      >
        Add changes made to model
      </label>
      <input
        value={changeItem}
        onChange={e => setChangeItem(e.target.value)}
        onKeyPress={keyPressed}
        name="modelChanges"
        className="shadow m-2 p-2 bg-white"
      />
      <button
        onClick={addItemChange}
        className="shadow border border-solid  rounded bg-white border-blue p-2 hover:bg-blue-100"
      >
        ADD
      </button>
    </div>
  );
};

export default function ChangeAdditions({ inputForChange, addInputForChange }) {
  return (
    <fieldset className="flex flex-col">
      <AddAnotherInput
        inputForChange={inputForChange}
        addInputForChange={addInputForChange}
      />
    </fieldset>
  );
}
