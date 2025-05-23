// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import Link from 'next/link';

// export default function Footer() {
//     return (
//         <MDBFooter className='bg-gray-800 text-center text-lg-start'>
//             <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
//                 <div className='me-5 d-none d-lg-block'>
//                     <span>Get connected with us on social networks:</span>
//                 </div>

//                 <div>
//                     <Link href='https://www.facebook.com/uksnc' className='me-4 text-reset'>
//                         <button
//                             type="button"
//                             data-twe-ripple-init
//                             data-twe-ripple-color="light"
//                             className="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
//                             <span className="[&>svg]:h-4 [&>svg]:w-4">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="currentColor"
//                                     viewBox="0 0 320 512">
//                                     <path
//                                         d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
//                                 </svg>
//                             </span>
//                         </button>
//                     </Link>
//                     <Link href='https://twitter.com/SNC52678131' className='me-4 text-reset'>
//                         <button
//                             type="button"
//                             data-twe-ripple-init
//                             data-twe-ripple-color="light"
//                             className="mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
//                             <span className="[&>svg]:h-4 [&>svg]:w-4">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="currentColor"
//                                     viewBox="0 0 512 512">
//                                     <path
//                                         d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
//                                 </svg>
//                             </span>
//                         </button>
//                     </Link>
//                     <Link href='https://www.instagram.com/snc_supplements_/' className='me-4 text-reset'>
//                         <button
//                             type="button"
//                             data-twe-ripple-init
//                             data-twe-ripple-color="light"
//                             className="mb-2 inline-block rounded bg-[#c13584] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
//                             <span className="[&>svg]:h-4 [&>svg]:w-4">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="currentColor"
//                                     viewBox="0 0 448 512">
//                                     <path
//                                         d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
//                                 </svg>
//                             </span>
//                         </button>
//                     </Link>
//                 </div>
//             </section>

//             <section className=''>
//                 <MDBContainer className='text-center text-md-start mt-5'>
//                     <MDBRow className='mt-3'>
//                         <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
//                             <h6 className='text-uppercase fw-bold mb-4'>
//                                 <MDBIcon icon="gem" className="me-2" />
//                                 UKSNC Supplements
//                             </h6>
//                             <p>
//                                 SNC SUPPLEMENTS has been established since 2017 The products we produce are designed and used by experienced Bodybuilders. We aim at producing the highest quality products.
//                             </p>
//                         </MDBCol>
//                         <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
//                             <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//                             <p>
//                                 <MDBIcon icon="home" className="me-2" />
//                                 Moorings, Watling Street, Hockliffe, Leighton Buzzard LU7 9NB
//                             </p>
//                             <p>
//                                 <MDBIcon icon="envelope" className="me-3" />
//                                 hello@uksnc.co.uk
//                             </p>
//                             <p>
//                                 <MDBIcon icon="phone" className="me-3" /> 01525 211127
//                             </p>
//                         </MDBCol>
//                     </MDBRow>
//                 </MDBContainer>
//             </section>

//             <div className='text-center text-sm  p-2'  >
//                 © 2025 Copyright:
//                 <p className='text-reset text-lg font-bold' >
//                     CAMDesigns.com
//                 </p>
//             </div>
//         </MDBFooter>
//     );
// }

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center lg:text-left">
            <div className="flex flex-col lg:flex-row justify-between p-6  text-sm">
                <div className="mb-4 lg:mb-0">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex gap-4 justify-center">
                    <Link href="https://www.facebook.com/uksnc">
                        <svg className="h-6 w-6 text-white hover:text-blue-400" fill="currentColor" viewBox="0 0 320 512">
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                    </Link>
                    <Link href="https://twitter.com/SNC52678131">
                        <svg className="h-6 w-6 text-white hover:text-blue-400" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                    </Link>
                    <Link href="https://www.instagram.com/snc_supplements_/">
                        <svg className="h-6 w-6 text-white hover:text-pink-400" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="p-6 text-center  grid md:grid-cols-2 lg:grid-cols-2 xl:mx-12 gap-6">
                <div>
                    <h6 className="uppercase font-bold mb-4">UKSNC Supplements</h6>
                    <p>
                        SNC SUPPLEMENTS has been established since 2017. The products we produce are designed and used by experienced Bodybuilders. We aim at producing the highest quality products.
                    </p>
                </div>
                <div>
                    <h6 className="uppercase font-bold mb-4">Contact</h6>
                    <p className="mb-2">🏠 Moorings, Watling Street, Hockliffe, Leighton Buzzard LU7 9NB</p>
                    <p className="mb-2">✉️ hello@uksnc.co.uk</p>
                    <p>📞 01525 211127</p>
                </div>
            </div>

            <div className="text-center text-sm py-4 ">
                © 2025 Copyright: <span className="font-bold text-white">CAMDesigns.com</span>
            </div>
        </footer>
    );
}
