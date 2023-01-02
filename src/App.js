import logo from './logo.svg';
import './navBar.css';
import './slider.css';
import './information.css'
import { useState, useEffect, useCallback } from 'react';

import ImageViewer from 'react-simple-image-viewer';
let NavBar = () => {

    const [checked, setChecked] = useState(false)
    let handleChange = () => {
        if (!checked) {
            setChecked(true)
            document.querySelector('.burguer').style = 'transform: rotate(90deg)'
        } else {
            setChecked(false)
            document.querySelector('.burguer').style = 'transform: rotate(0deg)'
        }
    }
    return <>
        <nav>
            <div className="navBar">
                <div style={{ marginLeft: 20 }}>
                    <img src={"./logo.png"} alt="" className="logo" />
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
                        <a>Habitaciones</a>
                        <a>Ubicacion</a>
                        <a>Contacto</a>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="state" hidden onChange={handleChange} />
            <div className="burgerContent">
                <div className="burguerMenu">
                    Inicio
                </div>
                <div className="burguerMenu">
                    Informacion
                </div>
                <div className="burguerMenu">
                    Habitaciones
                </div>
                <div className="burguerMenu">
                    Ubicacion
                </div>
                <div className="burguerMenu">
                    Contacto
                </div>
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
            }, 200000)
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
                        <button className="buttonMain">
                            Contactanos
                        </button>
                        &nbsp;&nbsp;
                        <button className="buttonMain" style={{ backgroundColor: "rgb(126, 117, 117)" }}>
                            Contactanos
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
                <br />
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

        const openImageViewer = useCallback((index) => {
            setCurrentImage(index);
            setIsViewerOpen(true);
        }, []);

        const closeImageViewer = () => {
            setCurrentImage(0);
            setIsViewerOpen(false);
        };

        return <>
            <div className='roomContainer'>
                <div className="roomItems">
                    <div className="roomDescription">
                        <p style={{fontSize: "30px", fontWeight: "bolder"}}>Habitacion Doble</p>
                        <p>Amplia habitacion para 2 personas, incluye </p>
                        <p>una cama doble y television, habitacion de de 3m²</p>
                        <p>Con baño privado, armario y aire acondicionado </p>
                        &nbsp;
                        <p style={{fontSize: "13px"}}>Wi-Fi, Aire Acondicionado, TV LCD, Baño privado, Escritorio</p>
                    </div>
                    <div className="containerRoomImages">
                        <img src={doubleRoom[1]} onClick={() => openImageViewer(1)} key={1} alt="" width="20%" height="150px"/>
                        <img src={doubleRoom[2]} onClick={() => openImageViewer(2)} key={2} alt="" width="20%" height="150px"/>
                        <img src={doubleRoom[3]} onClick={() => openImageViewer(3)} key={3} alt="" width="20%" height="150px"/>
                        <img src={doubleRoom[4]} onClick={() => openImageViewer(4)} key={4} alt="" width="20%" height="150px"/>
                        <img src={doubleRoom[5]} onClick={() => openImageViewer(5)} key={5} alt="" width="20%" height="150px"/>
                    </div>
                    <img src={doubleRoom[0]} onClick={() => openImageViewer(0)} key={0} alt="" className='mainRoomPicture' />
                </div>

                <div className="roomItems">
                    <div className="roomDescription">
                        <p style={{fontSize: "30px", fontWeight: "bolder"}}>Habitacion Individual</p>
                        <p>Amplia habitacion para 2 personas, incluye </p>
                        <p>un camarote y television, habitacion de de 3m²</p>
                        <p>Con baño privado, armario y aire acondicionado </p>
                        &nbsp;
                        <p style={{fontSize: "13px"}}>Wi-Fi, Aire Acondicionado, TV LCD, Baño privado, Escritorio</p>
                    </div>
                    <div className="containerRoomImages">
                        <img src={oneRoom[1]} onClick={() => openImageViewer(1)} key={1} alt="" width="20%" height="150px"/>
                        <img src={oneRoom[2]} onClick={() => openImageViewer(2)} key={2} alt="" width="20%" height="150px"/>
                        <img src={oneRoom[3]} onClick={() => openImageViewer(3)} key={3} alt="" width="20%" height="150px"/>
                        <img src={oneRoom[4]} onClick={() => openImageViewer(4)} key={4} alt="" width="20%" height="150px"/>
                        <img src={doubleRoom[5]} onClick={() => openImageViewer(5)} key={5} alt="" width="20%" height="150px"/>
                    </div>
                    <img src={oneRoom[0]} onClick={() => openImageViewer(0)} key={0} alt="" className='mainRoomPicture'/>
                </div>

            </div>

            {isViewerOpen && (
                <ImageViewer
                    src={doubleRoom}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}

        </>

    }

    return <>
        <div>

            <SliderContainer />
            <InformationContainer />
            <HostelRoom />
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
