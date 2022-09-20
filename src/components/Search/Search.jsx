import styles from './Search.module.css'

function Search(){
    return(
        <div className={styles.search}>
            <img src="/resurce/search.svg" alt="" />
            <input type="text" placeholder='Search'/>
        </div>
    )
}

export default Search