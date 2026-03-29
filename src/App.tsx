import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/context/LanguageContext'
import { CoursesPage } from '@/pages/CoursesPage'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
