import logo from './logo.svg';
import './navBar.css';
import './slider.css';
import './information.css'

import './rooms.css'
import { useState, useEffect, useCallback, useRef } from 'react';

import ImageViewer from 'react-simple-image-viewer';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faYoutube } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
let NavBar = () => {
    const checker = useRef(null);
    const [checked, setChecked] = useState(false)
    let handleChange = () => {
        if (!checked) {
            setChecked(true)
            document.querySelector('.burguer').style = 'transform: rotate(90deg)'
        } else {
            setChecked(false)
            document.querySelector('.burguer').style = 'transform: rotate(0deg)'

            checker.current.checked = false
            

        }
    }
    return <>
        <nav>
            <div className="navBar">
                <div style={{ marginLeft: 20 }}>
                    <img src={"./Logo.png"} alt="" className="logo" />
                </div>
                <label htmlFor="state">
                    <div className="burguer">
                        <div id="menu_on">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </label>
                <div className="navBarContent">
                    <div className="content">
                        <a href="#inicio">Inicio</a>
                        <a href="#informacion">Informacion</a>
                        <a href='#rooms'>Habitaciones</a>
                        <a href='#location'>Contacto</a>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="state" hidden onChange={handleChange} ref={checker} />
            <div className="burgerContent">
                <a href="#inicio" className="burguerMenu" onClick={handleChange}>Inicio</a>
                <a href="#informacion" className="burguerMenu" onClick={handleChange}>Informacion</a>
                <a href='#rooms' className="burguerMenu" onClick={handleChange}>Habitaciones</a>
                <a href='#location' className="burguerMenu" onClick={handleChange}>Contacto</a>
            </div>
        </nav>
    </>
}

