import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import Sercher from './Components/Sercher';
import PokemonList from './Components/Pokemon/PokemonList'
import logo from './statics/logo.svg'
import { fetchPokemonsWitDetails } from './slices/dataSlice';
import './App.css';

function App() {

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const pokemonsBuscar = useSelector((state) => state.data.pokemonFilterd, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(fetchPokemonsWitDetails());

  }, [dispatch]);



  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8} >
        <Sercher pokemons={pokemonsBuscar} />
      </Col>

      {loading ?
        (<Col >
          <Spin spinning size='large' />
        </Col>)
        : (<PokemonList pokemons={pokemons} />)
      }

    </div>
  );
}


export default App;