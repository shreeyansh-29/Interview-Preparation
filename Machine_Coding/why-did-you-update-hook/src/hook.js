import {useRef, useEffect} from "react";

const WhyDidYouUpdate = (name, props) => {
  const prevProps = useRef();

  useEffect(() => {
    if (prevProps.current) {
      let keys = Object.keys({...prevProps.current, ...props});

      let whyUpdated = {};

      keys.forEach((key) => {
        if (
          typeof prevProps.current[key] === "object" &&
          props[key] === "object"
        ) {
          if (
            JSON.stringify(prevProps.current[key]) !==
            JSON.stringify(props[key] === "object")
          ) {
            whyUpdated[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        } else {
          if (prevProps.current[key] !== props[key]) {
            whyUpdated[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        }
      });
      if (Object.keys(whyUpdated).length) {
        console.log("This has caused re-render", whyUpdated);
      }
    }

    prevProps.current = props;
  }, [name, props]);
};

export default WhyDidYouUpdate;
