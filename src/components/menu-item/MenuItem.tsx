import './MenuItem.scss'
import {  RouteComponentProps, withRouter } from 'react-router-dom'

interface DirectoryProps {
    title: string,
    imageUrl: string,
    size?: string | undefined,
    linkUrl: string
}

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }: DirectoryProps & RouteComponentProps) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);