import React, { useState, useEffect } from 'react';
import styles from '../styles/home.module.css';
import dog from '../assets/dog1.svg';
import cat from '../assets/cat2.svg';
import bird from '../assets/bird2.svg';
import rabbit from '../assets/rabbit.svg';
import reptile from '../assets/reptile.svg';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';


function Pets({ setLoading }) {

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
            throw error
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
        <div className="uk-margin-large-top ">
            <h3 className={styles.heading2}>Browse Through Pets Types</h3>
            <div className={styles.pets}>
                <button onClick={dogHandler} type="button" className={`${styles.petBox} ${activeTab === 'dog'? styles.petBoxActive : ''}`}>
                    <img src={dog} alt="animal-icon" />
                    <p className='uk-margin-remove'>Dogs</p>
                </button>
                <button onClick={catHandler} type="button" className={`${styles.petBox} ${activeTab === 'cat'? styles.petBoxActive : ''}`}>
                    <img src={cat} alt="animal-icon" />
                    <p className='uk-margin-remove'>Cat</p>
                </button>
                <button onClick={birdHandler} type="button" className={`${styles.petBox} ${activeTab === 'bird'? styles.petBoxActive : ''}`}>
                    <img src={bird} alt="animal-icon" />
                    <p className='uk-margin-remove'>Bird</p>
                </button>
                <button onClick={rabbitHandler} type="button" className={`${styles.petBox} ${activeTab === 'rabbit'? styles.petBoxActive : ''}`}>
                    <img src={rabbit} alt="animal-icon" />
                    <p className='uk-margin-remove'>Rabbit</p>
                </button>
                <button onClick={reptileHandler} type="button" className={`${styles.petBox} ${activeTab === 'reptile'? styles.petBoxActive : ''}`}>
                    <img src={reptile} alt="animal-icon" />
                    <p className='uk-margin-remove'>Reptile</p>
                </button>
            </div>
            <div>

                {
                    activeTab === 'dog' ? <h3 className={styles.header}>Dogs</h3> :
                        activeTab === 'cat' ? <h3 className={styles.header}>Cats</h3> :
                            activeTab === 'bird' ? <h3 className={styles.header}>Birds</h3>
                                : activeTab === 'rabbit' ? <h3 className={styles.header}>Rabbits</h3> :
                                    activeTab === 'reptile' ? <h3 className={styles.header}>Reptile</h3> : null
                }
                <div className="uk-grid uk-margin-large-top">

                    {
                        activeTab === 'dog' ? (
                            filteredAnimal.map((item, index) => {
                                return (
                                    <div key={index} className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
                                        <div className={`${styles.cardBorder} uk-card uk-card-small uk-card-default` }>
                                            <div>
                                                <img src={item.images[0]} className={`${styles.img}`} alt="dog" />
                                            </div>
                                            <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                                <div>
                                                    <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>{item.name}</h4>
                                                    <p className={`${styles.cardDesc} uk-margin-remove`}>{item.breed}</p>
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
                                                        <p className={`uk-margin-remove ${styles.locText}`}>{`${item.city}, ${item.state}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                            : activeTab === 'cat' ? (
                                filteredAnimal.map((item, index) => {
                                    return (
                                        <div key={index} className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
                                            <div class={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                                                <div>
                                                    <img src={item.images[0]} className={`${styles.img}`} alt="dog" />
                                                </div>
                                                <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                                    <div>
                                                        <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>{item.name}</h4>
                                                        <p className={`${styles.cardDesc} uk-margin-remove`}>{item.breed}</p>
                                                    </div>
                                                    <div>
                                                        <img src={cat} alt="animal-icon" />
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
                                                            <p className={`uk-margin-remove ${styles.locText}`}>{`${item.city}, ${item.state}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            ) : activeTab === 'bird' ? (
                                filteredAnimal.map((item, index) => {
                                    return (
                                        <div key={index} className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
                                            <div className={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                                                <div>
                                                    <img src={item.images[0]} className={`${styles.img}`} alt="dog" />
                                                </div>
                                                <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                                    <div>
                                                        <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>{item.name}</h4>
                                                        <p className={`${styles.cardDesc} uk-margin-remove`}>{item.breed}</p>
                                                    </div>
                                                    <div>
                                                        <img src={bird} alt="animal-icon" />
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
                                                            <p className={`uk-margin-remove ${styles.locText}`}>{`${item.city}, ${item.state}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : activeTab === 'rabbit' ? (
                                filteredAnimal.map((item, index) => {
                                    return (
                                        <div key={index} className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
                                            <div className={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                                                <div>
                                                    <img src={item.images[0]} className={`${styles.img}`} alt="dog" />
                                                </div>
                                                <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                                    <div>
                                                        <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>{item.name}</h4>
                                                        <p className={`${styles.cardDesc} uk-margin-remove`}>{item.breed}</p>
                                                    </div>
                                                    <div>
                                                        <img src={rabbit} alt="animal-icon" />
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
                                                            <p className={`uk-margin-remove ${styles.locText}`}>{`${item.city}, ${item.state}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : activeTab === 'reptile' ? (
                                filteredAnimal.map((item, index) => {
                                    return (
                                        <div key={index} className="uk-width-1-1@s uk-width-1-3@m uk-margin-small-top">
                                            <div className={`${styles.cardBorder} uk-card uk-card-small uk-card-default`}>
                                                <div>
                                                    <img src={item.images[0]} className={`${styles.img}`} alt="dog" />
                                                </div>
                                                <div className={`uk-flex uk-flex-middle uk-flex-between`}>
                                                    <div>
                                                        <h4 className={`${styles.cardsub} uk-margin-small-top uk-margin-remove-bottom`}>{item.name}</h4>
                                                        <p className={`${styles.cardDesc} uk-margin-remove`}>{item.breed}</p>
                                                    </div>
                                                    <div>
                                                        <img src={reptile} alt="animal-icon" />
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
    )
}

export default Pets