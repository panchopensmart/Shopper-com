import React from 'react';
import styles from "../../../styles/account.module.scss";
import Chip from "@mui/material/Chip";
import MouseIcon from "@mui/icons-material/Mouse";
import FactoryAccountState from "../../../store/userAccount/FactoryAccountState";
import {observer} from "mobx-react-lite";
import Image from "next/image";

const HandleRenderInfo = observer(() => {

    const avatarStyles = {
        width: "200px",
        borderRadius: "20px"
    }

    return (
        <div className={styles.descriptionBlock}>
            {
                FactoryAccountState.handleClickUserState
                    ? <div className={styles.HandleInnerBlock}>
                        {FactoryAccountState.handleClickUserState.map((e) => (
                            <>
                                {
                                    e[0] === "image"
                                        ? <Image src={e[1]} alt="" style={avatarStyles}/>
                                        : <p><Chip label={e[0]}></Chip> - {e[1]}</p>
                                }
                            </>
                        ))}
                    </div>
                    : <Chip size="small" icon={<MouseIcon/>} label="Кликните слева по плитке..." variant="outlined"
                            style={{width: "250px", fontWeight: "bold"}}/>
            }
        </div>
    );
})

export default HandleRenderInfo;