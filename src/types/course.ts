export interface Course {
  id: string
  title: string
  description: string
  image: string
  url: string
  tags: string[]
  slug: string
  catalog: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  price?: string
  status?: string
}

export interface CourseData {
  courses: Course[]
}
