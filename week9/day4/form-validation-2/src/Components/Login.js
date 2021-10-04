import React, { useState } from "react";
import { MainDiv, Username, Email, Password, Submit, ButtonDiv, InputDiv, MainForm, NewHere } from "../Styled-components/LoginStyle";
export default function Form() {
  const [formData, setFormData] = useState({});

  return (
    <MainDiv>
      <h1>Login to continue!</h1>
      <MainForm>
        <InputDiv>
        <Username
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="username"
          name="username"
          value={formData?.username}
        />
        </InputDiv>
        <InputDiv>
        <Email
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="email"
          name="email"
          value={formData?.email}
        />
        </InputDiv>
        <InputDiv>
        <Password
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="password"
          name="password"
          value={formData?.password}
        />
        </InputDiv>
        <InputDiv>
        <label>Remember Me</label>
        <input type="checkbox"></input>
        </InputDiv>
        <InputDiv>
          <Submit type="submit" >LOGIN</Submit>
        </InputDiv>
        <InputDiv>
        <NewHere>New Here? Sign Up</NewHere>
        </InputDiv>
      </MainForm>
    </MainDiv>
  );
}