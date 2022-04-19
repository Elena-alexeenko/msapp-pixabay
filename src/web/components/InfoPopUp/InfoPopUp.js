import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import "./InfoPopUp.css";
export function PopUpInfo(props) {
  const { isPopUpInfoOpen, currentImage } = useSelector((state) => state);
  console.log(isPopUpInfoOpen);
  return (
    <>
      <Modal
        onClose={props.onClose}
        isOpen={isPopUpInfoOpen}
        ariaHideApp={false}
      >
        <div className="modalInfo">
          <img
            src={currentImage.largeImageURL}
            className="modalImage"
            alt={currentImage.tags}
          />
          <p className="modalText">{`Views: ${currentImage.views}`}</p>
          <p className="modalText">{`Collections: ${currentImage.collections}`}</p>
          <p className="modalText">{`Downloads: ${currentImage.downloads}`}</p>
          <p className="modalText">{`Likes: ${currentImage.likes}`}</p>
          <button className="modalButton" onClick={props.onClose}>
            Close Info
          </button>
        </div>
      </Modal>
    </>
  );
}
