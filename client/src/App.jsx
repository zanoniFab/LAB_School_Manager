import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
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
          <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registerPage" element={<RegisterPage />} />
                <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
                <Route path="/registerAluno" element={<PrivateRoute><RegisterAluno /></PrivateRoute>}/>
                <Route path="/listagemAlunos" element={<PrivateRoute><AlunosPage /></PrivateRoute>}/>
                <Route path="/acompanhamentosPedagogicos" element={<PrivateRoute><AcompanhamentosPage /></PrivateRoute>}/>
                <Route path="/cadastroAtendimento" element={<PrivateRoute><RegisterAtendimento /></PrivateRoute>}/>
          </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}

export default App;