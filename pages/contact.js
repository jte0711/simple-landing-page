import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import NavHead from '../components/header';
import ContactContent from '../components/contactForm';
import 'bootstrap/dist/css/bootstrap.css';
import "../components/css/style.css";
 

class ContactPage extends React.Component{
  render(){
    return(
      <div>
        <Head>
          <title>Simple Landing Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className="wrapper">
          <NavHead/>
          <ContactContent/>
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default ContactPage;

