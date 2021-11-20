import "./Page.css";
import "./css/Captura.css";
import CardSheep from "../components/CardSheep";

interface OvinesCard {
    id: string;
    categoria: string;
    raza: string;
    nivel: string;
}

const cardOvines: OvinesCard[] = [
    {
        id: "101",
        categoria: "Lactante",
        raza: "Negra",
        nivel: "5"
    },
    {
        id: "102",
        categoria: "Lactante",
        raza: "Blanca",
        nivel: "2"
    },
    {
        id: "103",
        categoria: "Lactante",
        raza: "Negra",
        nivel: "5"
    },
    {
        id: "104",
        categoria: "Lactante",
        raza: "Blanca",
        nivel: "2"
    },
    {
        id: "105",
        categoria: "Lactante",
        raza: "Negra",
        nivel: "5"
    },
    {
        id: "106",
        categoria: "Lactante",
        raza: "Blanca",
        nivel: "2"
    },
];


const Captura: React.FC = () => {
  return (
    <div className="screen">
        <div className="divBack">
            <div className="divDato">
                <hr className="grayH"/>
                <button type="submit">Tomar Foto</button>
                {cardOvines.map((ovine)=>{
                    return <CardSheep id={ovine.id}
                    categoria={ovine.categoria} 
                    raza={ovine.raza} 
                    nivel={ovine.nivel}/>
                })}
            </div>
        </div>
    </div>
  );
};

export default Captura;
