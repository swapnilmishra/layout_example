/**
 * @author Swapnil Mishra
 */
let debounce = (originalFunction, timeout, scope) => {
  let isCalled = false;
  let timeoutId;
  return function() {
    let args = arguments;
    if (!isCalled) {
      //   isCalled = true;
      if(timeoutId) {
          clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(
        () => {
          originalFunction.apply(scope, args);
          isCalled = true;
        },
        timeout
      );
    }
    else {
        isCalled = false;
        timeoutId = setTimeout(
        () => {
          originalFunction.apply(scope, args);
          isCalled = true;
        },
        timeout
      );
    }
  };
};

export default debounce;
