import './Directory.scss'
import MenuItem from '../menu-item/MenuItem'
import { useTypedSelector } from '../../store/hooks';

const Directory = () => {

  const { sections } = useTypedSelector(state => state.directory)

    return (
        <div className="directory">
            {
                sections.map(({ id, ...sectionsProps }) => (
                    <MenuItem key={id} {...sectionsProps} />
                ))
            }
        </div>
    )
}

export default Directory;