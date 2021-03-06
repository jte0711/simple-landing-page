import React from 'react';
import Head from 'next/head';
import Home from '../components/home';
import Features from '../components/features';
import PageResponsive from '../components/prosResponsive';
import PageTodo from '../components/prosTodo';
import CallToAction from '../components/callToAction';
import Footer from '../components/footer';
import NavHead from '../components/header';
import "../node_modules/jquery/dist/jquery.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../components/css/style.css";
 

class LandingPage extends React.Component{
  render(){
    return(
      <div>
        <Head>
          <title>Simple Landing Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className="d-flex flex-column">
          <NavHead/>
          <Home/>
          <Features/>
          <PageResponsive imgSrc="images/undraw_trendy_interface_lg8x.svg" imgAlt="Trendy interface illustration" title="Responsive and designed for user" titleAlign="left">
          We carefully design the app to have  modern       
          looks and following the current style trend. 
          We’re making sure it won’t looks boring and 
          suits the taste of users while not ignoring
          the needs to make it is easy to 
          navigate and user friendy</PageResponsive>
          <PageTodo imgSrc="images/undraw_complete_task_u2c3.svg" imgAlt="To do list checked illustration" title="To do list unlike other" titleAlign="right">
          Our application give you the best experience
          for all the features in. That’s including our 
          to do list. Unlike other to do list, it will give 
          you  something different each cards you 
          make and done
          </PageTodo>
          <CallToAction/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LandingPage;

