import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css'
import axios from 'axios';


const Cadastro = () => {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const cadastroUsuario = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            nome: nome,
            email: email,
            cpf: cpf,
            password: password
        }
console.log(dados)
        axios.post('http://10.137.9.131:8000/api/store',
        dados,
        {
            headers: {
                "Accept":"application/json",
                 "Content-Type": "application/json"
            }
        }).then(function(response){
            window.location.href = "/listagem"
        }).catch(function(error){
            console.log(error);
            console.log(dados);
        });

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }

    }


    return (
        <div>
            <Header />
            <main className={styles.main} >
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'> Cadastrar Cliente</h5>
                            <form onSubmit={cadastroUsuario} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text"
                                        name='nome'
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type='text'
                                        name='email'
                                        className='form-control'
                                        onChange={handleState}
                                        required />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text"
                                        name='cpf'
                                        className='form-control'
                                        onChange={handleState}
                                        required />

                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="text"
                                        name="password"
                                        className='form-control'
                                        onChange={handleState}
                                        required
                                    />
                                </div>
                                <div className='col-12'>
                                    <button
                                        type='submit'
                                        className='btn btn-success btn-sm'>Cadastrar</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}

export default Cadastro;