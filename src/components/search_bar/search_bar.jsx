import React, { useRef, memo } from 'react';
import styles from '../search_bar/search_bar.module.css'

const SearchBar = memo(
    ({ onSearch }) => {
        const inputRef = useRef();
        const handleSearch = () => {
            const value = inputRef.current.value
            // console.log(value)
            onSearch(value);
        }
        const onClick = () => {
            handleSearch();
        }
        const onKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        }
        return (
            <header className={styles.container}>
                <div className={styles.logoBox}>
                    <img className={styles.logoIcon} src={'/logo.png'} alt='logo' />
                    <p className={styles.logoName}>YOUTUBE</p>
                </div>
                <div className={styles.textContainer}>
                    <input
                        className={styles.input}
                        ref={inputRef} //현재 input에 있는 단어를 알기위해
                        type="search"
                        placeholder='Search...'
                        onKeyPress={onKeyPress}
                    />
                    <button className={styles.button} type="submit" onClick={onClick}>
                        <img className={styles.buttonImg} src={'/magnifier.png'} alt='click' />
                    </button>
                </div>
                <div className={styles.infoContainer}>
                    <img className={styles.infoImg} src={'/bell.png'} alt='info' />
                </div>
            </header>
        )
    }
);

export default SearchBar;

// const onClick = () => {
//     console.log('클릭!!')
// }
// const onKeyPress = () => {
//     console.log('엔터!')
// }