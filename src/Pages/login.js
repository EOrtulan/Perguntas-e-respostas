import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/User/actions";
import { getToken } from "../Service/apiTrivia";

export default function Login() {
  const [nome, SetNome] = useState("");
  const [emailL, SetEmail] = useState("");
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const history = useNavigate();
  const dispatch = useDispatch();

  const validation = () => {
    const validEmail = /\S+@\S+\.\S+/;

    const validatingEmail = validEmail.test(emailL);

    if (validatingEmail && nome.length >= 2) {
      return false;
    }

    return true;
  };

  const btnPlay = async () => {
    const api = await getToken();
    dispatch(userLogin({ name: nome, email: emailL, token: api }));
    localStorage.setItem("token", api.token);
    return history("/game");
  };

  return (
    <div className="login">
      <div>
        <label>
          <input
            type="text"
            placeholder="Nome"
            onChange={({ target }) => SetNome(target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Email"
            onChange={({ target }) => SetEmail(target.value)}
          />
        </label>
        <button
          className="buttonLogin"
          type="button"
          disabled={validation()}
          onClick={btnPlay}
        >
          Jogar
        </button>
      </div>
    </div>
  );
}
