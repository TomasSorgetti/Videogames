import React from "react";
import axios from "axios";
import styles from "./Form.module.css"
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



import {getGenres} from "../../redux/actions";



function Form() {
  const dispatch = useDispatch();

  

  const allGenres = useSelector((state) => state.genres);
  

  useEffect(() => {
    dispatch(getGenres());
  }, []);


    const [form, setForm] = useState({
      name: "",
      description: "",
      background_image: "",
      released: "",
      rating: 0,
      platform: [],
      genres: [],
    });
    const [errors, setErrors] = useState({
      name: "",
      description: "",
      background_image: "",
      released: "",
      rating: "",
      platform: "",
      genres: "",
    });
  const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });

    }
    const validate = (form) => {
        if (form.description.length < 20) {   
            setErrors({ ...errors, description: "must contain 20 caracters" })
        }
        if (form.description.length > 20 || form.description.length === 0) setErrors({ ...errors, description: "" })
    }


    const submitHandler = (e) => {
      e.preventDefault()
      if (
        form.name &&
        form.description &&
        form.background_image &&
        form.released &&
        form.rating &&
        form.platform &&
        form.genres
      ) {
          axios
          .post("http://localhost:3001/videogames", form)
            .then(alert("You have created a new Videogame!")

            )
          .catch(alert("error, try again"));
      }


  }
  
    return (
      <div className={styles.formCont}>
        <div className={`${styles.formBe} ${styles.formBefore}`}>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.inputCont}>
              <div className={styles.labelCont}>
                <label className={styles.formLabel} htmlFor="">
                  Name:
                </label>
                <input
                  className={styles.formInput}
                  placeholder="Videogame Name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                />
              </div>
              <div className={styles.labelCont}>
                <label className={styles.formLabel} htmlFor="">
                  Description:
                </label>
                <input
                  className={styles.formInput}
                  placeholder="Description"
                  type="text"
                  name="description"
                  onChange={handleChange}
                />
                {errors.description && errors.description != "" && (
                  <span className={styles.error}>{errors.description}</span>
                )}
              </div>
              <div className={styles.labelCont}>
                <label className={styles.formLabel} htmlFor="">
                  Genres:
                </label>
                <select
                  className={styles.formSelect}
                  placeholder="genres"
                  type="text"
                  name="genres"
                  onChange={handleChange}
                >
                  {allGenres?.sort().map((gen) => (
                    <option name={gen.name} value={gen.name} key={gen.id}>
                      {gen.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.labelCont}>
                <label className={styles.formLabel} htmlFor="">
                  Platforms:
                </label>
                <select
                  className={styles.formSelect}
                  placeholder="Platforms"
                  type="text"
                  name="platform"
                  onChange={handleChange}
                >
                  <option name="Xbox Series S/X" value="Xbox Series S/X">
                    Xbox Series S/X
                  </option>
                  <option name="Xbox 360" value="Xbox 360">
                    Xbox 360
                  </option>
                  <option name="Xbox One" value="Xbox One">
                    Xbox One
                  </option>
                  <option name="pc" value="pc">
                    pc
                  </option>
                  <option name="PlayStation 3" value="PlayStation 3">
                    PlayStation 3
                  </option>
                  <option name="PlayStation 4" value="PlayStation 4">
                    PlayStation 4
                  </option>
                  <option name="PlayStation 5" value="PlayStation 5">
                    PlayStation 5
                  </option>
                </select>
              </div>
              <div className={styles.labelCont}>
                <label className={styles.formLabel} htmlFor="">
                  Rating:
                </label>
                <input
                  className={styles.formInput}
                  placeholder="Rating"
                  type="text"
                  name="rating"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.labelCont}>
                <label className={styles.formLabel} htmlFor="">
                  Date:
                </label>
                <input
                  className={styles.formInput}
                  placeholder="Date"
                  type="text"
                  name="released"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.labelCont}>
                <label className={styles.formLabel} htmlFor="">
                  Image:
                </label>
                <input
                  className={styles.formInput}
                  placeholder="Image URL"
                  type="text"
                  name="background_image"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.submitCont}>
              <button className={styles.formSubmit} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Form