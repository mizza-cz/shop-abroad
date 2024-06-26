import React from 'react';
import s from './Vat.module.sass'
import telegram from "../../img/telegram.svg";
import whatsApp from "../../img/whatsApp.svg";

export const Vat = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>Возмещение Налога | VAT </div>
            <div className={s.part}>
                <div className={s.partTitle}>Все покупки в интернет магазинах ЕС обложены VAT(value-added tax), он же НДС</div>
                <div className={s.partSubtitle}>Если сумма Вашей покупки составляет более 500$, то мы можем выкупить ваш заказ без обложения налога в размере 20%. <br/>
                    Пример:<br/>
                    Вы совершили покупку на 545 $. После прохождения таможенного пункта и получения всех подтверждающих документов, Вам возмещается 20% VAT или 109$.<br/>
                    Время на возмещение занимает от 7-21 календарных дней, без учета праздников.
                </div>
            </div>
            <div className={s.part}>
                <div className={s.partTitle}>НДС при экспорте/импорте</div>
                <div className={s.partSubtitle}>
                    Экспорт товаров за рубеж облагается НДС по нулевой ставке.
                    Это делается с целью обеспечения отечественным производителям большей конкурентоспособности. В данном контексте термин "нулевая ставка НДС" (в отличие от термина "освобождение от НДС") означает, что экспортер не только не должен добавлять НДС к цене экспортируемого товара (то есть счета выставляются без НДС), но и имеет право на вычет (возмещение из бюджета) НДС, уплаченного им ранее при производстве или приобретении экспортируемого товара. Однако, чтобы получить такое право экспортер обязан собирать и хранить у себя документальные доказательства вывоза товара <b> за пределы страны - таможенные декларации, транспортные накладные и сопутствующую документацию (деловую переписку, контракты, расписки и т.п.). Если таких доказательств нет, то нулевую ставку применять нельзя.</b>
                </div>
            </div>
            <div className={s.littleTitle}>На любые вопросы связанные с возмещением VAT ответит служба поддержки</div>
            <div className={s.imagesFlex}>
                <a href="https://t.me/shop_abroad_support">
                    <div>
                        <img src={telegram} alt="telegram"/>
                    </div>
                </a>
                <a href="https://wa.me/message/T5JVB2BEB4BPP1">
                    <div>
                        <img src={whatsApp} alt="whatsup"/>
                    </div>
                </a>
            </div>
        </div>
    );
};
