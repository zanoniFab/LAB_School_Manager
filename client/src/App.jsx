import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageWrapper from './components/PageWrapper'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RegisterAluno from './pages/RegisterAluno/RegisterAluno'
import { AuthenticationProvider } from './hooks/useAuthentication/useAuthentication'
function App() {

  return (
    <BrowserRouter>
      <AuthenticationProvider>
          <PageWrapper>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registerPage" element={<RegisterPage />} />
                <Route path="/registerAluno" element={<RegisterAluno />}/>
              </Routes>
          </PageWrapper>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}

export default App;

