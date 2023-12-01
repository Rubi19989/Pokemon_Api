import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setBuscar } from '../slices/dataSlice';


const Sercher = () => {

    const dispatch = useDispatch()

    const handleBuscar = (e) => {
        dispatch(setBuscar(e.target.value))

        console.log(e.target.value)
    }


    return (
        <>
            <Input.Search
                onChange={handleBuscar}
                placeholder='Buscar...'
                style={{ marginBottom: '10px' }}
            />
            
        </>
    );
}

export default Sercher;