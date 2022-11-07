import React from 'react';
import * as Yup from "yup";
import { Field, Formik, Form} from 'formik';



const PokemonForm = (props) => {

    const { nombre, entrenador,tipo1,tipo2,tipo3, rating, content, creatorName, onSubmitProp } = props;
    
    return (
        <div>
            <Formik
        initialValues={{
          nombre: nombre,
          entrenador:entrenador,
          tipo1: tipo1,
          tipo2: tipo2,
          tipo3: tipo3,
          rating:rating,
          content:content,
          creatorName: creatorName

        }}

        validationSchema={Yup.object().shape({
            nombre: Yup.string()
            .min(4,"El nombre es muy corto")
            .max(15,"El nombre es muy largo")
            .required("Por favor ingresa un nombre"),
            entrenador: Yup.string()
            .min(4,"El entrenador es muy corto")
            .max(15,"El entrenador es muy largo")
            .required("Por favor ingresa un nombre"),
            tipo1: Yup.string()
            .min(4,"El tipo1 es muy corto")
            .max(15,"El tipo1 es muy largo")
            .required("Por favor ingresa un tipo1"),
            tipo2: Yup.string()
            .min(4,"El tipo2 es muy corto")
            .max(15,"El tipo2 es muy largo")
            .required("Por favor ingresa un tipo2"),
            tipo3: Yup.string()
            .min(4,"El tipo3 es muy corto")
            .max(15,"El tipo3 es muy largo")
            .required("Por favor ingresa un tipo3"),           
            rating:Yup.number(),
            content:Yup.string()
            .min(10, "El contenido de la reseña es muy corto")
            .required("Por favor ingresa el contenido de la reseña"),
            creatorName: Yup.string()
            .min(4,"El creatorName es muy corto")
            .max(15,"El creatorName es muy largo")
            .required("Por favor ingresa un creatorName"),
        })}

        onSubmit={(values,{setSubmitting})=>{
            console.log("INFO DEL FORMIK",values);
            onSubmitProp(values);
        }}

      >
        {({errors,touched,handleSubmit})=>{
            return(
                <div>
                    <h2>FORMULARIO DE POKEMON</h2>
                    <Form>
                        <label htmlFor="nombre" >Nombre</label>
                        <Field id="nombre" type="text" placeholder="Ingresa un nombre" name="nombre" className="form-control" />
                        {errors.nombre && touched.nombre && <p> {errors.nombre} </p>}

                        <label htmlFor="entrenador" >Entrenador</label>
                        <Field id="entrenador" type="text" placeholder="Ingresa un entrenador" name="entrenador" className="form-control" />
                        {errors.entrenador && touched.entrenador && <p> {errors.entrenador} </p>}

                        <label htmlFor="tipo1" >Tipo1</label>
                        <Field id="tipo1" type="text" placeholder="Ingresa un tipo1" name="tipo1" className="form-control" />
                        {errors.tipo1 && touched.tipo1 && <p> {errors.tipo1} </p>}

                        <label htmlFor="tipo2" >tipo2</label>
                        <Field id="tipo2" type="text" placeholder="Ingresa un tipo2" name="tipo2" className="form-control" />
                        {errors.tipo2 && touched.tipo2 && <p> {errors.tipo2} </p>}

                        <label htmlFor="tipo3" >tipo3</label>
                        <Field id="tipo3" type="text" placeholder="Ingresa un tipo3" name="tipo3" className="form-control" />
                        {errors.tipo3 && touched.tipo3 && <p> {errors.tipo3} </p>}
                        

                        <label htmlFor="rating" >Rating de la reseña</label>
                        <Field id="rating" type="number" as="select" className="form-select" name="rating">
                          <option value={1}>1 Estrella</option>
                          <option value={2}>2 Estrellas</option>
                          <option value={3}>3 Estrellas</option>
                          <option value={4}>4 Estrellas</option>
                          <option value={5}>5 Estrellas</option>
                        </Field>
                        {errors.rating && touched.rating && <p> {errors.rating} </p>}

                        <label htmlFor="content" >content</label>
                        <Field id="content" type="text" as="textarea" placeholder="Ingresa el contenido de la reseña" name="content" className="form-control" />
                        {errors.content && touched.content && <p> {errors.content} </p>}

                        <label htmlFor="creatorName" >Nombre del Autor</label>
                        <Field id="creatorName" type="text" placeholder="Ingresa el nombre de autor" name="creatorName" className="form-control" />
                        {errors.creatorName && touched.creatorName && <p> {errors.creatorName} </p>}

                        <button type="submit" disabled={Object.values(errors).length>0 || Object.values(touched).length===0} >ENVIAR</button>

                    </Form>
                </div>
            )
        }}


      </Formik>
            
        </div>
    );
}

export default PokemonForm;
