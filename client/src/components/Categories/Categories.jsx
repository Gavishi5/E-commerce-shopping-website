import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"; 

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://www.ypulse.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-07-at-10.37.33-PM-e1644292280969.png" alt="" />
                <button>
                    <Link  to  = "/products/1" className = "link">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/12883669/pexels-photo-12883669.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to = "/products/1" className='link'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/6627104/pexels-photo-6627104.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to = "/products/1" className='link'>New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to = "/products/1" className='link'>Men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/8336658/pexels-photo-8336658.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to = "/products/1" className='link'>Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/7691410/pexels-photo-7691410.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to = "/products/1" className='link'>Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories