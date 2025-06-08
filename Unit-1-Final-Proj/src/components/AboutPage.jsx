export default  function AboutPage(){ //About 
    return(

<div id="about-page">
    
<div>
<h3>About Get Golden</h3>
</div>

<div className="flex-container" id="about-page-1">
<video width="600px" height="400px"alt="older man playing sax" controls>
    <source src="/saxgolden.mp4" type="video/mp4"></source>
</video>
</div>
<div>
<p>Get Golden believes your age does not<br />
define your ability to grow.<br />
We understand getting older can make<br />
conections with others harder<br />
Get Golden is here to provide a solution!</p>
<img src="/partyinggoldens.jpg" width="600px" height="400px" alt="Happy/Party"/>
</div>
<div>
<p>Find new Hobbies...
<br />Learn new skills...
<br />Make new friends and Get Golden!</p>
</div>

<img src="/GGflower.png"alt="Get Golden Logo" id="GG-bottom" style={{border:"none", borderRadius:"none", boxShadow:"none", width:"50%", height:"50%"}}></img>


</div>
    )
}