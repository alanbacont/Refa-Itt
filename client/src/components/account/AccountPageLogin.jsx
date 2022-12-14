/* eslint-disable */

// react
import React, { useState, useContext, useEffect } from "react";

import { AuthContext } from "../../context/authContext";

import { toast } from "react-toastify";

// third-party
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// application
import PageHeader from "../shared/PageHeader";
import { Check9x7Svg } from "../../svg";

// data stubs
import theme from "../../data/theme";

import { CREATE_USER } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

import { useHistory } from "react-router-dom";

export default function AccountPageLogin() {
    const breadcrumb = [
        { title: "Inicio", url: "/" },
        { title: "Mi Cuenta", url: "/account" },
    ];

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [tipo, setTipo] = useState("Usuario");
    const [usuario, setUsuario] = useState();
    const [pass, setPass] = useState();
    const [passConfirm, setPassConfirm] = useState();

    const [createUser, { loading }] = useMutation(CREATE_USER);

    const navigate = useHistory();

    function addUser() {
        createUser({
            variables: {
                nombre: nombre,
                usuario: usuario,
                pass: pass,
                email: email,
                telefono: telefono,
                tipo: tipo,
            },
        });
    }

    const handleSubmit = (event) => {
        if (pass === passConfirm) {
            event.preventDefault();
            addUser();
            event.target.reset();
            toast.success("¡Usuario Creado!", {
                position: "bottom-center",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                onClose: navigate.push("/cuenta"),
            });
        } else {
            toast.error("¡Las contraseñas no coinciden!", {
                position: "bottom-center",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Login — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="Mi Cuenta" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="card flex-grow-1 mb-md-0">
                                <div className="card-body">
                                    <h3 className="card-title">Login</h3>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="login-email">Email</label>
                                            <input
                                                id="login-email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="login-password">Contraseña</label>
                                            <input
                                                id="login-password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Contraseña"
                                            />
                                            <small className="form-text text-muted">
                                                <Link to="/">Olvidé mi Contraseña</Link>
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <span className="form-check-input input-check">
                                                    <span className="input-check__body">
                                                        <input
                                                            id="login-remember"
                                                            type="checkbox"
                                                            className="input-check__input"
                                                        />
                                                        <span className="input-check__box" />
                                                        <Check9x7Svg className="input-check__icon" />
                                                    </span>
                                                </span>
                                                <label className="form-check-label" htmlFor="login-remember">
                                                    Recordarme
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-2 mt-md-3 mt-lg-4">
                                            Iniciar Sesión
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex mt-4 mt-md-0">
                            <div className="card flex-grow-1 mb-0">
                                <div className="card-body">
                                    <h3 className="card-title">Registrarse</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="register-name">Nombre</label>
                                            <input
                                                id="register-name"
                                                type="name"
                                                className="form-control"
                                                placeholder="Nombre"
                                                onChange={(e) => {
                                                    setNombre(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-email">Email</label>
                                            <input
                                                id="register-email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-user">Usuario</label>
                                            <input
                                                id="register-user"
                                                type="user"
                                                className="form-control"
                                                placeholder="Usuario"
                                                onChange={(e) => {
                                                    setUsuario(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-telefono">Teléfono</label>
                                            <input
                                                id="register-telefono"
                                                type="telefono"
                                                className="form-control"
                                                placeholder="Teléfono"
                                                onChange={(e) => {
                                                    setTelefono(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-password">Contraseña</label>
                                            <input
                                                id="register-password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Contraseña"
                                                onChange={(e) => {
                                                    setPass(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-confirm">Confirmar Contraseña</label>
                                            <input
                                                id="register-confirm"
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirmar Contraseña"
                                                onChange={(e) => {
                                                    setPassConfirm(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-2 mt-md-3 mt-lg-4">
                                            Registrar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
