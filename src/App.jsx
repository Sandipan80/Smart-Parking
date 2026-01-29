// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Layout, Menu } from 'antd';
// import Button from "./components/Button.jsx";
// import Form from "./components/Form.jsx";
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Router>
//       <Layout style={{ minHeight: '100vh' }}>
//         <Header>
//           <Menu theme="dark" mode="horizontal">
//             <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
//             <Menu.Item key="2"><Link to="/Button">Buttons</Link></Menu.Item>
//             <Menu.Item key="3"><Link to="/Form">Form</Link></Menu.Item>
//           </Menu>
//         </Header>

//         <Content style={{ padding: '50px' }}>
          
//           <Routes>
//             <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
//             <Route path="/Button" element={<MyButtonPage />} />
//             <Route path="/Form" element={<MyFormPage />} />
//           </Routes>
//         </Content>
//       </Layout>
//     </Router>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import MyButton from './components/Button';
import MyForm from './components/Form';
import About from './components/About';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/button">Signup Page</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/form">Login Page</Link></Menu.Item>
          </Menu>
        </Header>

        {/* Updated Content styles for centering */}
        <Content style={{ 
          padding: '50px', 
          display: 'flex',           // Enable Flexbox
          justifyContent: 'center',  // Center horizontally
          alignItems: 'center',      // Center vertically
          flexDirection: 'column',   // Stack elements vertically
          background: '#f0f2f5'      // Light grey background for better contrast
        }}>
          <div style={{ 
            background: '#fff', 
            padding: '40px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            minWidth: '400px',        // Ensures the container has a good base width
            textAlign: 'center' 
          }}>
            <Routes>
              <Route path="/" element={<h2>Welcome! Click a menu item to navigate.</h2>} />
              <Route path="/about" element={<About />} />
              <Route path="/button" element={<MyButton />} />
              <Route path="/form" element={<MyForm />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;