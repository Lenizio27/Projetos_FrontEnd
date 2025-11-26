import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";

const Paths = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Paths;
