import objDeepCopy from "./objDeepCopy";

const makeObjIterable = obj => {
  let newObj;
  if (obj === null || obj === undefined || typeof obj !== "object" || Array.isArray(obj)) {
   newObj = obj;
  } else {
    newObj = objDeepCopy(obj);
    newObj[Symbol.iterator] = () => {
      const key  = Object.keys(newObj);
      const value  = Object.values(newObj);
      let currentKeyIndex = 0;

      return {
        next () {
          let index = currentKeyIndex;
          const obj = {key: key[index], value:value[index]};
          currentKeyIndex++;

          if (index < key.length) {
            return {
              value: obj,
              done: false
            }
          }

          return {
            value: null,
            done: true
          };
        }
      }

    };
  }

  return newObj;
};

export default makeObjIterable;
