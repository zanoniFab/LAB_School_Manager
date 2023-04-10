import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageWrapper from './components/PageWrapper'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
function App() {

  return (
      <BrowserRouter>
          <PageWrapper>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registerPage" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
          </PageWrapper>
        </BrowserRouter>
  )
}

export default App;