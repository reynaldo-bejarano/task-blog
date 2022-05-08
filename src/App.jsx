import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Error404 from "./views/Error404";
import Home from "./views/Home";
import Post from "./views/Post";
import Principal from "./views/Principal";
import Task from "./views/Task";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}>
          <Route index element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
