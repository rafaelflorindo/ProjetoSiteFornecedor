import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MapPin, Package, ArrowRight } from 'lucide-react';
import api from '../../services/api';

import './index.css';

//npm install lucide-react
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function Fornecedores() {
    const [fornecedores, setFornecedores] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        carregaDados();
    }, []);

    const carregaDados = async () => {
        try {
            setCarregando(true);
            const resFornecedores = await api.get("/api/fornecedores");
            await delay(1500); // Delay reduzido para uma sensação mais ágil
            setFornecedores(resFornecedores.data);
        } catch (error) {
            console.log("Erro: " + error);
        } finally {
            setCarregando(false);
        }
    };

    const verDetalhes = (fornecedor) => {
        // Navega para a rota de detalhes passando o ID e os dados do fornecedor
        navigate(`/fornecedor/${fornecedor.id}`, { state: { fornecedor } });
    };

    return (
        <div className="fornecedores-container">
            <div className="fornecedores-content">
                <div className="fornecedores-topo">
                    <h1>Fornecedores</h1>
                    <button className="btn-adicionar" onClick={() => navigate('/cadastrar-fornecedor')}>
                        <Plus size={28} />
                    </button>
                </div>

                {carregando ? (
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <p>Buscando parceiros...</p>
                    </div>
                ) : (
                    <div className="fornecedores-grid">
                        {fornecedores.map(item => (
                            <div 
                                key={item.id} 
                                className="fornecedor-card"
                                onClick={() => verDetalhes(item)}
                            >
                                <div className="card-header">
                                    <div className="icon-box">
                                        <Package size={24} color="darkgreen" />
                                    </div>
                                    <span className="id-tag">#{item.id}</span>
                                </div>
                                
                                <div className="card-body">
                                    <h3>{item.nome}</h3>
                                    <div className="info-row">
                                        <MapPin size={16} />
                                        <span>{item.cidade}</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <span>Ver itens e detalhes</span>
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}