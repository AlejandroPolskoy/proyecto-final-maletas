import backIcon from '../../assets/icons8Back100Copy@3x.png';



export default function Anuncios() {



    return(

        <div>

            <a href="javascript:history.back()">
                <img className="atras" src={backIcon} alt="back"></img>
            </a>

            <p>Descríbenos tu espacio</p>

            
        <div className="input__container">
            <label for="input01">Especifica tu propiedad</label>
            <input type='text' id="input01" placeholder='Selecciona una opción' className="input"></input>
        

        <div className="input__container"></div>
            <label for="input01">¿Qué tipo de espacio?</label>
            <input type='text' id="input02" placeholder='Selecciona una opción' className="input"></input>
        </div>


        </div>
    )
}