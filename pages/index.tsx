import type { NextPage } from 'next'

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
    const data = await fetch(`https://thronesapi.com/api/v2/Characters`).then(
        (res) => res.json()
    );
    const characters = data.map((item: any) => ({
        images: item.imageUrl,
        names: item.title,
    }));

    return {
        props: {
            characters,
        },
    };
}

const Home: NextPage = (props: any) => {
    const { characters } = props;

    return (
        <div className={styles.container}>
            <ol>
                {characters.map((item: any) => (
                    <li key={item}>
                        <img src={item.images}></img>
                        <h4>{item.names}</h4>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Home
