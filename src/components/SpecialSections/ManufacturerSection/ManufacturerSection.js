import React from 'react'
import "./ManufacturerSection.css"

function ManufacturerSection() {
  return (
    <div>
        <div className='manufacturer__box'>
            <div className='manufacturer__content'>
                <div className='manufacturer__top'>
            <h6>MANUFACTURER</h6>
            <i className="fa-solid fa-angle-up"></i>
                </div>
                <div>
                    <div className='logo__and__name'>
                    <img src='https://demo.pocotheme.com/1/image/cache/catalog/demo/apple_logo-30x30.webp' alt='...'></img>
                    <p>Apple</p>
                    </div>
                    <p>5</p>
                </div>
                <div>
                    <div className='logo__and__name'>
                    <img src='https://demo.pocotheme.com/1/image/cache/catalog/demo/manufacturer/htc-30x30.webp' alt='...'></img>
                    <p>HTC</p>
                    </div>
                    <p>1</p>
                </div>
                <div>
                    <div className='logo__and__name'>
                    <img src='https://demo.pocotheme.com/1/image/cache/catalog/demo/manufacturer/hp-30x30.webp' alt='...'></img>
                    <p>Hewlett-Packard</p>
                    </div>
                    <p>1</p>
                </div>
                <div>
                    <div className='logo__and__name'>
                    <img src='https://demo.pocotheme.com/1/image/cache/catalog/demo/manufacturer/nikon-30x30.webp' alt='...'></img>
                    <p>Nikon</p>
                    </div>
                    <p>1</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ManufacturerSection