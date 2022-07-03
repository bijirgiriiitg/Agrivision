import { Slide, toast } from "react-toastify";

const addSomeFields = (quesArray) => {
  let newData = quesArray.map((question) => ({
    ...question,
    status: "not-visited",
    answered: [],
  }));
  return newData;
};

export const questionArray = (data) => {
  let QuesArray = [];
  data.sections.forEach((section) => {
    QuesArray = [...QuesArray, ...section.questions];
  });
  let IndexedData = QuesArray.map((ques, index) => {
    return { ...ques, index: index };
  });
  let FinalData = addSomeFields(IndexedData);
  return FinalData;
};

export const sectionArray = (data) => {
  let secArray = [];
  let indexCount = 0;
  data.sections.forEach((section) => {
    const quesCount = section.questions.length;
    const sectionName = section.name;
    const sectionId = section._id;
    const sectionObject = {
      name: sectionName,
      _id: sectionId,
      startIndex: indexCount,
      quesCount: quesCount,
    };
    secArray = [...secArray, sectionObject];
    indexCount += quesCount;
  });
  secArray = secArray.map((section, index) => {
    return { ...section, index: index };
  });
  return secArray;
};

export const submitQuiz = (quizId, baseURL, quizType, history,setloader) => {
  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };
  setloader(true)
  fetch(`${baseURL}/quiz/${quizId}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        setloader(false)
        if (result.success) {
          switch (quizType) {
            case 0: {
              notify(
                "success",
                "Test Submitted Succesfully. Result will be declared later"
              );
              history.push("/");
              break;
            }
            case 1: {
              history.push(`/analysis/${quizId}`);
              break;
            }
            case 2: {
              history.push(`/analysis/${quizId}`);
              break;
            }
            case 3: {
              history.push(`/analysis/${quizId}`);
              break;
            }
            default: {
              notify(
                "success",
                "Test Submitted Succesfully. Result will be declared later"
              );
              history.push("/");
              break;
            }
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
};
