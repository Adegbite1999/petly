import React from 'react';
import styles from '../styles/home.module.css';
// import placeholder from '../assets/Rectangle.png';
import dog from '../assets/dog1.svg';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';



function Search({pets}) {
    return (
        <div>
            <h3 className={styles.heading}>Search Result</h3>
            <div className="uk-grid">
                {
                    pets.map((pet, index) =>{
                        return(
                            <div key={index} className="uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-margin-small-top">
                            <div class={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                                <div>
                                    <img src={pet.images[0]} className={`${styles.img}`} alt="dog" />
                                </div>
                                <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                    <div>
                                        <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>{pet.name}</h4>
                                        <p className={`${styles.cardDesc} uk-margin-remove`}>{pet.breed}</p>
                                    </div>
                                    <div>
                                        <img src={dog} alt="animal-icon" />
                                    </div>
                                </div>
                                <div className={`$ uk-flex uk-flex-between uk-flex-middle`}>
                                    <div className={`uk-margin-small-top`}>
                                        <Link to="/pet">
                                            <button className={`${styles.details}`}>View Details</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className={`uk-flex uk-flex-middle`}>
                                            <span className="uk-margin-small-right"><GoLocation /></span>
                                            <p className={`uk-margin-remove ${styles.locText}`}>{`${pet.city}, ${pet.state}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                {/* <div className="uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-margin-small-top">
                    <div class={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                        <div>
                            <img src={placeholder} className={`${styles.img}`} alt="dog" />
                        </div>
                        <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                            <div>
                                <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>Luna</h4>
                                <p className={`${styles.cardDesc} uk-margin-remove`}>Havenese</p>
                            </div>
                            <div>
                                <img src={dog} alt="animal-icon" />
                            </div>
                        </div>
                        <div className={`$ uk-flex uk-flex-between uk-flex-middle`}>
                            <div className={`uk-margin-small-top`}>
                                <Link to="/pet">
                                    <button className={`${styles.details}`}>View Details</button>
                                </Link>
                            </div>
                            <div>
                                <div className={`uk-flex uk-flex-middle`}>
                                    <span className="uk-margin-small-right"><GoLocation /></span>
                                    <p className={`uk-margin-remove ${styles.locText}`}>Seattle, WA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                {/* <div className="uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-margin-small-top">
                    <div class={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                        <div>
                            <img src={placeholder} className={`${styles.img}`} alt="dog" />
                        </div>
                        <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                            <div>
                            <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>Luna</h4>
                                <p className={`${styles.cardDesc} uk-margin-remove`}>Havenese</p>
                            </div>
                            <div>
                                <img src={dog} alt="animal-icon" />
                            </div>
                        </div>
                        <div className={`$ uk-flex uk-flex-between uk-flex-middle`}>
                            <div className={`uk-margin-small-top`}>
                            <Link to="/pet">
                                    <button className={`${styles.details}`}>View Details</button>
                                </Link>
                            </div>
                            <div>
                                <div className={`uk-flex uk-flex-middle`}>
                                    <span className="uk-margin-small-right"><GoLocation /></span>
                                    <p className={`uk-margin-remove ${styles.locText}`}>Seattle, WA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-margin-small-top">
                    <div class={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                        <div>
                            <img src={placeholder} className={`${styles.img}`} alt="dog" />
                        </div>
                        <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                            <div>
                            <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>Luna</h4>
                                <p className={`${styles.cardDesc} uk-margin-remove`}>Havenese</p>
                            </div>
                            <div>
                                <img src={dog} alt="animal-icon" />
                            </div>
                        </div>
                        <div className={`$ uk-flex uk-flex-between uk-flex-middle`}>
                            <div className={`uk-margin-small-top`}>
                            <Link to="/pet">
                                    <button className={`${styles.details}`}>View Details</button>
                                </Link>
                            </div>
                            <div>
                                <div className={`uk-flex uk-flex-middle`}>
                                    <span className="uk-margin-small-right"><GoLocation /></span>
                                    <p className={`uk-margin-remove ${styles.locText}`}>Seattle, WA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default Search