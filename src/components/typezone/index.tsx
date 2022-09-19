import { FC } from "react";
import style from "./index.module.scss";

type Props = {

}

const ContainerTypeZone: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.containerTypeZone}>Ciao</div>
        </div>
    )
}

export default ContainerTypeZone;