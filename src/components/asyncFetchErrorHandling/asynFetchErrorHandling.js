import React, { useEffect } from "react";
import { array } from "prop-types";

// const getPost = async (postId) => {
//   const response = await fetch(
//     "https://jsonplaceolder.typicode.com/todos/" + postId
//   );
//   let returnedData;
//   let error;
//   if (response.ok) {
//     returnedData = await response.json();
//   } else {
//     const errorMsg = await response.json();
//     debugger;
//     if (response.status === 401) {
//       error = new Error("ACCESS DENIED: " + errorMsg);
//     } else if (response.status == 404) {
//       error = new Error("PAGE NOT FOUND: " + errorMsg);
//     } else {
//       error = new Error("GENERAL ERROR: " + errorMsg);
//     }
//   }
//   if (returnedData) {
//     return returnedData;
//   } else if (error) {
//     return error;
//   }
// };

const getPost = async (postId) => {
  const response = await fetch(
    "https://jsonplaceolder.typicode.com/todos/" + postId
  );
  const responseJson = await response.json();
  let error;
  if (response.ok) {
    return responseJson;
  } else {
    if (response.status === 401) {
      error = new Error("access_denied__error_message");
    } else if (response.status === 404) {
      error = new Error("page_not_found_error_message");
    } else if (response.status >= 500) {
      error = new Error("server_error_message");
    } else {
      error = new Error("general_error_message");
    }
  }
  return error;
};

export default function AsynFetchErrorHandling() {
  useEffect(() => {
    const getPosts = async () => {
      try {
        let d = await getPost(1);
        console.log("d", d);
      } catch (error) {
        console.log("error is found", error.message);
      }
    };
    getPosts();
  }, []);
  return <div>Hello world</div>;
}
