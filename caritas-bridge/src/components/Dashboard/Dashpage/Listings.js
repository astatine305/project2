import React from "react";
import "../User.css";


const Listings = () => (
<div className="rightColumn">
            
            <h2>Current Listings</h2>
            <hr />
            <div className="resultsDiv">
                
                <h4>Charity Name</h4>
                    <img className="logo" src="https://via.placeholder.com/150x150" alt="Charity Logo"></img>
                    <p><font color="#064554">Description:</font> Lorem ipsum dolor sit amet, feugiat pellentesque vitae ut nulla dui 
                        torquent, rutrum maecenas odio sagittis pellentesque sit pede, libero 
                        placerat posuere quis id vehicula. Vulputate facilisis. Morbi lacus. 
                        Sociosqu malesuada hac suscipit, non duis dui 
                        ipsum integer praesent.</p>
                    
                    <p><font color="#064554">Category:</font> Animals</p>
                    <p><font color="#064554">Location:</font> Los Angeles, CA</p>
                    <p><font color="#064554">Web Site:</font> <a href="https://www.google.com" target="_blank">www.website.com</a></p>
                <div className="spacer"><hr /></div>

                
                <h4>Charity Name</h4>
                    <img className="logo" src="https://via.placeholder.com/150x150" alt="Charity Logo"></img>
                    <p><font color="#064554">Description:</font> Lorem ipsum dolor sit amet, feugiat pellentesque vitae ut nulla dui 
                        torquent, rutrum maecenas odio sagittis pellentesque sit pede, libero 
                        placerat posuere quis id vehicula. Vulputate facilisis. Morbi lacus. 
                        Sociosqu malesuada hac suscipit, non duis dui 
                        ipsum integer praesent.</p>
                    
                    <p><font color="#064554">Category:</font> Animals</p>
                    <p><font color="#064554">Location:</font> Los Angeles, CA</p>
                    <p><font color="#064554">Web Site:</font> <a href="https://www.google.com" target="_blank">www.website.com</a></p>
                <div className="spacer"><hr /></div>
            </div>   
            
            </div>
);

export default Listings;