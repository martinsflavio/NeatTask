import objDeepCopy from "./objDeepCopy";

const makeObjIterable = formObj => {
  const newObj = objDeepCopy(formObj);

  newObj[Symbol.iterator] = () => {
    const inputTitles  = Object.keys(newObj);
    const inputValues  = Object.values(newObj);
    let currentInputTitleIndex = 0;

    return {
      next () {
        const thisTitleObj = inputValues[currentInputTitleIndex];
        currentInputTitleIndex++;

        const doNotHaveMoreInputs = !(currentInputTitleIndex < inputTitles.length);

        if (doNotHaveMoreInputs) {
          return {
            value: undefined,
            done: true
          };
        }

        return {
          value: {input: inputTitles[currentInputTitleIndex], payload: thisTitleObj},
          done: false
        }
      }
    }

  };

  return newObj;
};

export default makeObjIterable;
