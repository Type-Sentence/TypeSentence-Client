import { FC } from "react";
import GameDuration from "./header/gameDuration";
import LogoContainer from "./header/logoContainer";
import ModeSelector from "./header/modeSelector";
import style from "./index.module.scss";

type Props = {

}

const ContainerTypeZone: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.containerTypeZone}>
                <div className={style.header}>
                    <LogoContainer />
                    <ModeSelector />
                    <GameDuration />
                </div>
                <div className={style.typeZone}></div>
            </div>
        </div>
    )
}

export default ContainerTypeZone;