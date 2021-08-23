// useActions imports
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';
// useTypedSelector imports
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store';

export const useActions = () => {
    const dispatch = useDispatch();
    
    return bindActionCreators(actionCreators, dispatch);
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;