let MainContent = () => {

    const [imageNumber, setImageNumber] = useState(0)

    let SliderContainer = () => {
        const packImages = [
            { id: 1, src: './cartagena-slide1.jpg', title: 'foo' },
            { id: 2, src: './cartagena-slide2.jpg', title: 'foo' },
            { id: 3, src: './cartagena-slide3.jpg', title: 'foo' },
        ];

        let images = <img src={packImages[imageNumber]['src']} className="featureImage" />

        let whatsAPP = () => {

            window.location.href = 'https://wa.me/573042371189';

        }

        let contact = () => {
            window.location.href = '#location';

        }

        useEffect(() => {
            const myInterval = setInterval(() => {
                let lengthPosition = packImages.length - 1
                console.log(imageNumber, lengthPosition)
                if (imageNumber == lengthPosition) {
                    console.log('dasdasd')
                    setImageNumber(0)
                } else {
                    setImageNumber(imageNumber + 1)
                }
            }, 20000)
            return () => clearInterval(myInterval);
        });

        return <>
            <div className="slideFade" id="inicio">
                <div className="slideText">
                    <div className="mainText" style={{ fontSize: "1em" }}>
                        Bienvenido a
                    </div>
                    <div className="mainText">
                        Hostal Casa de Barajas
                    </div>
                    <div className="mainText" style={{ fontSize: "1.5em" }}>
                        Habitaciones y suites
                    </div>
                    <br />
                    <br />
                    <div className="buttonGroup">
                        <button className="buttonMain" style={{ backgroundColor: "rgb(126, 117, 117)" }} onClick={contact}>
                            Contactanos
                        </button>
                        &nbsp;&nbsp;
                        <button className="buttonMain" onClick={whatsAPP}>
                            <FontAwesomeIcon icon={faWhatsapp} size="xl"/>
                            &nbsp;
                            Escribenos
                        </button>
                    </div>
                </div>
                {images}
            </div>
        </>
    }

    let InformationContainer = () => {
        return <>
            <div className="informationContainer" id="informacion">
                <br /><br /><br /><br /><br />
                <div className="mainInformation">
                    Informacion acerca de nosotros
                </div>
                <br />
                <div className="" style={{ width: "100%", margin: "0 auto", justifyContent: "space-evenly", display: "flex", flexWrap: "wrap-reverse" }}>
                    <img src="./casa-barajas.jpg" alt="" />
                    <div className="informationDescription">
                        <p>
                            El Hostal Casa de Barajas ofrece habitaciones en Cartagena de Indias, a 2,7 km de la playa de Bocagrande y a 3,2 km de las escaleras del cerro de La Popa. El establecimiento está cerca del palacio de la Inquisición, del parque Bolívar y del Museo del Oro de Cartagena. También hay un mostrador de información turística.
                        </p>
                        <p>
                            Todas las habitaciones del albergue incluyen armario. Todas las habitaciones del Hostal Casa de Barajas están equipadas con baño privado y ropa de cama.
                        </p>
                        <p>
                            En las inmediaciones hay varios lugares de interés, como la playa de Marbella, el castillo de San Felipe de Barajas y las murallas de Cartagena. El aeropuerto más cercano es el aeropuerto internacional Rafael Núñez, ubicado a 5 km del Hostal Casa de Barajas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    }

    let HostelRoom = () => {
        const [currentImage, setCurrentImage] = useState(0);
        const [isViewerOpen, setIsViewerOpen] = useState(false);


        const [selectImages, setSelectImages] = useState(null);
        let doubleRoom = [
            './double-room/double-room1.jpg',
            './double-room/double-room2.jpg',
            './double-room/double-room3.jpg',
            './double-room/double-room5.jpg',
            './double-room/double-room6.jpg',
            './double-room/double-room7.jpg',
            './double-room/double-room8.jpg',
        ]
        let oneRoom = [
            './one-room/one-room1.jpg',
            './one-room/one-room2.jpg',
            './one-room/one-room3.jpg',
            './one-room/one-room4.jpg',
            './double-room/double-room8.jpg',
        ]

        const openImageViewer = useCallback((index, value) => {

            setSelectImages(value)
            setCurrentImage(index);
            setIsViewerOpen(true);
        }, []);

        const closeImageViewer = () => {
            setCurrentImage(0);
            setIsViewerOpen(false);
        };

        return <>
            <div className="rooms" id="rooms">
                <br /><br /><br /><br /><br /><br />
                <div className='roomContainer'>
                    <div className="room">
                        <div className="roomItems">
                            <div className="roomDescription">
                                <p style={{fontSize: "1.5em", fontWeight: "bolder"}}>Habitacion Doble</p>
                                <p>Amplia habitacion para 2 personas, incluye </p>
                                <p>una cama doble y television, habitacion de de 3m²</p>
                                <p>Con baño privado, armario y aire acondicionado </p>
                                &nbsp;
                                <p style={{fontSize: "0.8em"}}>Wi-Fi, Aire Acondicionado, TV LCD, Baño privado, Escritorio</p>
                            </div>
                            <img src={doubleRoom[0]} onClick={() => openImageViewer(0, doubleRoom)} key={0} alt="" className='mainRoomPicture' />
                        </div>
                        <div className="containerRoomImages">
                            <img src={doubleRoom[1]} onClick={() => openImageViewer(1, doubleRoom)} key={1} alt="" className='subImagesRoom'/>
                            <img src={doubleRoom[2]} onClick={() => openImageViewer(2, doubleRoom)} key={2} alt="" className='subImagesRoom'/>
                            <img src={doubleRoom[3]} onClick={() => openImageViewer(3, doubleRoom)} key={3} alt="" className='subImagesRoom'/>
                            <img src={doubleRoom[4]} onClick={() => openImageViewer(4, doubleRoom)} key={4} alt="" className='subImagesRoom'/>
                            <img src={doubleRoom[5]} onClick={() => openImageViewer(5, doubleRoom)} key={5} alt="" className='subImagesRoom'/>
                        </div>
                        <br />
                    </div>
                    <div className="room">
                        <div className="roomItems">
                            <div className="roomDescription">
                                <p style={{fontSize: "1.2em", fontWeight: "bolder"}}>Habitacion Individual</p>
                                <p>Amplia habitacion para 2 personas, incluye </p>
                                <p>un camarote y television, habitacion de de 3m²</p>
                                <p>Con baño privado, armario y aire acondicionado </p>
                                &nbsp;
                                <p style={{fontSize: "0.8em"}}>Wi-Fi, Aire Acondicionado, TV LCD, Baño privado, Escritorio</p>
                            </div>
                            <img src={oneRoom[0]} onClick={() => openImageViewer(0, oneRoom)} key={0} alt="" className='mainRoomPicture'/>
                        </div>
                        <div className="containerRoomImages">
                            <img src={oneRoom[1]} onClick={() => openImageViewer(1, oneRoom)} key={1} alt="" className='subImagesRoom'/>
                            <img src={oneRoom[2]} onClick={() => openImageViewer(2, oneRoom)} key={2} alt="" className='subImagesRoom'/>
                            <img src={oneRoom[3]} onClick={() => openImageViewer(3, oneRoom)} key={3} alt="" className='subImagesRoom'/>
                            <img src={oneRoom[4]} onClick={() => openImageViewer(4, oneRoom)} key={4} alt="" className='subImagesRoom'/>
                            <img src={doubleRoom[5]} onClick={() => openImageViewer(5, doubleRoom)} key={5} alt="" className='subImagesRoom'/>
                        </div>

                    </div>
                </div>
                <br />
            </div>

            {isViewerOpen && (
                <ImageViewer
                    src={selectImages}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}

        </>

    }

    let Location = () => {
        let map = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.8098129973093!2d-75.54071633985014!3d10.422298747872476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f9d45001539%3A0x82600f60ff0faf33!2sBARAJAS%20HOUSE%20HOSTEL!5e1!3m2!1ses!2sco!4v1672732310888!5m2!1ses!2sco" width="100%" height='100%' loading="lazy"></iframe>
        return <>
            <div className="location" id='location'>
                <div className="formContact">
                    <div className="contactInformation">
                        <strong>
                            <h1>Hostal Casa De Barajas</h1>
                        </strong>
                        <h3>Reserve directamente con nosostros para una mejor atencion.</h3>
                        <h1>Obten el mejor precio y el mejor servicio</h1>
                        <div className='contactIcons'>
                            <FontAwesomeIcon icon={faPhone} />
                            &nbsp;
                            <p>332323232</p>
                        </div>
                        <div className="contactIcons">
                            <FontAwesomeIcon icon={faEnvelope} /> 
                            &nbsp;
                            <p>hostalcasadebarajas@gmail.com</p>
                        </div>
                        <div className="contactIcons">
                            <FontAwesomeIcon icon={faLocationDot} />
                            &nbsp;
                            <p>Barrio el espinal Cr 15 N 31-95, 153195 Cartagena de Indias, Colombia</p>
                        </div>
                    </div>
                    <form>
                        <input type="text" name="user_name" placeholder='Nombre' />
                        <br /><br />
                        <input type="email" name="user_email" placeholder='Email'/>
                        <br /><br />
                        <input type='text' name="user_email" placeholder='Numero de celular'/>
                        <br /><br />
                        <textarea name="message" placeholder='Mensaje' />
                        <br /><br />
                        <div style={{width: "100%"}}>
                            <input type="submit" value="Send" style={{width: "50%", display: "flex", justifyContent: "center", margin: "0px auto"}} />
                        </div>
                    </form>
                </div>
                <div className="googleMaps">
                    {map}
                </div>
            </div>
            <br /><br />
        </>
    }

    return <>
        <div>

            <SliderContainer />
            <InformationContainer />
            <HostelRoom />
            <Location/>
        </div>
    </>
}

function App() {
    return <>
        <NavBar />
        <MainContent />

    </>
}

export default App;
