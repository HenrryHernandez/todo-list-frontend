import { UserProvider } from "./contexts/UserContext";

import { MainRouter } from "./routers/MainRouter";

const AppState = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};

export const App = () => {
  return (
    <AppState>
      <MainRouter />
    </AppState>
  );
};

export default App;
