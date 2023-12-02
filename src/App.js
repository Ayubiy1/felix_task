import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/home";
import LoginPage from "./components/pages/login";
import NotFounded from "./components/pages/not-founded";
import RegisterPage from "./components/pages/register";
import { useLocalStorageState } from "ahooks";

function App() {
  const [userKey, setUserKey] = useLocalStorageState("", {
    defaultValue: "key",
  });
  const [userSecret, setUserSecret] = useLocalStorageState("", {
    defaultValue: "secret",
  });
  const [user, setUser] = useLocalStorageState("", {
    defaultValue: null,
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />

        <Route path="login" element={<LoginPage />} />

        <Route
          path="register"
          element={
            <RegisterPage
              setUserSecret={setUserSecret}
              setUserKey={setUserKey}
              setUser={setUser}
            />
          }
        />

        <Route path="*" element={<NotFounded />} />
      </Routes>
    </>
  );
}

export default App;
