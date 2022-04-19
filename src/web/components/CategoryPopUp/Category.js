import "./Category.css";
import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";

const options = [
  {
    label: "dogs",
    value: "dogs",
  },
  {
    label: "cats",
    value: "cats",
  },
  {
    label: "flower",
    value: "flower",
  },
  {
    label: "sport",
    value: "sport",
  },
];

function PopUpCategory(props) {
  const [categoryToSearch, setCategoryToSearch] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const { isPopUpCategoryOpen } = useSelector((state) => state);
  console.log(isPopUpCategoryOpen);
  // A hook for updating this form's values with the current's search values

  React.useEffect(() => {
    setCategoryToSearch(props.currentCategory);
    setSortBy(props.currentSortBy);
  }, [props.currentCategory, props.currentSortBy]);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleCategorySubmit(categoryToSearch, sortBy);
  }

  function handleCategoryChange(e) {
    setCategoryToSearch(e.target.value);
  }

  function handleRadioBtnChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <>
      <Modal
        onClose={props.onClose}
        isOpen={isPopUpCategoryOpen}
        ariaHideApp={false}
      >
        <form className="modalForm" onSubmit={handleSubmit}>
          <div className="container">
            <div className="selectContainer">
              <label className="selectionText">Select a category:</label>
              <select
                onChange={handleCategoryChange}
                value={categoryToSearch}
                className="selectionText"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="selectionText">
              <input
                type="radio"
                value="popular"
                checked={sortBy === "popular"}
                onChange={handleRadioBtnChange}
              />
              <label className="radioTitle">Popular</label>
              <input
                type="radio"
                value="latest"
                checked={sortBy === "latest"}
                onChange={handleRadioBtnChange}
              />
              <label className="radioTitle">Latest</label>
            </div>
          </div>
          <button className="modalSubmit">Search category</button>
        </form>
      </Modal>
    </>
  );
}

export default PopUpCategory;
