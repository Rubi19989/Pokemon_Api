import { Button } from "antd";
import { StarFilled, StarOutlined } from '@ant-design/icons'
import './pokemonList.css'


const StartButton = ({isFavorite, onClick}) => {


    const Icon = isFavorite ? StarFilled : StarOutlined;
    return <Button className="pokedux2" icon={<Icon />} onClick={onClick} />;

};

export default StartButton;