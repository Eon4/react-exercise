import style from './Wrapper.module.scss'

export function Wrapper({children, title}) {
    return (
        <>
            <h2 style={{textAlign: "center"}}>{title}</h2>
            <section className={style.wrapper}>
                {children}
            </section>
        </>
    )
}