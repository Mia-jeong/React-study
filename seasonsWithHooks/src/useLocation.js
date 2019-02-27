import { useEffect, useState } from "react";

export default () => {
  const [lat, setLat] = useState("null");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  //you better use array instead of object with hooks
  return [lat, errorMessage];
};
