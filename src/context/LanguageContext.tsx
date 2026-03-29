import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import translations from '@/i18n/translations.json'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const getInitialLanguage = (): Language => {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')
    if (langParam === 'zh' || langParam === 'en') {
      return langParam
    }
    return 'en'
  }

  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  const t = useCallback((key: string, params?: Record<string, string | number>) => {
    const langData = translations[language] as Record<string, string>
    const enData = translations.en as Record<string, string>
    let text = langData[key] || enData[key] || key
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v))
      })
    }
    return text
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
