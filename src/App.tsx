import { TokenProvider } from "./contexts/TokenContext";
import { UserProvider } from "./contexts/UserContext";

import { MainRouter } from "./routers/MainRouter";

const AppState = ({ children }: any) => {
  return (
    <TokenProvider>
      <UserProvider>{children}</UserProvider>
    </TokenProvider>
  );
};

export const App = () => {
  return (
    <AppState>
      <MainRouter />
    </AppState>
  );
};

export default App;
