import './rightfeed.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

<style>
  
</style>
export default function Rightfeed() {

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
        <div className="contains">
        <div className="rightfeed">
        <div className="rightbarwrapper">
        <div className="left">

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Write Post
  </button>
  </div>
        </div>
        <div className="right">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleOpen}>Join Group</button>

        </div>
        </div>
        <div>
     
          <div >
    <div className="textright">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LocationOnIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Noida,India" />
          
          </Grid>
        </Grid>
      </div>
       <div className="info">
        <AccountCircle/>
        Your info will help us to serve better and personalised experience
        </div>
      </div>  
      <br /><br />
      <h4 className="rightbartitle"> <ThumbUpIcon/> Recommended Groups</h4>
      <ul className='rightbarfriendlist'>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">

          <img className="rightbarprofileimg" src="/assets/p1.jpg" alt="" />
          <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Arpit Singh</span>
          <div className="follow">Follow</div>
        </li>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">

          <img className="rightbarprofileimg" src="/assets/p1.jpg" alt="" />
          <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Arpit Singh</span>
          <div className="follow">Follow</div>
        </li>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">

          <img className="rightbarprofileimg" src="/assets/p1.jpg" alt="" />
          <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Arpit Singh</span>
          <div className="follow">Follow</div>
        </li>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">

          <img className="rightbarprofileimg" src="/assets/p1.jpg" alt="" />
          <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Arpit Singh</span>
          <div className="follow">Follow</div>
        </li>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">

          <img className="rightbarprofileimg" src="/assets/p1.jpg" alt="" />
          <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Arpit Singh</span>
          <div className="follow">Follow</div>
        </li>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">

          <img className="rightbarprofileimg" src="/assets/p1.jpg" alt="" />
          <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Arpit Singh</span>
          <div className="follow">Follow</div>
        </li>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">

          <div className=" text-primary">see more...</div>
        </div>
        </li>
      </ul>
    </div>
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
          <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <form class="md-float-material form-material" action="#" method="POST">
                                    <h3 class="text-center heading"><div class="alert alert-success" role="alert">  A simple primary alert—check it out!</div></h3>
                    <div class="auth-box card">
                        <div class="card-block">
                            <div class="row">
                                <div class="col-md-12">
                                </div>
                            </div>
                            <div class="form-group form-primary"> <input type="text" class="form-control" name="first_name" value="" placeholder="Display name" id="first_name"/> </div>
                            <div class="form-group form-primary"> <input type="text" class="form-control" name="email" value="" placeholder="Email" id="email"/> </div>
                            <div class="form-group form-primary"> <input type="password" class="form-control" name="password" placeholder="Password" value="" id="password"/> </div>
                            <div class="form-group form-primary"> <input type="password" class="form-control" name="password_confirm" placeholder="Repeat password" value="" id="password_confirm"/> </div>
                            <div class="row">
                                <div class="col-md-12 text-center"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="submit" 
                                value="Signup Now"/> 
                                  <i class="fa fa-lock"></i> 
                                </div>
                            </div>
                            <div class="or-container">
                                <div class="line-separator"></div>
                                <div class="or-label">or</div>
                                <div class="line-separator"></div>
                            </div>
                            <div class="row" >
                                <div class="col-md-6"> <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a> </div>
                                <div class="col-md-6"> <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a> </div>
                            </div> <br/>
                            <p class="text-inverse text-center">Already have an account? <a href="" data-abc="true" >Login</a></p>
                        </div>
                    </div>
                </form>
                    </div>
            </div>
        </div>
    </div>
        </Fade>
      </Modal>
 
    </>
    )
}
