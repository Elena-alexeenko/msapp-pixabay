import React from "react";
import "./App.css";
//import Header from "../Header/Header";
import ImagesCardList from "../ImagesCard/ImagesCard";
import Category from "../CategoryPopUp/Category";
import { PopUpInfo } from "../InfoPopUp/InfoPopUp";
import imagesApi from "../../utils/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import changeImagesToRender from "../../actions/changeImageToRender";
import changeStatusOfPopUpCategory from "../../actions/changeStatusOfPopUpCategory";
import changeStatusOfPopUpInfo from "../../actions/changeStatusOfPopUpInfo";
import changeDisplayedImage from "../../actions/changeDisplayedImage";

function App() {
  const [category, setCategory] = React.useState("cats");
  const [sortBy, setSortBy] = React.useState("popular");
  const [pageNum, setPageNum] = React.useState(1);
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = React.useState(true);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = React.useState(false);
  const [maxPage, setMaxPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const { isPopUpCategoryOpen } = useSelector((state) => state);
  const { isPopUpInfoOpen } = useSelector((state) => state);
  const { currentImage } = useSelector((state) => state);
  const dispatch = useDispatch();

  // The hook for getting image from api the images, the first call is with the initial values
  // changing the values of the states that mentioned above trigger this hook to fetch a new search.
  React.useEffect(() => {
    const perPage = 9;
    setLoading(true);
    imagesApi
      .getCategory(category, pageNum, perPage, sortBy)
      .then((res) => {
        dispatch(changeImagesToRender(res.data.hits));
        setMaxPage(res.maxPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [dispatch, category, pageNum, sortBy]);

  // Controls the next/prev buttons states.
  // These states toggle the styles and the disable attribute (disable while loading info)
  // of the button.
  // The states are compared to the maxPage variable that is received from my Rest API

  React.useEffect(() => {
    const nextBtnState = pageNum >= maxPage;
    setIsNextBtnDisabled(nextBtnState);
  }, [maxPage, pageNum]);

  React.useEffect(() => {
    const nextBtnState = pageNum <= 1;
    setIsPrevBtnDisabled(nextBtnState);
  }, [pageNum]);

  function handlePrevCLick() {
    setPageNum(pageNum - 1);
  }

  function handleNextCLick() {
    setPageNum(pageNum + 1);
  }

  // The handler for submitting the search form.
  // This function receives new values for the page num state that trigger the
  // hook that responsible for fetching the images, resets page number state
  function handleCategorySubmit(newCategory, selectedSortedBy) {
    setCategory(newCategory);
    setSortBy(selectedSortedBy);
    closeAllPopups();
    setPageNum(1);
  }

  // Open change category
  function handleCategoryClick() {
    dispatch(changeStatusOfPopUpCategory(true));
  }

  // Opening the image info popup
  function handleImageClick(currentImage) {
    dispatch(changeDisplayedImage(currentImage));
    dispatch(changeStatusOfPopUpInfo(true));
  }

  // Closing all popups

  function closeAllPopups() {
    dispatch(changeStatusOfPopUpCategory(false));
    dispatch(changeStatusOfPopUpInfo(false));
  }

  // Closing Info popup
  function closeInfoPopUp() {
    dispatch(changeStatusOfPopUpInfo(false));
  }

  return (
    <main className="main-container">
      {isPopUpCategoryOpen && isPopUpCategoryOpen.length !== 0 && (
        <Category
          currentCategory={category}
          currentSortBy={sortBy}
          handleCategorySubmit={handleCategorySubmit}
          initialCategory={category}
          onClose={closeAllPopups}
        />
      )}
      {currentImage.id !== null &&
        currentImage.id !== undefined &&
        isPopUpInfoOpen && <PopUpInfo onClose={closeInfoPopUp} />}
      <ImagesCardList
        maxPage={maxPage}
        currentCategory={category}
        handleCategoryClick={handleCategoryClick}
        handleImageClick={handleImageClick}
        handlePrevCLick={handlePrevCLick}
        handleNextCLick={handleNextCLick}
        isPrevBtnDisabled={isPrevBtnDisabled}
        isNextBtnDisabled={isNextBtnDisabled}
        loading={loading}
      />
    </main>
  );
}

export default App;
