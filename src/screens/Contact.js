import React from 'react'
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import insta from "../images/insta.png";
import lin from "../images/in.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";




const Contact = () => {
    return (
        <div className="my-24  w-full flex px-24 lg:px-2 ">
            <div className=" container  flex flex-col w-full items-center ">
                <p className=" text-3xl font-bold mb-6 lg:mb-2">Ways to Contact Me</p>
                <p className="text-yellow-400 mb-2">CONTACT-ME</p>
                <div className="text_container  w-1/3 lg:w-full lg:px-1 flex items-center justify-center mb-4">
                <p className="font-normal mb-2 text-center">I am available to hire for any kind of Web Development project.
                You can contact me via the following:
                </p>
                </div>

                <div className="contacts_container flex flex-row  items-center justify-between w-full mb-6 lg:mb-0 flex-wrap">
                    <div className="contact flex bg-gray-700 flex items-center justify-center  flex-wrap  py-2 w-1/4 lg:w-full lg:mb-2">
                        <img className="object-contain h-4 mr-4"src={phone} alt="" />
                        <p className="text-xl font-medium text-yellow-400">+92-332-333-5578</p>

                    </div>
                    <div className="contact flex bg-gray-700 flex items-center justify-center  py-2 w-1/4 lg:w-full lg:mb-2">
                        <img className="object-contain h-4 mr-4"src={mail} alt="" />
                        <p className="text-lg font-medium text-yellow-400">ZeeshanCoding@gmail.com</p>

                    </div>
                    <div className="contact flex bg-gray-700 flex items-center justify-center  py-2 w-1/4 lg:w-full lg:mb-2">
                        <img className="object-contain h-4 mr-4"src={insta} alt="" />
                        <p className="text-xl font-medium text-yellow-400">@Zaeshann</p>

                    </div>


                </div>
                
                <div className="contacts_container flex flex-row  items-center justify-between w-full lg:flex-wrap">
                    <div className="contact flex bg-gray-700 flex items-center justify-center   py-2 w-1/4 lg:w-full lg:mb-2">
                        <img className="object-contain h-4 mr-4"src={twitter} alt="" />
                        <p className="text-xl font-medium text-yellow-400">@Zaeshann</p>

                    </div>
                    <div className="contact flex bg-gray-700 flex items-center justify-center   py-2 w-1/4 lg:w-full lg:mb-2">
                        <img className="object-contain h-4 mr-4"src={lin} alt="" />
                        <p className="text-xl font-medium text-yellow-400">@Zaeshann</p>

                    </div>
                    <div className="contact flex bg-gray-700 flex items-center justify-center   py-2 w-1/4 lg:w-full lg:mb-2">
                        <img className="object-contain h-4 mr-4"src={fb} alt="" />
                        <p className="text-xl font-medium text-yellow-400">@Zaeshann</p>

                    </div>


                </div>
                
                




            </div>
        </div>
    )
}

export default Contact
