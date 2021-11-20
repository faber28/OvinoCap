import "./Page.css";
import "./css/Registro.css";

const Registro: React.FC = () => {
  return (
    <div className="screen">
        <div className="divBackground">
            <label>Registrar Animal</label>
            <div className="divDatos">
                <form>
                    <hr className="grayHr"/>
                    <label>Categoría</label>
                    <select name="select">
                        <option value="value1" selected>Cuido</option>
                        <option value="value2">No Cuido</option>
                        <option value="value3">Venta</option>
                    </select>
                    <label>Indentificador de ovino*</label>
                    <input type="number" placeholder="Ingrese el id del ovino" required/>
                    <label>Castrado</label>
                    <select name="select">
                        <option value="value1" selected>Sí</option>
                        <option value="value2">No</option>
                    </select>
                    <label>N° Lote*</label>
                    <input type="number" placeholder="Ingrese el lote del ovino" required/>
                    <label>Sexo</label>
                    <select name="select">
                        <option value="value1" selected>Macho</option>
                        <option value="value2">Hembra</option>
                    </select>
                    <button type="submit">Guardar Datos</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Registro;
