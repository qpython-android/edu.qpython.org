import { useState, useEffect, useMemo } from 'react'
import { BookOpen } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Course, CourseData } from '@/types/course'
import { cn } from '@/lib/utils'
import { LanguageSwitch } from '@/components/LanguageSwitch'

const CATALOG_ORDER = [
  '人工智能',
  '深入Python开发',
  '数据分析与处理',
  '移动应用开发',
  'WEB开发',
  '智能硬件',
]

export function CoursesPage() {
  const { t, language } = useLanguage()
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCatalog, setSelectedCatalog] = useState<string>('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [tagModalOpen, setTagModalOpen] = useState(false)
  const showLangSwitch = new URLSearchParams(window.location.search).get('lang') === 'true'

  useEffect(() => {
    const url = language === 'zh' ? '/data/courses.json' : '/data/courses_en.json'
    fetch(url)
      .then(res => res.json())
      .then((data: CourseData) => {
        setCourses(data.courses)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [language])

  const availableCatalogs = useMemo(() => {
    const cats = [...new Set(courses.map(c => c.catalog).filter(Boolean))]
    return cats.sort((a, b) => {
      const ai = CATALOG_ORDER.indexOf(a)
      const bi = CATALOG_ORDER.indexOf(b)
      if (ai === -1 && bi === -1) return a.localeCompare(b)
      if (ai === -1) return 1
      if (bi === -1) return -1
      return ai - bi
    })
  }, [courses])

  const availableTags = useMemo(() => {
    const tags = new Set<string>()
    courses.forEach(c => c.tags.forEach(tag => tags.add(tag)))
    return [...tags].sort()
  }, [courses])

  const filteredCourses = useMemo(() => {
    let result = courses
    if (selectedCatalog !== 'all') {
      result = result.filter(course => course.catalog === selectedCatalog)
    }
    if (selectedTags.length > 0) {
      result = result.filter(course =>
        selectedTags.some(tag => course.tags.includes(tag))
      )
    }
    return result
  }, [courses, selectedCatalog, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const clearAll = () => {
    setSelectedCatalog('all')
    setSelectedTags([])
  }

  const hasFilters = selectedCatalog !== 'all' || selectedTags.length > 0

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Tag filter modal */}
      {tagModalOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setTagModalOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-base">{t('filterByTag')}</h3>
              <div className="flex gap-2">
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    {t('clearFilters')}
                  </button>
                )}
                <button
                  onClick={() => setTagModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    'px-3 py-1.5 text-sm rounded-full border transition-colors',
                    selectedTags.includes(tag)
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-gray-700'
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-bold">{t('discoverCourses')}</h1>
              {!isLoading && (
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-gray-600 text-sm">
                    {t('totalCourses', { count: filteredCourses.length })}
                  </span>
                  {showLangSwitch && <LanguageSwitch />}
                </div>
              )}
            </div>
          </div>
          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Catalog select */}
            <select
              value={selectedCatalog}
              onChange={e => setSelectedCatalog(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-gray-700 w-4/5"
            >
              <option value="all">{t('all')}</option>
              {availableCatalogs.map(cat => (
                <option key={cat} value={cat}>{t(cat)}</option>
              ))}
            </select>
            {/* Tag filter button */}
            <button
              onClick={() => setTagModalOpen(true)}
              className={cn(
                'px-3 py-1.5 text-xs rounded-full border transition-colors',
                selectedTags.length > 0
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-700'
              )}
            >
              {t('filterByTag')}{selectedTags.length > 0 ? ` (${selectedTags.length})` : ''}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              {hasFilters && (
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-2 text-sm">
                    {t('filter')}
                  </span>
                  <button
                    onClick={clearAll}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    {t('clearFilters')}
                  </button>
                </div>
              )}

              {/* Catalog */}
              <div>
                <p className="text-xs font-medium mb-2 text-gray-500 uppercase tracking-wide">
                  {t('catalog')}
                </p>
                <div className="space-y-0.5">
                  <button
                    key="all"
                    onClick={() => setSelectedCatalog('all')}
                    className={cn(
                      'w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors',
                      selectedCatalog === 'all'
                        ? 'bg-black text-white'
                        : 'hover:bg-gray-200'
                    )}
                  >
                    {t('all')}
                  </button>
                  {availableCatalogs.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCatalog(cat)}
                      className={cn(
                        'w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors',
                        selectedCatalog === cat
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-200'
                      )}
                    >
                      {t(cat)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-xs font-medium mb-2 text-gray-500 uppercase tracking-wide">
                  {t('tags')}
                </p>
                <div className="space-y-0.5 max-h-64 overflow-y-auto">
                  {availableTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={cn(
                        'w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors flex items-center gap-2',
                        selectedTags.includes(tag)
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-200'
                      )}
                    >
                      <span className={cn(
                        'w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0',
                        selectedTags.includes(tag)
                          ? 'bg-white border-black'
                          : 'border-gray-400'
                      )}>
                        {selectedTags.includes(tag) && (
                          <span className="w-2 h-2 rounded-full bg-black" />
                        )}
                      </span>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Course grid */}
          <div className="flex-1 min-w-0">
            {/* Tip banner */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                {language === 'zh'
                  ? '需要选课帮助，请加微信助手 learnwithqpy'
                  : 'For course selection assistance, please add our WhatsApp assistant: +85262684559'}
              </p>
            </div>
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <span className="ml-3 text-lg text-gray-600">{t('loading')}</span>
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-600">{t('noResults')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <a
                    key={course.id}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    onClick={(e) => {
                      if (typeof window.gtag !== 'undefined') {
                        window.gtag('event', 'select_content', {
                          content_type: 'course',
                          item_id: course.id,
                        })
                      }
                      if (typeof window !== 'undefined' && (window as any).milib) {
                        e.preventDefault()
                        ;(window as any).milib.openUrl(course.url)
                      }
                    }}
                  >
                    <div className="aspect-video w-full overflow-hidden bg-gray-200">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-black mb-1 font-medium">{t(course.catalog)}</p>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-1">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {course.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
