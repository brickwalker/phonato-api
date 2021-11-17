import axios from "axios";

axios
  .post("http://localhost:3000/phonato", { input: "I am Artem" })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
