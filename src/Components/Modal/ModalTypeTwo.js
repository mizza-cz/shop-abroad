import React, { useState } from "react";
import "./Modal.css";
import close from "../../img/close.svg";
import s from './ModalTypeOne.module.sass'
export  function ModalTypeTwo({modal,setModal,packageStatus}) {
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modalMy')
    } else {
        document.body.classList.remove('active-modalMy')
    }

    function statusDelivery(){
        if (packageStatus === 'В пути'){
            return <> Выкуплен у магазина, ожидает <br/> поступления на склад.</>
        }
        else if(packageStatus?.split(' ')[0] === "Выкуплен"){
            return <> {packageStatus}, ожидает <br/> поступления на склад.</>
        }
        else if(packageStatus?.split(' ')[0] === "Ожидает"){
            return <>{packageStatus}</>
        }
        else if(packageStatus?.split(' ')[0] === "Доставлен"){
            return <>{packageStatus}</>
        }
        else if(packageStatus?.split(' ')[0] === "Отправлен"){
            return <>{packageStatus}</>
        }
        else {
            return <> Не можем найти ваш заказ :( <br/> проверьте код</>
        }
    }

    return (
        <>

            {modal && (
                <div className="myModal">
                    <div className="overlay">
                        <div className="modal-contentMy">
                            <div className={s.title}>Статус заказа</div>
                            <p  className={s.subTitle}>
                                {statusDelivery()}
                                {/*{packageStatus === "В пути" ? <> Выкуплен у магазина, ожидает <br/> поступления на склад.</>: null}*/}
                                {/*{packageStatus.split(' ')[0] === "Выкуплен" ? <> {packageStatus}, ожидает <br/> поступления на склад.</>: null}*/}
                                {/*{packageStatus !== "В пути" ||(packageStatus.split(' ')[0] !== "Выкуплен" )? <> Не можем найти ваш заказ :( <br/> проверьте код</>: null}*/}
                            </p>
                            <div className="close-modal" onClick={toggleModal}>
                                <img src={close} alt="close"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}