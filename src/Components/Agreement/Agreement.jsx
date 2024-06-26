import React from 'react';
import s from './Agreement.module.sass'

export const Agreement = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>Описание сервиса</div>
            <div className={s.subTitle}>
                Посредническая фирма www.shop-abroad.ru (далее Исполнитель) оказывает содействие в области совершения покупок в интернет-магазинах, аукционах стран ЕС и США,  а также дальнейшей отправки купленных товаров на адрес физического лица (далее Клиента) в любую страну, имеющую активное почтовое сообщение между. Исполнитель не представляет услуги по отправке посылок по странам ЕС и США. Исключением могут являться только посылки, возвращаемые продавцам. Просим учесть, что Исполнитель не предоставляет услуги самовывоза со склада на территории Германии,Чехии и Латвии. О возможностях доставки можно подробнее прочитать в разделе Тарифы.
                Исполнитель оставляет за собой право обновлять, изменять, улучшать и трансформировать свой Сервис в любой форме и способах использования.
            </div>
            <div className={s.wholePart}>
                <div className={s.part}>Конфиденциальность и защита информации</div>
                <ul className={s.politicsUl}>
                    <li>
                        При оформлении заказа на Сайте Пользователь Сайта/Клиент предоставляет следующую информацию: Фамилия, Имя, Отчество, адрес электронной почты, пароль для доступа к Сайту.

                    </li>
                    <li>
                        При оформлении посылки, в зависимости от выбранного метода доставки, Пользователь Сайта/Клиент оставляет следующую информацию: Фамилия, Имя, Отчество, адрес доставки посылки, паспортные данные в текстовом виде и/или фотокопию паспорта.
                    </li>
                    <li>
                        Предоставляя свои персональные данные Сервису/Исполнителю, Пользователь Сайта/Клиент соглашается на их обработку, в том числе и в целях продвижения товаров и услуг на сайте Исполнителя.
                    </li>
                    <li>Сервис/Исполнитель имеет право отправлять информационные, в том числе рекламные сообщения, на электронную почту Пользователя Сайта/Клиента с его согласия, выраженного посредством совершения им действий, однозначно идентифицирующих этого абонента и позволяющих достоверно установить его волеизъявление на получение сообщения.
                    </li>
                    <li>Пользователь Сайта/Клиент вправе отказаться от получения рекламной и другой информации, а также, чтобы его персональные данные использовались для продвижения сайта shop-abroad.ru без объяснения причин отказа посредством направления соответствующего заявления на электронный адрес Сервиса: .… Сервисные сообщения, информирующие Пользователя/Клиента о заказе и этапах его обработки, отправляются автоматически и не могут быть отклонены Пользователем/Клиентом.</li>
                    <li>Сервис/Исполнитель обязуется не разглашать полученную от Клиента информацию. Не считается нарушением предоставление Сервисом/Исполнителем информации агентам и третьим лицам, действующим на основании договора с Исполнителем, для исполнения обязательств перед Клиентом.</li>
                    <li>Не считается нарушением обязательств разглашение информации в соответствии с обоснованными и применимыми требованиями закона.</li>
                    <li>Сервис/Исполнитель вправе использовать технологию "cookies". "Cookies" не содержат конфиденциальную информацию и не передаются третьим лицам.
                    </li>
                    <li>Сервис/Исполнитель получает информацию о ip-адресе посетителя. Данная информация не используется для установления личности посетителя.</li>
                    <li>Сервис/Исполнитель не несёт ответственности за сведения, предоставленные Клиентом на Сайте в общедоступной форме.</li>
                    <li>Сервис/Исполнитель не рассылает спам и Клиент всегда вправе отказаться от рассылки сообщений с нашего сайта.
                    </li>
                    <li>При оплате заказов кредитной картой Пользователем/Клиентом на сайте, компания shop-abroad.ru не хранит информацию о данной кредитной карте.
                    </li>
                </ul>
            </div>

            <div className={s.wholePart}>
                <div className={s.part}>Общие условия использования</div>
                <ul className={s.politicsUl}>
                    <li>Исполнитель обязуется оплатить указанные Клиентом товары продавцу товара, от своего имени, но за счет Клиента, при условии, что данный продавец осуществляет доставку товаров по территории Германии.</li>
                    <li>Клиент несет ответственность за соответствие приобретаемого товара условиям доставки почтовой службы и таможенному кодексу страны, в которой находится, для пересылки товара Клиенту Почтовой службой.</li>
                    <li>Клиент несет единоличную и полную ответственность за любые таможенные выплаты, а также за любые оплаты, связанные с почтовыми сервисами и с пересечением товарами государственных границ, а также за все негативные последствия, вызванные неверным указанием данных об отправлении и/или его содержимом, а также в связи с отправкой запрещённых к отправке и/или опасных грузов.
                    </li>
                    <li>При добавлении товаров в личный кабинет клиент обязан указать полную стоимость товара, стоимость доставки товара до склада Исполнителя на территории Германии, а также налогов, действующих в данной стране. В случае если клиент не указал необходимые данные или указал их неправильно, Исполнитель имеет право снять с Пользовательского счета клиента сумму, необходимую для покрытия затрат, понесенных при покупке указанного клиентом товара в размере не более 20% от стоимости товара при этом уведомив Клиента. При указании размеров (для одежды, обуви и т.п.) необходимо указывать Европейские размеры.</li>
                    <li>Ответственность Исполнителя не может превышать стоимость услуг, оказанных Исполнителем в рамках конкретного заказа.</li>
                    <li>Клиент соглашается с условиями данного соглашения, оплачивая денежные средства на личный счет на сайте www.shop-abroad.ru</li>
                    <li>Исполнитель оставляет за собой право требовать от Клиента полную оплату за выкупленный товар до его упаковки в посылку.</li>
                    <li>За свои услуги Исполнитель удерживает с клиента комиссию, описанные на странице Комиссии </li>
                    <li>В случае участия в аукционе через личный кабинет, клиент должен вносить необходимую сумму на личный счет заблаговременно. В случае нехватки денежных средств на личном счету клиента, дальнейшее повышение ставок невозможно.</li>
                    <li>Покупка на аукционе Ebay.de возможна только у продавцов с рейтингом 5 и выше.</li>
                    <li>Исполнитель не пересылает бумажную корреспонденцию, в том числе письма, журналы. В случае поступления на имя клиента бумажной корреспонденции, она будет уничтожена.</li>
                    <li>Исполнитель соглашается хранить посылки, принадлежащие Клиенту, в течение 14 дней без взимания дополнительной оплаты. После истечения этого срока, Исполнитель оставляет за собой право взимать с Клиента оплату за хранение каждой входящей посылки (заказа), в эквиваленте 10 (десять) центов за килограмм за каждый день. Общий срок хранения посылок не должен превышать 120 календарных дней. Если посылка не была востребована Клиентом по истечении этого срока, Исполнитель оставляет за собой право утилизировать содержимое посылки или распорядиться им по своему усмотрению.</li>
                    <li>Исполнитель обязуется не разглашать информацию, полученную прямо или косвенно от Клиента, личные данные Клиента, подробности его заказов, посылок, платежей, кроме случаев, когда данная информация запрошена государственными службами на законных основаниях.
                    </li>
                    <li>В случае если Продавец не отправил товар, Исполнитель старается сделать все от него зависящее для возврата уплаченных денежных средств, но не гарантирует их возврата и в этом случае не компенсирует потери Клиента. Продавца выбирает Клиент и за его действия Исполнитель ответственности не несет.
                    </li>
                    <li>В случае отсутствия заказанных Товаров на складе Продавца, Исполнитель вправе аннулировать указанный Товар из Заказа Клиента и уведомить об этом Клиента путем направления электронного сообщения по адресу, указанному при регистрации.
                    </li>
                    <li>При отказе по желанию Клиента от товара, который оплачен, с Клиента взимается стоимость обратной доставки товара Продавцу, комиссионное вознаграждение при этом не возвращается. При отказе от товара после открытия процедуры спора с Продавцом комиссионное вознаграждение возвращается в размере 50% в случае, если предварительно для товара заказывалась услуга проверки на складе и не возвращается, если услуга проверки товара на складе предварительно заказана не была. Отказ от покупки с аукциона Ebay.de невозможен, если у продавца в описании лота не указаны правила возврата товаров, если правила возврата товаров указаны, то возврат возможен согласно этим правилам.
                    </li>
                    <li>Исполнитель обязуется упаковать полученные на склад товары Клиента согласно данным, которые клиент указал в разделе «Мои посылки" личного кабинета. В случае, если посылка Клиента по весу или габаритам не может быть отправлена тем способом доставки, который указал Клиент, Исполнитель имеет право изменить способ доставки посылки.
                    </li>
                    <li>Клиент передает Исполнителю право открывать его посылки и работать с их содержимым.
                    </li>
                    <li>Исполнитель оставляет за собой право отказаться от приема посылок, которые при внешнем осмотре превышают допустимые для отправки габариты и/или вес.
                    </li>
                    <li>У Исполнителя не предусмотрено никаких компенсаций морального ущерба, а также возмещения потерь, связанных с собственным бизнесом Клиентов в любом виде. Cервис рассчитан на предоставление услуг физическим лицам, которые делают заказы для себя, родственников или друзей.
                    </li>
                    <li>Исполнитель оставляет за собой право отказать Клиенту в приобретении любого товара без объяснения причин.
                    </li>
                    <li>Исполнитель оставляет за собой право отказать Клиенту в оказании услуг в случае использования Клиентом нецензурной лексики и оскорблений в адрес Исполнителя.
                    </li>
                    <li>Средства с баланса в случае отказа в обслуживании возвращаются на карту, с которой они поступили на баланс клиента, полученные посылки будут отправлены обратно Продавцам в случае предоставления последним бесплатного возврата товара (Rücksendung).
                    </li>
                    <li>При отказе от заказа или его неоплаты и возникновения долга на балансе клиента, Исполнитель связывается с Клиентом путем контактов по электронной почте. Исполнитель имеет право взыскать неуплаченную сумму с Клиента путем переговоров и договоренностей или обращения в компанию по взысканию долгов.
                    </li>
                </ul>
            </div>
        </div>
    );
};
