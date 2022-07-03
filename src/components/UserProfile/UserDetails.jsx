import styled from "styled-components";
import InlineEdit from "./InlineEdit";
import TextAreaEdit from "./TextAreaEdit";
import DropDownEdit from "./DropDownEdit.jsx";
import { useState, useEffect, useRef } from "react";
import Loader from "../../pages/Loader";
import CreateIcon from "@mui/icons-material/Create";
import SaveIcon from "@mui/icons-material/Save";
import { baseURL } from "../../Apis";
import Resizer from "react-image-file-resizer";

const default_image = "/images/userimage_placeholder.svg";

const UserDetails = () => {
  const [info, setInfo] = useState(null);
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isEditImage, setIsEditImage] = useState(false);

  const toggleInput = () => {
    if (isInputActive) {
      updateInfo();
    }
    setIsInputActive((prev) => !prev);
  };

  const toggleImage = (e) => {
    if (isEditImage) {
      updateImg();
    } else {
      hiddenFileInput.current.click();
    }
    setIsEditImage((prev) => !prev);
  };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(
    () =>
      fetch(`${baseURL}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setInfo(result.data);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        ),
    []
  );

  const updateInfo = () => {
    setIsLoaded(false);

    const textFields = {
      name: info.name,
      email: info.email,
      address: info.address,
      dob: info.dob,
      category: info.category,
      contactNumber: info.contactNumber,
    };

    fetch(`${baseURL}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(textFields),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file, // the file from input
        480, // width
        480, // height
        "JPEG", // compress format WEBP, JPEG, PNG
        70, // quality
        0, // rotation
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const updateImg = async () => {
    if (file) {
      setIsLoaded(false);
      const image = await resizeFile(file);
      var fd = new FormData();
      fd.append("image", image);
      fetch(`${baseURL}/user/profile`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: fd,
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
          }
        );
    }
  };

  const onPhotoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        setInfo((prev) => ({ ...prev, image: reader.result }));
        setFile(file);
      };

      reader.readAsDataURL(file);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      info && (
        <UserDetailsContainer>
          <div
            className={`userImage__container userImage--${isEditImage ? "edit" : "idle"}`}
          >
            {isEditImage ? (
              <img
                className="userProfilePhoto"
                src={info.image ? info.image : default_image}
                alt="profile_photo"
              />
            ) : (
              <img
                className="userProfilePhoto"
                src={info.image ? info.image : default_image}
                alt="profile_photo"
              />
            )}
            <input
              style={{ display: "none" }}
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={onPhotoUpload}
              ref={hiddenFileInput}
            />
            <div className="userImage__edit">
              {isEditImage ? (
                <SaveIcon id="image-edit-btn" onClick={toggleImage} />
              ) : (
                <CreateIcon onClick={toggleImage} />
              )}
            </div>
          </div>
          <div className="userInfo__main">
            <div className="userInfo__editDiv">
              {!isInputActive ? (
                <img
                  src="/images/edit_icon.svg"
                  className="userDetail__edit"
                  onClick={toggleInput}
                  alt="edit_profile"
                />
              ):(<div>
                  <button 
                    className="userDetail__save"
                    onClick={toggleInput}
                    alt="save_info"
                  >
                    Save
                  </button>
                </div>)}

            </div>
            <div className="userInfo__container">
              <div className="userInfo__name userInfo__row">
                <span className="userInfo__title">Full Name</span>
                <span>{info.name ? `${info.name[0]} ${info.name[1]}` : null}</span>
              </div>
              <div className="userInfo__email userInfo__row">
                <span className="userInfo__title">Email</span>
                <span>{info.email}</span>
              </div>
              <div className="userInfo__mobile userInfo__row">
                <span className="userInfo__title">Mobile</span>
                <InlineEdit
                  text={info.contactNumber}
                  setText={(number) =>
                    setInfo((prev) => ({ ...prev, contactNumber: number }))
                  }
                  maxLength="10"
                  isInputActive={isInputActive}
                  toggleInput={toggleInput}
                />
              </div>
              <div className="userInfo__dob userInfo__row">
                <span className="userInfo__title">Date of Birth</span>
                <InlineEdit
                  text={info.dob ? info.dob.slice(0, 10) : null}
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  setText={(dob) => setInfo((prev) => ({ ...prev, dob: dob }))}
                  isInputActive={isInputActive}
                  toggleInput={toggleInput}
                />
              </div>
              <div className="userInfo__address userInfo__row">
                <span className="userInfo__title">Address</span>
                <TextAreaEdit
                  text={info.address}
                  setText={(address) =>
                    setInfo((prev) => ({ ...prev, address: address }))
                  }
                  isInputActive={isInputActive}
                  toggleInput={toggleInput}
                />
              </div>
              <div className="userInfo__category userInfo__row">
                <span className="userInfo__title">Category</span>
                <DropDownEdit
                  text={info.category}
                  setText={(category) =>
                    setInfo((prev) => ({ ...prev, category: category }))
                  }
                  isInputActive={isInputActive}
                  toggleInput={toggleInput}
                />
              </div>
            </div>
          </div>
        </UserDetailsContainer>
      )
    );
  }
};

export default UserDetails;

const UserDetailsContainer = styled.div`
  display: grid;

  .userImage__edit {
    // display: none;
    color: black;
    position: absolute;
    right: 5px;
    bottom: 5px;
    &:hover {
      cursor: pointer;
    }
    background-color: #f8f9fa;
    border-radius: 50%;
    padding: 3px;
  }
  .userImage__container {
    position: relative;
    &: hover {
      .userImage__edit {
        // display: block;
      }
    }
    height: 15rem;
    width: 15rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    margin: 10px 20px;
    .userImage__container {
      margin: 0 auto;
      text-align: left;
      .userProfilePhoto {
        object-fit: cover;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 960px) {
    margin: 10px 82px;
    grid-template-columns: 1fr 3.3fr;
    .userImage__container {
      // text-align: center;
      .userProfilePhoto {
        object-fit: cover;
        width: 100%;
      }
    }
  }
  .userInfo__editDiv {
    display: flex;
    justify-content: flex-end;

    .userDetail__edit {
      height: 40px;
      width: 40px;
      &:hover {
        cursor: pointer;
      }
    }

    .userDetail__save {
      padding: 8px 20px;
      color: white;
      background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
      border-radius: 6px;
    }
  }
  .userInfo__container {
    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      .userInfo__row {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (min-width: 960px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(min-content, max-content);
      row-gap: 1rem;
      column-gap: 1rem;

      .userInfo__row {
        grid-template-columns: 1fr 2fr;
      }
    }

    position: relative;
    padding: 20px;
    .userInfo__row {
      display: grid;
      column-gap: 20px;
      margin: 10px 0;
      font-size: 1rem;

      span {
        word-break: break-word;
      }
    }
    .userInfo__title {
      font-weight: 600;
      // text-align: right;
      min-width: 7rem;
    }
  }
`;
