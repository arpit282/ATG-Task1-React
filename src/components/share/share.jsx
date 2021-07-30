import "./share.css"
import React, { useState } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';

export default function share() {
    return (
        <div className="post">
            <div className="postwrapper">
                
                <div className="postcenter">
                    <img className="postimg" src="/assets/banner.jpg" alt="" />
                </div>
                <br />
                <div className="article">
                <CreateIcon/> Article
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        
                    <span className="postusername">1,100+ React Material icons ready to use from the official website.</span>
                    </div>
                    <div className="postbottomright">
                        <MoreHorizIcon/>
                    </div>
                </div>
                <div className="text1">
                The following npm package, @material-ui/icons, includes the 1,100+ official Material ...
                </div>
                <div className="posttop">
                    <div className="posttopleft">
                     <img className="postprofileimage" src="/assets/p1.jpg" alt="" />
                    <span className="postusername">Arpit Singh</span>
                    </div>
                    <div className="posttopright">
                        <div className="views">
                        <VisibilityIcon/>1.4k views</div>
                        <div className="right">
                        <div className="shareit">
                        <ShareIcon/> Share

                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
