import Sidebar from '@/components/Sidebar'
import Newsfeed from '@/components/Newsfeed'

export default function NewsfeedPage() {
  return (
    <div className="app">
      <Newsfeed />
      <Sidebar />
    </div>
  )
}
