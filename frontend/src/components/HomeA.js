import React, { Component } from 'react'
import NavBar from './NavBar'
import image from '../images/admin1.jpg'

export default class HomeA extends Component {
    render() {
        return (
            <div>
                <div className = "jumbotron" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop: '10px', backgroundImage: `url(${image})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'600px'}}>
                    <br/>
                    <NavBar/>
                    <br/><br/>
                    <div className="jumbotron" style={{backgroundColor:'rgba(255,255,255,0.7)', padding:'100px 10px 100px 10px'}}>
                        <div className="container">
                            <h1 style={{textAlign: 'center', fontSize:'50px'}}>Hotel Paradise <br/>Management</h1>
                        </div>
                    </div>
                </div>
                <div className="jumbotron" style={{paddingTop: '50px', paddingBottom: '50px', backgroundColor: 'white', backgroundImage: 'linear-gradient(to bottom right, black, white'}}>
                    <div class="container px-4" >
                        <div class="row gx-5" >
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://gumlet.assettype.com/nationalherald%2F2019-01%2Fa5fae2ae-ba00-4326-9e44-b150c05f5930%2Fa_jumla_a_joke_or_a_masterstroke_jury_is_out_on_modi_governments_10_reservation.jpg?rect=0%2C0%2C622%2C350&auto=format%2Ccompress&fmt=webp&w=1200" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Reservation Management</h5>
                                            <p class="card-text">All the reservation details</p>
                                            <a href="#" class="btn btn-dark">Go to Reservation Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://ec.europa.eu/reform-support/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-05/AdobeStock_268784201.jpeg?itok=Rq_-MWaq" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Financial Management</h5>
                                            <p class="card-text">All the Financial details</p>
                                            <a href="#" class="btn btn-dark">Go to Financial Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Customer Management</h5>
                                            <p class="card-text">All the Customer details</p>
                                            <a href="#" class="btn btn-dark">Go to Customer Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Restaurant Management</h5>
                                            <p class="card-text">All the Restaurant details</p>
                                            <a href="/HomeRestaurant" class="btn btn-dark">Go to Restaurant Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://www.workplacegroup.com/wp-content/uploads/2014/03/happy-employees.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Employee Management</h5>
                                            <p class="card-text">All the Employee details</p>
                                            <a href="#" class="btn btn-dark">Go to Employee Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://finance.zohocorp.com/wp-content/uploads/2019/02/dropshipping-supplier-2x-1-1.png" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Supplier Management</h5>
                                            <p class="card-text">All the Supplier details</p>
                                            <a href="#" class="btn btn-dark">Go to Supplier Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://principallandscapes.com.au/wp-content/uploads/2010/04/V2A2055.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Extra Facilities Management</h5>
                                            <p class="card-text">All the Extra Facilities details</p>
                                            <a href="#" class="btn btn-dark">Go to Extra Facilities Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-white" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://blog.edesk.com/resources/wp-content/uploads/2018/12/4-creative-ways-to-ultilize-negative-feedback-min.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Feedback Management</h5>
                                            <p class="card-text">All the Feedback details</p>
                                            <a href="#" class="btn btn-dark">Go to Feedback Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}