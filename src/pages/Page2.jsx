import React from 'react'
import { NavLink } from 'react-router-dom'

const Page2 = () => {
  return (
    <div className="container">
    <img src="./src/assets/Rectangle 47.png" alt="images" className='im' />
    <img src="./src/assets/Frame 2591.png" alt="" className='Home_images' />
    <img src="./src/assets/Frame 2586.png" alt="" className='Home_images_logo' />
    <img src="./src/assets/Frame 330.png" alt="" className='Home_images_logo2 ' />
    <div className="list">
        <ul>
            <li className='Home_titil_li'>Создать задание</li>
            <li>Найти задания </li>
            <li>Для бизнеса</li>
            <div className="Home_page_ul_li">
                <ul>
                    <li>Сообшения</li>
                    <li>Мои заказы</li>
                    <span>2</span>
                    <span className='Home_page_span'>2</span>
                </ul>
            </div>
                    </ul>
                        </div>
                        <div className="Home">
                            <h1 className='Home_page_titil_h1'>Начало регистрация</h1>
                            <img src="./src/assets/Frame 2620.png" alt="" className='Home_page_img' />
                        </div>
                        <div className="Home_page_tilti">
                            <h1 className='Home_page_tilti_h1'>Выберите налоговый статус</h1> 
                           
                        </div>
                        <div className="Home_page_check">
                       <div className="checkbox">
                        <input type="checkbox" />
                        <br />
                        <br />
                        <input type="checkbox" />
                        <br />
                        <br />
                        <input type="checkbox" />
                        <br />
                        <br />
                        <input type="checkbox" />
                        <br />
                        <br />
                        <input type="checkbox" />
                        <br />
                        <br />
                        <input type="checkbox" />
                       </div>
                       <div className="li">
                        <p>
                        Самозанятый
                        <br />
                        <br />
                        Индивидуальный предприниматель
                        <br />
                        <br />
                        Общество с ограниченной ответственностью
                        <br />
                        <br />
                        Акционерное общество
                        <br />
                        <br />
                        Гражданин РФ или стран ЕАЭС (Беларусь, Киргизия, Казахстан, Армения)
                        <br />
                        <br />
                        Иностранный гражданин из стран СНГ (Украина, Молдова, Таджикистан, Узбекистан, Азербайджан)
                        </p>
                       </div>
                       <div className="main">
                        <h1 className='h1'>Самозанятый</h1>
                        <input type="text"  placeholder='Укажите свой ИНН' className='inn'/>
                        <p className='p'>Свой ИНН вы можете посмотреть в приложении “Мой налог” в разделе ”Прочее” - “Профиль” или на сайте <br />
                         ФНС https://service.nalog.ru/inn.do. </p>
                       </div>
                        <button className='b'>Следуюший щаг</button>
                                                </div>
                        <div className="Home_page_Futer">
                                                    <h1 className='Home_page_Futer_h1'>Категории услуг</h1>
                                                    <p className='Home_page_Futer_1'>
                                                    Курьерские доставки  
                                                    <br />    
                                                    <br />
                                                    Бытовой ремонт   
                                                    <br />    
                                                    <br />
                                                    Ремонт смартфонов    
                                                    <br />    
                                                    <br />
                                                    Обучение детей  
                                                    <br />    
                                                    <br />
                                                    Услуги промоутеров  
                                                    <br />    
                                                    <br />
                                                    Грузоперевозки  
                                                    <br />    
                                                    <br />
                                                    Психологи Ремонт авто
                                                    <br />    
                                                    <br />
                                                    Клининговые услуги
                                                    </p>
                                                    <p className='Home_page_Futer_2'>
                                                    Фото и видео
                                                    <br />
                                                    <br />
                                                    Фрилансеры 
                                                    <br />
                                                    <br />
                                                    Помощь без категории
                                                    <br />
                                                    <br />
                                                    Ремонт компьютеров
                                                    <br />
                                                    <br />
                                                    Уход за животными
                                                    <br />
                                                    <br />
                                                    Юридические услуги
                                                    <br />
                                                    <br />
                                                    Ремонт авто
                                                                                                    </p>
 <h1 className='Home_page_Futer_h2'>Сервис</h1>
 <p className='Home_page_Futer_3'>
 О сервисе
 <br />
 <br />
 Личный кабинет
 </p>
 <h1 className='Home_page_Futer_h3'>Документы</h1>
 <p className='Home_page_Futer_4'>
 Пользовательское соглашение Qugo
 <br />
 <br />
 Политика о данных
 <br />
 <br />
 Соглашение Qugo с Заказчиком
 <br />
 <br />
 Проект договора услуг
 </p>
 <img src="./src/assets/Frame 2614.png" alt="" className='imag' />
                                                </div>
                        </div>
  )
}

export default Page2