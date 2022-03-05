import { MainRouter } from "./routers/MainRouter";

const AppState = ({ children }: any) => {
  return <>{children}</>;
};

export const App = () => {
  return (
    <AppState>
      <MainRouter />
    </AppState>
  );
};

export default App;
