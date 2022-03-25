import { TodosProvider } from "./contexts/TodosContext";
import { TokenProvider } from "./contexts/TokenContext";
import { UserProvider } from "./contexts/UserContext";
import { ModalProvider } from "./contexts/ModalContext";

import { MainRouter } from "./routers/MainRouter";

const AppState = ({ children }: any) => {
  return (
    <TokenProvider>
      <UserProvider>
        <TodosProvider>
          <ModalProvider>{children}</ModalProvider>
        </TodosProvider>
      </UserProvider>
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
