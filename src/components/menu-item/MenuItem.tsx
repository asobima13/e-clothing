import './MenuItem.scss'

interface DirectoryProps {
    title: string,
    imageUrl: string,
    size: string | undefined
}

const MenuItem= ({ title, imageUrl, size }: DirectoryProps) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;