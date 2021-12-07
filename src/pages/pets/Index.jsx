import React, { useState, useEffect } from 'react';
import styles from '../../styles/pet.module.css';
import cat from '../../assets/cat2.svg';
import dog from '../../assets/dog1.svg';
import bird from '../../assets/bird2.svg';
import rabbit from '../../assets/rabbit.svg';
import reptile from '../../assets/reptile.svg';
import { GoLocation } from 'react-icons/go';
import Modal from '../../Modal/Modal';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Index() {

    const { id } = useParams()
    const [pet, setPet] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchPetById = async () => {
        setLoading(true)
        try {
            const request = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`)
            const data = await request.json()
            setPet(data.pets)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
        }
    }


    useEffect(() => {
        window.scroll(0, 0)
        fetchPetById()
    },
        // eslint-disable-next-line
        [])
    const [show, setShow] = useState(false)

    const showModalHandler = () => {
        setShow(!show);
    }
    return (
        <>
        <ToastContainer/>
        {
            loading? <h1>Loading...</h1> :    <section className="uk-padding-small">
            {
                pet.map((item, index) => {
                    return (
                        <div key={index} className={styles.petWrapper}>
                            <div className={`uk-flex uk-flex-middle uk-flex-between uk-margin-small-bottom`}>
                                <div className={`uk-flex uk-flex-middle`}>
                                    <div className={`${styles.petInit} uk-margin-small-right`}>
                                        <p className={`uk-margin-remove ${styles.initials}`}>{item.name[0]}</p>
                                    </div>
                                    <div>
                                        <h4 className={`uk-margin-remove ${styles.initials}`}>{item.name}</h4>
                                        <span className={styles.city}>{`${item.breed} ${item.animal}`}</span>
                                    </div>
                                </div>
                                <div> <img src={
                                    item.animal === 'dog' ?
                                        dog : item.animal === 'bird' ?
                                            bird : item.animal === 'cat' ?
                                                cat : item.animal === 'rabbit' ?
                                                    rabbit : item.animal === 'reptile' ?
                                                        reptile : null
                                } alt="animal-icon" /></div>

                            </div>
                            <div class={`${styles.cardBorder2} uk-card uk-card-small uk-card-default`}>
                                <div class="uk-margin-small-bottom">
                                    <h4 class={`${styles.petName} uk-margin-remove`}>{item.name} Pictures</h4>
                                </div>
                                <div class={`${styles.cardBorder3} uk-card uk-card-small uk-card-default`}>
                                    <div class={styles.imgHeight}>
                                        <img className={styles.imgWidth} src={item.images[0]} alt="animal-img" />
                                    </div>
                                </div>

                                <div className={`uk-margin-small-top ${styles.imgGrid}`}>
                                    <div>
                                        <img className={styles.imgWidth} src={item.images[0]} alt={`${item.name} placeholder`} />
                                    </div>
                                    <div>
                                        <img className={styles.imgWidth} src={item.images[1]} alt={`${item.name} placeholder`} />
                                    </div>
                                    <div>
                                        <img className={styles.imgWidth} src={item.images[2]} alt={`${item.name} placeholder`} />
                                    </div>
                                    <div>
                                        <img className={styles.imgWidth} src={item.images[3]} alt={`${item.name} placeholder`} />
                                    </div>
                                </div>
                                {/* Desc */}
                                <div class={`${styles.cardBorder3} uk-card uk-card-small uk-margin-small-top uk-card-default`}>
                                    <h5 className={`${styles.title} uk-margin-remove`}>Description</h5>
                                    <p className={`uk-margin-remove ${styles.petDesc}`}>
                                        {item.description}

                                    </p>
                                    <div className={`${styles.Box} uk-margin-small-bottom`}>
                                        <div className={`uk-flex uk-flex-middle`}>
                                            <GoLocation size={13} />
                                            <span className={`uk-margin-small-left ${styles.locDesc}`}>{`${item.city}, ${item.state}`}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={` ${styles.petCta}`}>
                                    <button onClick={showModalHandler} className={styles.details}>Adopt {item.name}</button>
                                    {show && <Modal show={show} onClose={showModalHandler}>
                                        <div class={`${styles.cardBorder4} uk-padding-small uk-card uk-card-small uk-margin-small-top uk-card-default`}>
                                            <div className={`${styles.yt}`}>
                                                <h5 className={`uk-margin-remove ${styles.que}`}>Are you you want to adopt <span className={`${styles.subx}`}>{item.name}</span>?</h5>
                                                <div className={`uk-margin-small-top uk-text-center`}>
                                                    <button className={`uk-margin-small-right ${styles.ctaAdopt}`}>Adopt {item.name}</button>
                                                    <button onClick={showModalHandler} className={styles.ctaCancel}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>}

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
        }
     
        </>
    )
}

export default Index