import  './topbar.css'
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'bottom',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function Topbar() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
        <div className="topbarContainer">
        <div className='topbarleft'>
        <span className="logo"><img className="image" src="/assets/atg.png" alt="" /> </span>
        </div>
        <div className='topbarcenter'>
            <div className="searchbar">
            <SearchIcon className="search" />
            <input placeholder="search for favourite groups in ATG" className="searchInput"/>
            </div>
        </div>
        <div className='topbarright'>
            <span>Create account. <Button variant="contained" color="primary">
        It's free!<ExpandMoreIcon/>
      </Button></span>
       
        </div>
        </div>
        <div className="text">
         <img className="source" src="/assets/p2.jpg"/>
         <button type="button" class="btn btn-outline-light topbutton" onClick={handleOpen}>Join Group</button>
            <div class="centered">Computer Engineering <br />
            <span className="smalltext">142,563 engineers follow this!</span>
            </div>
         </div>


         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div class="container">
        <div class="row">
			<div class="col-md-5 mx-auto">
			<div id="first">
				<div class="myform form ">
					 <div class="logo mb-3">
						 <div class="col-md-12 text-center">
							<h1>Login</h1>
						 </div>
					</div>
                   <form action="" method="post" name="login">
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                           </div>
                           <div class="form-group">
                              <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or"/>
                                 <span class="span-or">or</span>
                              </div>
                           </div>
                           <div class="col-md-12 mb-3">
                           <div class="row signup" >
                                <div class="col-md-6 text-center mt-2"> <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a> </div>
                                <br />
                                <div class="col-md-6 text-center mt-2"> <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a> </div>
                            </div>
                           </div>
                           <div class="form-group">
                              <p class="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                           </div>
                        </form>
                 
				</div>
			</div>
			  <div id="second">
			      <div class="myform form ">
                        <div class="logo mb-3">
                           <div class="col-md-12 text-center">
                              <h1 >Signup</h1>
                           </div>
                        </div>
                        <form action="#" name="registration">
                           <div class="form-group">
                              <label for="exampleInputEmail1">First Name</label>
                              <input type="text"  name="firstname" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname"/>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Last Name</label>
                              <input type="text"  name="lastname" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname"/>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                           </div>
                           <div class="col-md-12 text-center mb-3">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="form-group">
                                 <p class="text-center"><a href="#" id="signin">Already have an account?</a></p>
                              </div>
                           </div>
                        </form>
                            </div>
                     </div>
                     
			</div>
		</div>
      </div>   
    </div>
        </Fade>
      </Modal>
 

        </>
    )
}
