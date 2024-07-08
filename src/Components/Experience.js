import React, { useState } from 'react'
import '../Css/Experience.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialog1 = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function Experience() {

  const [openAccenture, setOpenAccenture] = useState(false);
  const [openCognizant, setOpenCognizant] = useState(false);

  const handleClickOpen = () => {
    setOpenAccenture(true);
  };
  const handleClose = () => {
    setOpenAccenture(false);
  };

  const handleCognizantClickOpen = () => {
    setOpenCognizant(true);
  };

  const handleCognizantClose = () => {
    setOpenCognizant(false);
  };
  return (
    <div>
        <div className='accenture'>
            <div className='imageCompany'>
            <img src='https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png'></img>
        
            </div>
            
            <div className='arrowcontent'>
              <div className='arrow'>
              
              
              </div>
              <div className='content'>
              <h3>Full-Time : 2 Years 7 Months</h3>
            <h3>Custom Software Engineering Specialist</h3>
            <h4>May-2024 to Present : 3 Months</h4>
            <h4>Chennai, Tamil Nadu , India</h4>
            <h3>Custom Software Development Senior Analyst</h3>
            <h4>Feb-2022 to May-2024 : 2 Years 4 Months</h4>
              </div>
            </div>
            
            <h5>As as a Java backend developer in the banking domain, specializing in microservices architecture with Java 21. <br/> Maintained end-to-end processes from development to deployment, utilizing Kubernetes and Docker for optimized configurations. <br/> Hands-on experience with CI/CD pipelines and their configurations; analyzed business requirements and translated them into technical specifications.</h5>
            <React.Fragment>
      <Button variant="outlined" style={{marginLeft:"50px"}} onClick={handleClickOpen}>
      Click here for exact and detailed Information of my Role & Technology I Used
      </Button>
      <BootstrapDialog1
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openAccenture}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Role in Accenture and Technologies I used
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <b>1. </b> I Worked on Bank Domain , We have used Orchestration Design pattern in Backend Api's.
          </Typography> 
          <Typography gutterBottom>
          <b>2. </b> I have specifically worked on Outer Api development from scratch where I need to create microservies which accepts data from Salesforce and then We need to send data to multiple inner Apis.
          </Typography>
          <Typography gutterBottom>
          <b>3. </b> I used Spring Boot 3.2.0 to create microservices and Java 21 for code . I used Asynchronous library like , @Async , Completable Future.
          </Typography>
          <Typography gutterBottom>
          <b>4. </b> I have worked on inner api's High Level / Low Level design , where we have divided services to smaller parts possible and we call it "Task" , and mostly tasks are independent from each other so we can do Asynchronous calls to tasks too .
          </Typography>
          <Typography gutterBottom>
          <b>5. </b> Since ' We have so many tasks for one event so for tracking it , We have status based tracking' Post each task we are updating the "Status" and Salesforce and Api can confirm  ( User Application - Status )  based on that status.
          </Typography>
          <Typography gutterBottom>
          <b>6. </b> Each and Every task are connected to Orchestration ( This is json , which is converted to task routine ) , So we dont need to change code everytime in case of product implementation changes ( Low Coupling ).
          </Typography>
          <Typography gutterBottom>
          <b>7. </b> I have worked on Kafka where we used to send alerts , I have worked on Mongo DB because we need to do so many read/ write calls . Apart from that I have used cache on top of MongoDB so we can do faster calls . I have used Redis so we  can store token and other keys.
          </Typography>
          <Typography gutterBottom>
          <b>8. </b> I have worked on CI/CD pipelines where we are using Jenkins. i have hands on experince on Jenkins pipeline script. We have Redhat OpenShift Cluster where we are have Kubernetes.
          </Typography>
          <Typography gutterBottom>
          <b>10.</b> I have done development as well as deployment to Kubernetes cluster . I have hands on experience on Docker and  Kubernetes - Routes, Services, Deployment, Configs and Secrets and Kubernetes engine. 
          </Typography>
          <Typography gutterBottom>
          <b>11.</b> Since' Point of all development is for implementation of multiple product using same system . So we did Backward Compatibility Development.  
          </Typography>
          <Typography gutterBottom>
          <b>Technologies & Tools : </b> Java 11, Java 21, Spring Boot, Spring Batch, Kafka, Docker, Mongo DB, MySql, Redis,  Kubernetes, OpenShift, Linux, Postman,Intellij , LLD & HLD , Debugging & Curcuit Breaker and Api Gateways etc.
          </Typography>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </BootstrapDialog1>
    </React.Fragment>

        </div>
        <br></br>
        <div className='cognizant'>
        <img className='cognizantImage' src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Cognizant%27s_logo.svg'></img>

        <div className='arrowcontent'>
          <div className='arrow'>

          </div>
          <div className='content'>
          <h3>Associate</h3>
        <h4>Aug 2018 - Jan 2022 : 3 Years 6 Months</h4>
        <h4>Chennai, Tamil Nadu , India</h4>

          </div>
        </div>
        
        <h5>
            As a Java developer on the Identity and Access Management (IAM) team, I integrated third-party providers for authentication and authorization using OAuth security with Spring Boot.<br></br> Managed AWS infrastructure (EC2, S3, CloudWatch, Route 53, security groups .. etc), and delivered end-to-end backend development in both monolithic and microservices architectures .
        </h5>
        <React.Fragment>
      <Button variant="outlined" style={{marginLeft:"50px",marginBottom:"50px"}} onClick={handleCognizantClickOpen}>
      Click here for exact and detailed Information of my Role & Technology I Used
      </Button>
      <BootstrapDialog
        onClose={handleCognizantClose}
        aria-labelledby="customized-dialog-title"
        open={openCognizant}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Role in Cognizant and Technologies I used
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCognizantClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <b>1. </b> I Worked on IAM ( Identity and Access Management) Domain , We have monolithic and micorservice atchitecture for Authentication and Authorization , Purpose of our team was to secure multiple products and implement new product and business changes and Improve/Optimize Security.
          </Typography>
          <Typography gutterBottom>
          <b>2. </b> I have specifically worked on Api development from scratch where user will send a request and i need to crate a record with specific access and scope and return credentials in response .
          </Typography>
          <Typography gutterBottom>
          <b>3. </b> The credentials and api I need to work was completely on Authorization implementation, So Every client will be authorized to specific resources.
          </Typography>
          <Typography gutterBottom>
          <b>4. </b> I have worked on Spring Boot Security , Oauth Security multiple filter chains so we can secure the apis.
          </Typography>
          <Typography gutterBottom>
          <b>5. </b> I have work on implementation where I need to trigger email to user if user will get access to a product , In used SQS/ SNS amazon web service tools.
          </Typography>
          <Typography gutterBottom>
          <b>6. </b> I have worked on Spring Batch where I need to migrate data from one database to another.
          </Typography>
          <Typography gutterBottom>
          <b>7. </b> I worked on MySql Schema preparation and table preparation for new service and functionallity .
          </Typography>
          
          <Typography gutterBottom>
          <b>Technologies & Tools : </b> Java 11, Java 21, Spring Boot, Spring Batch, Kafka, Docker, Mongo DB, MySql, Redis,  Amazon Web Services ( Ec2, SNS, SQS, S3 , Security groups , Route 53 etc ), Linux, Postman,Intellij , LLD & HLD , Debugging & Curcuit Breaker and Api Gateways etc.
          </Typography>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
      

        </div>
    </div>
  )
}

export default Experience