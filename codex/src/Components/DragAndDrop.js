import { useContext, useState } from "react";
import {
  UserdragEnter,
  UserdragLeave,
  UserdragOver,
  UserImage,
  UserfileDrop,
  UserBrowse,
} from "../App";

const DragAndDrop = () => {
  const dragEtr = useContext(UserdragEnter);
  const dragLve = useContext(UserdragLeave);
  const dragOvr = useContext(UserdragOver);
  const UserImg = useContext(UserImage);
  const fileDrp = useContext(UserfileDrop);
  const handleBrwse = useContext(UserBrowse);

  return (
    <>
      <label for="exampleInputEmail1" className="form-label upload-header">
        Upload Photo
      </label>
      <div className="dragAndDrop-container">
        <div
          className="drop-container"
          onDragOver={dragOvr}
          onDragEnter={dragEtr}
          onDragLeave={dragLve}
          onDrop={fileDrp}
        >
          <div className="drop-message">
            <input
              type="file"
              accept="image/jpeg, image/jpg. image/png"
              name="image"
              id="file"
              onChange={handleBrwse}
              // required
            />
            <p>
              <span className="drag-text">Drag your images here, or </span>
              <label for="file" className="file-label">
                browse
              </label>
            </p>
          </div>
        </div>
        <img src={UserImg} className="image-fluid" id="output" />
      </div>
    </>
  );
};
export default DragAndDrop;
