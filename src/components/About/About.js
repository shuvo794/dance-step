import React from 'react';

const About = () => {
    return (
        <div className="text-center p-4">
            <div>
                <h4 className='text-warning'>PROGRAM</h4>
                <h2>Some Of Our Activities</h2>
            </div>
            <div className='d-flex p-5'>
                <div className='w-50 me-2'>
                    <img width="550px" src="https://swarthmorephoenix.com/wp-content/uploads/2019/11/ARTS_DOUGVARONCHOREO_Cylla-von-Tiedemann.jpg" alt="" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsoZifXk46U8KDjb8O91lfP4j7H3kc7QM5Q&usqp=CAU" alt="" />
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7JpO0yJv02kDGocUok2S2Be1aHgkTHXtYA&usqp=CAU" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGbTcgqYa270VSfUcIkcUF1WJ3mtTiUoKaw&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h3>Contact Us</h3>

                <p>Email: <a href="#">DanceSteps4545@gmail.com</a> </p>
            </div>
        </div>
    );
};

export default About;