import { Button } from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        color={"default"}
        variant={"default"}
        size={"lg"}
        endIcon={"pregnant_woman"}
        label={"Hola"}
        disabled
      />
    </>
  );
}

export default App;
