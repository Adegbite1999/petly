import React from 'react'
import styles from '../styles/home.module.css'
import cat from '../assets/cat.jfif';
import dog from '../assets/dog.jfif';
import puppy from '../assets/puppy.jfif';
import bird from '../assets/bird.jfif';
import { BsSearch } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { FaDog } from 'react-icons/fa';
import { GiScales } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import Search from '../pages/Search'
import Pets from './Pets';

function Home() {
    return (
        <div>
        <div className={styles.wrapper}>
            <section className={`${styles.wrapperMain} uk-grid uk-padding-large`}>
                <div className="uk-width-1-1@s uk-width-1-2@m">
                    <div>
                        <span className={`${styles.intro} uk-margin-remove`}>Find Special pets</span>
                        <h1 className={`${styles.title} uk-margin-remove`}>Think you love pet?</h1>
                        <h2 className={`${styles.sub} uk-margin-remove`}>Adopt One.</h2>
                        <p className={`${styles.desc} uk-margin-remove`}>Pet Adoption is quickly becoming the preferred way to find a new dog,
                            puppy, cat or kitten.
                        </p>
                    </div>
                    <div className={styles.locCard}>
                        <form className={styles.location}>
                            <div className={styles.selectWrapper}>
                                <div className={styles.selectBox}>
                                    <span><GoLocation size={15} /></span>
                                    <select className={`${styles.select} uk-margin-small-left`}>
                                        <option>Location</option>
                                        <option>London</option>
                                    </select>
                                </div>
                                <div className={styles.selectBox}>
                                    <span><FaDog size={15} /></span>
                                    <select className={`${styles.select} uk-margin-small-left`}>
                                        <option>Animal</option>
                                        <option>Dog</option>
                                    </select>
                                </div>
                                <div className={styles.selectBox}>
                                    <span><GiScales size={15} /></span>
                                    <select className={`${styles.select} uk-margin-small-left`}>
                                        <option>Breed</option>
                                        <option>Sherpard</option>
                                    </select>
                                </div>
                            </div>
                            <div><button className={styles.ctaLoc}><BsSearch /></button></div>
                        </form>
                        <div className={styles.searchResult}>
                            <h4 className={`${styles.desc} uk-margin-remove`}>You may be looking for</h4>
                            <div className={styles.containerFilter}>
                                <div className={`uk-flex uk-flex-middle  ${styles.filter}`}>
                                    <p className="uk-margin-remove">Dogs</p>
                                    <button className={`${styles.cancel}`}><ImCancelCircle color='#0D75FF' /></button>
                                </div>
                                <div className={`uk-flex uk-item-middle ${styles.filter}`}>
                                    <p className="uk-margin-remove">Cats</p>
                                    <button className={`${styles.cancel}`}><ImCancelCircle color='#0D75FF' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.marginTop} uk-width-1-1@s uk-width-1-2@m`}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgBox}>
                            <img className={`${styles.img} `} src={cat} alt="cat" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.img} src={puppy} alt="puppy" />
                        </div>
                        <div className={styles.imgBox}>

                            <img className={styles.img} src={dog} alt="dog" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={`${styles.img}`} src={bird} alt="bird" />
                        </div>

                    </div>
                </div>

            </section>
        </div>
        <section className={styles.section2}>
            <Search/>
            <Pets/>
        </section>
        </div>
    )
}



export default Home
