import React from 'react'
import "./ProductDescription.css"

function ProductDescription() {
    return (
        <div>
            <div className='product__site__links'>
                <a href='#!'>
                    <div className='site__link'>
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </a>
                <a href='#!'>
                    <div className='site__link'>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </a>
                <a href='#!'>
                    <div className='site__link'>
                        <i class="fa-brands fa-pinterest-p"></i>
                    </div>
                </a>
                <a href='#!'>
                    <div className='site__link'>
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                </a>
                <div className='site__link__box'>
                    +5
                </div>
            </div>

            <div className='description__nav'>
                <div className='description__box description__yellow__box'>Description</div>
                <div className='description__box' >Reviews</div>
                <div className='description__box' >Custom</div>
            </div>

            <div className='description__text__zone'>
                <p>HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience you never thought possible. Seductively sleek, the HTC Touch HD provides the next generation of mobile functionality, all at a simple touch. Fully integrated with Windows Mobile Professional 6.1, ultrafast 3.5G, GPS, 5MP camera, plus lots more - all delivered on a breathtakingly crisp 3.8" WVGA touchscreen - you can take control of your mobile world with the HTC Touch HD.</p>
                <p className='description__features'>Features</p>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Processor Qualcomm® MSM 7201A™ 528 MHz</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Windows Mobile® 6.1 Professional Operating System</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Memory: 512 MB ROM, 288 MB RAM</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>3.8-inch TFT-LCD flat touch-sensitive screen with 480 x 800 WVGA resolution</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>HSDPA/WCDMA: Europe/Asia: 900/2100 MHz; Up to 2 Mbps up-link and 7.2 Mbps down-link speeds</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Quad-band GSM/GPRS/EDGE: Europe/Asia: 850/900/1800/1900 MHz (Band frequency, HSUPA availability, and data speed are operator dependent.)</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Device Control via HTC TouchFLO™ 3D & Touch-sensitive front panel buttons</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>GPS and A-GPS ready</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Bluetooth® 2.0 with Enhanced Data Rate and A2DP for wireless stereo headsets</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Wi-Fi®: IEEE 802.11 b/g</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>HTC ExtUSB™ (11-pin mini-USB 2.0)</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>5 megapixel color camera with auto focus</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>VGA CMOS color camera</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Built-in 3.5 mm audio jack, microphone, speaker, and FM radio</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Ring tone formats: AAC, AAC+, eAAC+, AMR-NB, AMR-WB, QCP, MP3, WMA, WAV</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>40 polyphonic and standard MIDI format 0 and 1 (SMF)/SP MIDI</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Rechargeable Lithium-ion or Lithium-ion polymer 1350 mAh battery</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>Expansion Slot: microSD™ memory card (SD 2.0 compatible)</p>
                </div>
                <div className='specification'>
                    <p className='black__point'></p>
                    <p>AC Adapter Voltage range/frequency: 100 ~ 240V AC, 50/60 Hz DC output: 5V and 1A</p>
                </div>
                 <div className='specification'>
                    <p className='black__point'></p>
                    <p>Special Features: FM Radio, G-Sensor</p>
                </div>
            </div>




        </div>
    )
}

export default ProductDescription