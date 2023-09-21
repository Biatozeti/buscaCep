import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Styles from "../App.module.css";
import Cadastro from './Cadastro';
import {CadastroInterface } from '../interfaces/CadastroInterface'
import axios from 'axios';

const Listagem = () => {


    const [usuarios, setUsuarios] = useState<CadastroInterface[]>([]);
    const[error, setError] = useState("");

    useEffect(()=> {
        async function fetchData(){
            try{
                const response = await axios.get('http://10.137.9.132:8000/api/find');
                setUsuarios(response.data.data);


            } catch(error){
                setError("Ocorreu um erro");
                console.log(error);

            }
            
        }
        fetchData();
    },[]);
    return (
        <div>
           <main className={Styles.main}>
            <div className= 'container'>
            <div className= 'card'>
            <div className= 'card-body'>
                <h5 className= 'card-title'>Listagem de Usuarios</h5>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> NOME </th>
                        <th> CPF </th>
                        <th> E-MAIL </th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.cpf}</td>
                    <td>{usuario.email}</td>
                    <td>
                        <a href="#" className='btn btn-primary btn-sm' >EDITAR</a>
                        <a href="#" className= 'btn btn-danger btn-sm' >EXCLUIR</a>
                    </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
           </main>
        </div>
    );
}

export default Listagem;