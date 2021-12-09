import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/home.module.css';
import dog from '../assets/dog1.svg';
import cat from '../assets/cat2.svg';
import bird from '../assets/bird2.svg';
import rabbit from '../assets/rabbit.svg';
import reptile from '../assets/reptile.svg';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../context/ThemeContext';


function Pets({ setLoading }) {
    const {theme} = useContext(ThemeContext)

    const [activeAnimal, setActiveAnimal] = useState('dog')
    const [filteredAnimal, setFilteredAnimal] = useState([])
    const [activeTab, setActiveTab] = useState('dog')


    const FilterRequest = async () => {
        setLoading(true)
        try {
            const request = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${activeAnimal}`)
            const data = await request.json()
            setFilteredAnimal(data.pets)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        FilterRequest()
    },
        // eslint-disable-next-line
        [activeAnimal])

    const birdHandler = () => {
        setActiveAnimal('bird')
        setActiveTab('bird')
    }
    const catHandler = () => {
        setActiveAnimal('cat')
        setActiveTab('cat')
    }
    const dogHandler = () => {
        setActiveAnimal('dog')
        setActiveTab('dog')
    }
    const rabbitHandler = () => {
        setActiveAnimal('rabbit')
        setActiveTab('rabbit')
    }
    const reptileHandler = () => {
        setActiveAnimal('reptile')
        setActiveTab('reptile')
    }
    return (
        <>
            <ToastContainer />
            <div className="uk-margin-large-top ">
                <h3 className={`${ styles.heading2} ${theme === 'light'? '' : styles.lightText}`}>Browse Through Pets Types</h3>
                <div className={styles.pets}>
                    <button onClick={dogHandler} type="button" className={`${styles.petBox} ${theme === 'light'? '' : styles.togglerBg} ${activeTab === 'dog' ? styles.petBoxActive : ''}`}>
                        <img src={dog} alt="animal-icon" />
                        <p className={`uk-margin-remove ${theme === 'light'? '' : styles.lightTextSub}`}>Dogs</p>
                    </button>
                    <button onClick={catHandler} type="button" className={`${styles.petBox} ${theme === 'light'? '' : styles.togglerBg} ${activeTab === 'cat' ? styles.petBoxActive : ''}`}>
                        <img src={cat} alt="animal-icon" />
                        <p className={`uk-margin-remove ${theme === 'light'? '' : styles.lightTextSub}`}>Cat</p>
                    </button>
                    <button onClick={birdHandler} type="button" className={`${styles.petBox} ${theme === 'light'? '' : styles.togglerBg} ${activeTab === 'bird' ? styles.petBoxActive : ''}`}>
                        <img src={bird} alt="animal-icon" />
                        <p className={`uk-margin-remove ${theme === 'light'? '' : styles.lightTextSub}`}>Bird</p>
                    </button>
                    <button onClick={rabbitHandler} type="button" className={`${styles.petBox} ${theme === 'light'? '' : styles.togglerBg} ${activeTab === 'rabbit' ? styles.petBoxActive : ''}`}>
                        <img src={rabbit} alt="animal-icon" />
                        <p className={`uk-margin-remove ${theme === 'light'? '' : styles.lightTextSub}`}>Rabbit</p>
                    </button>
                    <button onClick={reptileHandler} type="button" className={`${styles.petBox} ${theme === 'light'? '' : styles.togglerBg} ${activeTab === 'reptile' ? styles.petBoxActive : ''}`}>
                        <img src={reptile} alt="animal-icon" />
                        <p className={`uk-margin-remove ${theme === 'light'? '' : styles.lightTextSub}`}>Reptile</p>
                    </button>
                </div>
                <div>
                    <h3 className={`${styles.header} ${theme === 'light'? '' : styles.lightTextSub2}`}>{activeTab}s</h3>
                    <div className="uk-grid uk-margin-large-top">
                        {activeTab ? (
                            filteredAnimal.map((item, index) => {
                                return (
                                    <div key={index} className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
                                        <div className={`${styles.cardBorder} ${theme === 'light'? '' : styles.cardDark} uk-card uk-card-small uk-card-default`}>
                                            <div>
                                                <img src={item.images[0]} className={`${styles.img}`} alt="dog" />
                                            </div>
                                            <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                                <div>
                                                    <h4 className={`${styles.cardSub} uk-margin-small-top uk-margin-remove-bottom ${theme === 'light'? '' : styles.lightText}`}>{item.name}</h4>
                                                    <p className={`${styles.cardDesc} uk-margin-remove ${theme === 'light'? '' : styles.lightTextSub}`}>{item.breed}</p>
                                                </div>
                                                <div>
                                                <img src={item.animal === 'dog'
                                                ? dog : item.animal === 'cat' ?
                                                    cat : item.animal === 'bird' ? bird :
                                                        item.animal === 'rabbit' ?
                                                            rabbit : item.animal === 'reptile' ?
                                                                reptile : null} alt="animal-icon" />
                                                </div>
                                            </div>
                                            <div className={`$ uk-flex uk-flex-between uk-flex-middle`}>
                                                <div className={`uk-margin-small-top`}>
                                                    <Link to={`/pet/${item.id}`}>
                                                        <button className={`${styles.details}`}>View Details</button>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className={`uk-flex uk-flex-middle`}>
                                                        <span className="uk-margin-small-right"><GoLocation size={15} /></span>
                                                        <p className={`uk-margin-remove ${styles.locText}`}>{`${item.city}, ${item.state}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pets