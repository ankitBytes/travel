// router dom
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


// pages 
import ContactUsPage from "./pages/contact-us";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<h1>Home page</h1>} />
              <Route path="contact" element={<ContactUsPage />} />
              <Route path="*" element={<h3>Not found</h3>} />
            </Route>
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
