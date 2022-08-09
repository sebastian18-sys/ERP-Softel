import { useState, useEffect } from "react";

export const useDetectClick = (dropdown, initialState) => {

  // console.log("in hook => ", initialState)
  const [active, setActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (dropdown.current !== null && !dropdown.current.contains(e.target)) {
        // console.log("entra? y cambia => ", active)
        setActive(active);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (active) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [active, dropdown]);

  return [active, setActive];
}