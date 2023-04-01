import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import PreLoader from "./components/Loader/PreLoader";
import { router } from "./routes/route";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </>
  );
}

export default App;
