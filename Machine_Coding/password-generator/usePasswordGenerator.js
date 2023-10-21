import {useState} from "react";

export default function UsePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function generatePassword(checkboxData, length) {
    let charset = "";
    let generatedPassword = "";

    let selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setPassword("");
      setErrorMessage("Please select any checkbox");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randoxIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randoxIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  }
  return {password, errorMessage, generatePassword};
}
