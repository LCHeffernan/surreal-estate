import axios from "axios";

const postData = (fields, setAlert) => {
  axios
    .post("http://localhost:3000/api/v1/PropertyListing/", fields)
    .then(() => {
      setAlert({
        message: "Property Added",
        isSuccess: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
    });
};

export default postData;
