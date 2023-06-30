import { FC, FormEvent } from 'react'
import style from "./index.module.scss";
import { useState, useEffect } from "react"

type Props = {}


const LogoContainer: FC<Props> = () => {

    return (
        <div className={style.container}>
            <div className={style.logo}>Ciao</div>
        </div>
    )
}

export default LogoContainer