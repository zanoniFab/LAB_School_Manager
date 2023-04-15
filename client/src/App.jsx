import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterAluno from './pages/RegisterAluno/RegisterAluno';
import { AuthenticationProvider } from './hooks/useAuthentication';
import HomePage from './pages/HomePage';
import AlunosPage from './pages/AlunosPage';
import AcompanhamentosPage from './pages/AcompanhamentosPage';
import RegisterAtendimento from './pages/RegisterAtendimento';

function App() {

  return (
    <BrowserRouter>
      <AuthenticationProvider>
          <PageWrapper>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registerPage" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />}/>
                <Route path="/registerAluno" element={<RegisterAluno />}/>
                <Route path="/listagemAlunos" element={<AlunosPage />}/>
                <Route path="/acompanhamentosPedagogicos" element={<AcompanhamentosPage />}/>
                <Route path="/cadastroAtendimento" element={<RegisterAtendimento />}/>
              </Routes>
          </PageWrapper>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}

export default App;

