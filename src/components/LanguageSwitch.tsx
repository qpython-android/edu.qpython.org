import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-md p-0.5">
      <button
        onClick={() => setLanguage('zh')}
        className={cn(
          'px-2 py-1 text-xs rounded transition-colors',
          language === 'zh'
            ? 'bg-white text-black shadow-sm font-medium'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        ZH
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2 py-1 text-xs rounded transition-colors',
          language === 'en'
            ? 'bg-white text-black shadow-sm font-medium'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        EN
      </button>
    </div>
  )
}
