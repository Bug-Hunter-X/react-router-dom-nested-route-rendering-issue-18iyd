```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path=":id" element={<DashboardDetails />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() {/* ... */}
function About() {/* ... */}

function DashboardLayout(){
  return(
    <div>
      {/* Dashboard layout components */}
      <Outlet/>
    </div>
  );
}

function DashboardHome() {/* ... */}
function DashboardDetails() {/* ... */}
```