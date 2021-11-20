import "./CardSheep.css"

interface Props{
    id: string;
    categoria: string;
    raza: string;
    nivel: string;
}

const CardSheep: React.FC<Props> = (props) => {

    return (
      <div className="cardSheep">
          <label>ID: {props.id}</label>
          <hr/>
          <label>Categoría: {props.categoria}</label>
          <label>Raza: {props.raza}</label>
          <hr/>
          <label>Nivel de conjuntiva: {props.nivel}</label>
      </div>
    );
  };
  
  export default CardSheep;