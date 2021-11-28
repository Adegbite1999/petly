import React from 'react';
import styles from '../styles/home.module.css';
import dog from '../assets/dog1.svg';
import cat from '../assets/cat2.svg';
import bird from '../assets/bird2.svg';
import rabbit from '../assets/rabbit.svg';
import reptile from '../assets/reptile.svg';
import placeholder from '../assets/Rectangle.png';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';


function Pets() {
    return (
        <div className="uk-margin-large-top ">
            <h3 className={styles.heading2}>Browse Through Pets Types</h3>
            <div className={styles.pets}>
                <button className={styles.petBox}>
                    <img src={dog} alt="animal-icon" />
                    <p className='uk-margin-remove'>Dogs</p>
                </button>
                <button className={styles.petBox}>
                    <img src={cat} alt="animal-icon" />
                    <p className='uk-margin-remove'>Cat</p>
                </button>
                <button className={styles.petBox}>
                    <img src={bird} alt="animal-icon" />
                    <p className='uk-margin-remove'>Bird</p>
                </button>
                <button className={styles.petBox}>
                    <img src={rabbit} alt="animal-icon" />
                    <p className='uk-margin-remove'>Rabbit</p>
                </button>
                <button className={styles.petBox}>
                    <img src={reptile} alt="animal-icon" />
                    <p className='uk-margin-remove'>Reptile</p>
                </button>
            </div>
            <div className="uk-grid uk-margin-large-top">
                <div className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
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
                </div>
                
                <div className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
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
                </div>
                <div className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
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
                </div>
            </div>
        </div>
    )
}

export default Pets