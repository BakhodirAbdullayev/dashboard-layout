import { FC, JSX } from "react";
import { Shell } from "./layout/Shell";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Shell>
        <h2>hello world</h2>
      </Shell>
    </>
  );
};

export default App;
