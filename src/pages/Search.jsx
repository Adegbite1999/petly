import React,{useContext} from 'react';
import styles from '../styles/home.module.css';
import dog from '../assets/dog1.svg';
import bird from '../assets/bird2.svg';
import cat from '../assets/cat2.svg';
import rabbit from '../assets/rabbit.svg';
import reptile from '../assets/reptile.svg';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import {ThemeContext} from '../context/ThemeContext'



function Search({ pets }) {
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <h3 className={`${styles.heading} ${theme === 'light'? '' : styles.selectDark}`}>Search Result</h3>
            <div className="uk-grid">
                {
                    pets.length === 0 ? <h1 className={styles.error}>No Pets found</h1> : pets.map((pet, index) => {
                        return (
                            <div key={index} className="uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-margin-small-top">
                                <div class={`${styles.cardBorder} ${theme === 'light'? '' : styles.cardDark} uk-card uk-card-small uk-card-default`}>
                                    <div>
                                        <img src={pet.images[0]} className={`${styles.img}`} alt="dog" />
                                    </div>
                                    <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                        <div>
                                            <h4 className={`${styles.cardSub}  uk-margin-small-top uk-margin-remove-bottom ${theme === 'light'? '' : styles.lightText}`}>{pet.name}</h4>
                                            <p className={`${styles.cardDesc} uk-margin-remove ${theme === 'light'? '' : styles.lightTextSub}`}>{pet.breed}</p>
                                        </div>
                                        <div>
                                            <img src={pet.animal === 'dog'
                                                ? dog : pet.animal === 'cat' ?
                                                    cat : pet.animal === 'bird' ? bird :
                                                        pet.animal === 'rabbit' ?
                                                            rabbit : pet.animal === 'reptile' ?
                                                                reptile : null} alt="animal-icon" />
                                        </div>
                                    </div>
                                    <div className={`$ uk-flex uk-flex-between uk-flex-middle`}>
                                        <div className={`uk-margin-small-top`}>
                                            <Link to={`/pet/${pet.id}`}>
                                                <button className={`${styles.details}`}>View Details</button>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className={`uk-flex uk-flex-middle`}>
                                                <span className="uk-margin-small-right"><GoLocation size={15} /></span>
                                                <p className={`uk-margin-remove ${styles.locText}`}>{`${pet.city}, ${pet.state}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Search