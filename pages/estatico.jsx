export const getStaticProps = async() => {
    const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json()
    
    return {
        
        props:{
            valor: dados.valor
        }
    }
}

const Estatico = props => {
    
        return(
            <div>
                <h1>Conteúdo Estático</h1>
                <h2>último Valor = {props.valor}</h2>
            </div>
        )
    }
    
    export default Estatico