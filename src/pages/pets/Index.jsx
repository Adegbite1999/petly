import React, { useState,useEffect } from 'react';
import styles from '../../styles/pet.module.css';
import dog from '../../assets/dog1.svg';
import dog2 from '../../assets/Rectangle 594.png';
import placeholder1 from '../../assets/Rectangle 591.png';
import placeholder2 from '../../assets/Rectangle 599.png';
import placeholder3 from '../../assets/Rectangle 600.png';
import placeholder4 from '../../assets/Rectangle 601.png';
import { GoLocation } from 'react-icons/go';
import Modal from '../../Modal/Modal';

function Index() {

    useEffect(() =>{
        return window.scroll(0,0)
    })
    const [show, setShow] = useState(false)

    const showModalHandler = () => {
        setShow(!show);
    }
    return (
        <section className="uk-padding-small">
            <div className={styles.petWrapper}>
                <div className={`uk-flex uk-flex-middle uk-flex-between uk-margin-small-bottom`}>
                    <div className={`uk-flex uk-flex-middle`}>
                        <div className={`${styles.petInit} uk-margin-small-right`}>
                            <p className={`uk-margin-remove ${styles.initials}`}>L</p>
                        </div>
                        <div>
                            <h4 className={`uk-margin-remove ${styles.initials}`}>Luna</h4>
                            <span className={styles.city}>Havenesa Dog</span>
                        </div>
                    </div>
                    <div> <img src={dog} alt="animal-icon" /></div>

                </div>
                <div class={`${styles.cardBorder2} uk-card uk-card-small uk-card-default`}>
                    <div class="uk-margin-small-bottom">
                        <h4 class={`${styles.petName} uk-margin-remove`}>Luna Pictures</h4>
                    </div>
                    <div class={`${styles.cardBorder3} uk-card uk-card-small uk-card-default`}>
                        <div>
                            <img className={styles.imgWidth} src={dog2} alt="animal-img" />
                        </div>
                    </div>

                    <div className={`uk-margin-small-top ${styles.imgGrid}`}>
                        <div>
                            <img className={styles.imgWidth} src={placeholder1} alt="dog" />
                        </div>
                        <div>
                            <img className={styles.imgWidth} src={placeholder2} alt="dog" />
                        </div>
                        <div>
                            <img className={styles.imgWidth} src={placeholder3} alt="dog" />
                        </div>
                        <div>
                            <img className={styles.imgWidth} src={placeholder4} alt="dog" />
                        </div>
                    </div>
                    {/* Desc */}
                    <div class={`${styles.cardBorder3} uk-card uk-card-small uk-margin-small-top uk-card-default`}>
                        <h5 className={`${styles.title} uk-margin-remove`}>Description</h5>
                        <p className={`uk-margin-remove ${styles.petDesc}`}>
                            Clina-Lancet Laboratories is a member of the Lancet Group of Laboratories in 14 African countries.
                            We are ISO 15189:2012 accredited, operating as a 24-hour laboratory in 8 locations in Nigeria across Lagos,

                        </p>
                        <div className={`${styles.Box} uk-margin-small-bottom`}>
                            <div className={`uk-flex uk-flex-middle`}>
                                <GoLocation size={13} />
                                <span className={`uk-margin-small-left ${styles.locDesc}`}>Charlotte, NC</span>
                            </div>
                        </div>
                    </div>
                    <div className={` ${styles.petCta}`}>
                        <button onClick={showModalHandler} className={styles.details}>Adopt Luna</button>
                        {show && <Modal show={show} onClose={showModalHandler}>
                            <div class={`${styles.cardBorder4} uk-padding-small uk-card uk-card-small uk-margin-small-top uk-card-default`}>
                                <div className={`${styles.yt}`}>
                                    <h5 className={`uk-margin-remove ${styles.que}`}>Are you you want to adopt <span className={`${styles.subx}`}>Luna</span>?</h5>
                                    <div className={`uk-margin-small-top uk-text-center`}>
                                        <button className={`uk-margin-small-right ${styles.ctaAdopt}`}>Adopt Luna</button>
                                        <button onClick={showModalHandler} className={styles.ctaCancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index