export const solutionArray = (data) => {

  let SolArray = [];
  data.sections.forEach((section) => {
    SolArray = [...SolArray, ...section.questions];
  });
  let IndexedData = SolArray.map((ques, index) => {
    return { ...ques, index: index };
  });
  return IndexedData;
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

export const scrollToQuestion = (questionNumber) => {
  const anchor = document.querySelector(`#solution_${questionNumber}`);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
