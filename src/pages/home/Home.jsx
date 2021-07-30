import Topbar from '../../components/topbar/Topbar.jsx'
import Feed from '../../components/feed/feed.jsx'
import Rightfeed from '../../components/rightfeed/rightfeed.jsx'
import './home.css'
export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContianer">
            <Feed/>
            <Rightfeed/>
            </div>
        </>
    )
}
