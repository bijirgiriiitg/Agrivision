import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "./article.css";

function Upload(props) {
  const fileInputRef = useRef(null);

  const getExtFromName = (name) => {
    const parts = name.split(".");
    return parts[parts.length - 1];
  };

  const removeFile = () => {
    fileInputRef.current.value = "";
    props.setUploadData((prev) => {
      return { ...prev, articleFile: null };
    });
  };

  const onFileInputChange = (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (getExtFromName(file.name) === props.uploadData.fileType) {
        props.setUploadData((prev) => {
          return { ...prev, articleFile: file };
        });
      } else {
        alert("Please choose a document with the right format.");
        removeFile();
      }
    }
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (getExtFromName(file.name) === props.uploadData.fileType) {
        props.setUploadData((prev) => {
          return { ...prev, articleFile: file };
        });
      } else {
        alert("Please choose a document with the right format.");
        removeFile();
      }

      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e) => {
    if ("preventDefault" in e) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  useEffect(() => {
    props.setDisplayNext(true);
    props.setDisplayBack(true);
    props.setEnableNext(true);
    props.setEnableBack(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    props.setUploadData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <UploadContainer>
      <div>
        <h4 className="submission-head">Upload Submission File</h4>{" "}
      </div>
      <div className="cont_upload">
        <InputField>
          <label htmlFor="text">Title of Article</label>
          <input
            type="text"
            name="articleTitle"
            id="title"
            value={props.uploadData.articleTitle}
            onChange={handleChange}
          />
        </InputField>
        <div className="errorMsg">{props.errors.articleTitle}</div>
        <InputField>
          <label htmlFor="dropdown">Select File Type</label>
          <div>
            <select
              className="select2"
              name="fileType"
              id="dropdown3"
              onChange={handleChange}
              value={props.uploadData.fileType}
            >
              <option value="docx">.docx</option>
            </select>
          </div>
        </InputField>
        <FileDrop>
          <input
            onChange={onFileInputChange}
            ref={fileInputRef}
            type="file"
            id="article-upload"
            style={{ display: "none" }}
          />

          <div
            id="dropContainer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragOver}
            onClick={onTargetClick}
          >
            <header>
              <span className="icon3">
                <i className="fas fa-cloud-upload-alt"></i> <input type="file" hidden />
              </span>
              Click / Drag & Drop a file here to begin Upload{" "}
            </header>
          </div>
          <div className="errorMsg">{props.errors.articleFile}</div>
        </FileDrop>

        <span>
          {props.uploadData.articleFile ? props.uploadData.articleFile.name : null}
        </span>
        {props.uploadData.articleFile !== null && <span onClick={removeFile}> X </span>}
      </div>
    </UploadContainer>
  );
}
export default Upload;

export const UploadContainer = styled.div`
  .errorMsg {
    color: #cc0000;
    margin-bottom: 12px;
  }
`;
export const InputField = styled.div`
  width: 100%;
  margin: 24px 0px;

  label {
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid lightgrey;
    outline: none;
    padding: 2%;
    margin-top: 4%;
  }
`;

const FileDrop = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
