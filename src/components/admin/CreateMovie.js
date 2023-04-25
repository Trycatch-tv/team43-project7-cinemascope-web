import { useState } from "react"
import "./createMovie.css"

const CreateMovie = () => {
    const [title, setTitle] = useState('');
    const [cover_url, setCover] = useState('');
    const [trailer_url, setTrailer] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [directed_by, setDirector] = useState('');
    const [synopsis, setSynopsis] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {title, cover_url,trailer_url, release_date,directed_by,synopsis};
        console.log(movie);
    }

    return (
        <div className="addMovie">
            <h2>Agregar película</h2>
            <form 
                className="fullForm"
                onSubmit={handleSubmit}
                >
                <div className="left">
                    <label> Portada</label>
                    <input type="link"
                        value={cover_url}
                        onChange={(e) => setCover(e.target.value)} 
                        />
                    <label> Trailer</label>
                    <input type="link"
                        value={trailer_url}
                        onChange={(e) => setTrailer(e.target.value)} 
                        />
                </div>
                <div className="info">
                        <label >Título</label>
                        <input 
                            placeholder="Título"
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label >Sinopsis</label>
                        <textarea 
                            cols="50" 
                            rows="3"
                            required
                            value={synopsis}
                            onChange={(e) => setSynopsis(e.target.value)}>
                        </textarea>
                        <label> Fecha de estreno</label>
                        <input 
                            type="date" 
                            name="fecha-estreno" 
                            id=""  
                            required
                            value={release_date}
                            onChange={(e) => setReleaseDate(e.target.value)}/>
                        <label > Director</label>
                        <input 
                            autoComplete="" 
                            required
                            value={directed_by}
                            onChange={(e) => setDirector(e.target.value)}/>
                </div>
            </form>
            <div className="buttons">
                <button className="deny-button">Cancelar</button>
                <button className="confirm-button" type="submit"> Guardar</button>
            </div>
        </div>
        
        )
}

export default CreateMovie