import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import StartButton from "./StartButton";
import './pokemonList.css'



const PokemonCard = ({ name, image, types, id, favorite, abilities }) => {

    const dispatch = useDispatch();


    const typeString = types.map(elem => elem.type.name).join(', ')
    // const abilidades = abilities.map(ability => ability.ability.name).join(', ')


    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    return (
        <>
            <Card
                className='pokedux2 colorText'
                title={name}
                cover={<img
                    src={image}
                    alt={name} />}
                extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
            >
                <Button className="colorText">
                    <Meta  description={typeString} />
                </Button>
                {/* <span>{abilidades}</span> */}
            </Card>
        </>
    );
}

export default PokemonCard;