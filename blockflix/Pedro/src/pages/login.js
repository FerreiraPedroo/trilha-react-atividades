import { useContext } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import {
    ContainerPage, ContainerLogin,
    ButtonLogin,
    TextLoginTitle, TextLoginEntrar, TextLoginError
} from "../styles/login.style";
import { CartMovieContext } from "../context/cartmoviescontext";


export default function Login() {
    const { loged, setLoged } = useContext(CartMovieContext);

    const initialValues = {
        user: ""
    }
    const validate = values => {
        const errors = {};
        if (!values.user) {
            errors.user = "Informe o seu usuário";
        }
        if (!values.password) {
            errors.password = "Digite a senha";
        }
        return errors;
    }
    const onSubmit = values => {
        if (loged === null) {
            sessionStorage.setItem("login", JSON.stringify(values));
            setLoged(JSON.stringify(values))
        }
    }

    return (
        <>
            <ContainerPage>
                <ContainerLogin>
                    <TextLoginTitle>BLOCKFLIX</TextLoginTitle>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmit}
                    >
                        <Form className="globalstyle-css-login-form">
                            <TextLoginEntrar>Entrar</TextLoginEntrar>
                            <Field
                                className="globalstyle-css-login-inputText"
                                id="user"
                                name="user"
                                type="text"
                                placeholder="Usuário"                                
                            />
                            <TextLoginError><ErrorMessage name="user" />&nbsp;</TextLoginError>
                            <Field
                                className="globalstyle-css-login-inputText"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Senha"
                            />
                            <TextLoginError><ErrorMessage name="password" />&nbsp;</TextLoginError>
                            <ButtonLogin type="submit">Entrar</ButtonLogin>
                        </Form>
                    </Formik>
                </ContainerLogin>
            </ContainerPage>
        </>
    )
}