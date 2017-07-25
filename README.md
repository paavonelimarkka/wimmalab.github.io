# wimmalab.github.io

This file is explain to using this website in the future.

# Testing

Overall performance on desktop and mobile is good.

### Desktop

All browses perform within acceptable expetations.
* Chrome OK -IE not supported (positioning is off, langing and about pages) 
* Edge partial support. (positioning in about page sligthly off) 
* Mozilla OK (titles below icons are off)

### Tablets

* Ipad Safari partly OK (Contact and langing arrow positioning off - in portrait view. Titles below icons are partly visible) 
* Ipad Chrome partly OK ( Titles below icons are partly visible ) 
* Android-tablet Chrome OK.

### Mobile Android

* Native browsers OK. (LG-G4, Honor7, Samsung Galaxy Note3) 
* Chrome OK.

# Bugs
* About Icons, text below is not showing. Reason: Texts have line-height which does not perform properly in many browsers. Needs fixing: ASAP. 
* Fonts do not display correctly in Linux. Needs fixing: SOMEDAY.


# Adding content
## Some Examples
### WIMMA Coaches
```
import Example from "../img/profile/example.jpg";
.
.
<div className="team-member">
    <div className="team-header">
        <img src={Example} alt={'example'} />
    </div>
    <div className="team-text">
        <h5>Name</h5>
        <p>Title</p>
        <p>Description</p>
        <span className="team-icon">
        <a href="https://www.linkedin.com/example" target="_blank" rel="noopener noreferrer">
            <LinkedIn/>
        </a>
        </span>
    </div>
</div>
```

### Projects

```
import Example from '../img/projects/example.png';
.
.
<div className="project projects-year">
    <h3>2018 - WIMMA Lab</h3>
</div>
<div className="project">
    <a href="https://wimmalab.github.io/example" target="_blank" rel="noopener noreferrer">
        <div className="icon">
            <img src={Example} alt="example"/>
        </div>
        <div className ="projects-text">
            <h5>Example project Title</h5>
            <p>Example Text</p>
            <div className="readmore"><FaArrowCircleRight /></div>
        </div>
    </a>
</div>
```

### Virtual Companies
```
import ExampleCompany from '../img/companies/example-hero.png';
.
.
<div className="company-icon">
    <a href="https://wimmalab.github.io/example">
        <img className="company-img" src={ExampleCompany} alt='example'/>
        <div className="company-overlay">
            <div className="company-text">
                <h4>Company Name</h4>
                <p>What | Company | Does</p>
                <div className="readmorecompany"><FaArrowCircleRight /></div>
            </div>
        </div>
    </a>
</div>
```

# For the future

### Adviced improvments
* Clean code, more organized sass workflow. (variables, config file etc...) 
* Some kind of content management (not hardcoded) 
* PropTypes (Add PropTypes)

### Suggested features
* Scroll Jacker between pages. 
* Video background for landing. 
* Reveal on scroll

### Blog

* Contents to Image cards 
* Scale hover effects to images, text shows up. 
* Unlimited scrolling

### Google Analytics
* Track Google Analytics traffic. Improve filters in Google Analytics more specific data.

### Optimization
* Meta tag improvment.
